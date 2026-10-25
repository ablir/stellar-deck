import {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../Card/Card.jsx";
import CardInfoModal from "../Card/CardInfoModal.jsx";
import { CARDS } from "../../data/cards.js";
import { GROUP_BY_ID, SUBTYPES } from "../../data/categories.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { UI } from "../../i18n/strings.js";
import "../pages/pages.css";
import "./Gallery.css";

const CARD_RATIO = 672 / 442; // printed card aspect (h / w)
const CAPTION_H = 52; // ref + name under each tile, px

const clamp = (n, lo, hi) => Math.min(Math.max(n, lo), hi);

/**
 * Catalog — the main card stage. Reads /cards/:group/:subtype from the route to
 * decide which slice of the catalog to show. Two views:
 *
 * • Slider (default): a single row showing only as many cards as fit
 *   horizontally (measured live, also capped by the available height so
 *   nothing scrolls). Below it, a filmstrip of small thumbnails covers the
 *   whole slice with a glowing "window" over the cards on stage: drag the
 *   strip to move the window, click a thumbnail to jump, or use the arrows /
 *   ← → keys to snap one card at a time.
 * • Tiles: every card in the slice laid out small in a scrollable grid; the
 *   cards currently on stage are highlighted. Clicking a tile returns to the
 *   slider positioned on that card.
 *
 * Clicking a released card on stage opens CardInfoModal.
 */
export default function Catalog() {
  const { group, subtype } = useParams();
  const { t } = useLang();
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState("slider"); // 'slider' | 'tiles'

  const sub = subtype ? SUBTYPES[subtype] : null;
  const grp = group ? GROUP_BY_ID[group] : null;

  const cards = useMemo(() => {
    if (subtype) return CARDS.filter((c) => c.subtype === subtype);
    if (group) return CARDS.filter((c) => c.group === group);
    return CARDS;
  }, [group, subtype]);

  const heading = sub ? t(sub.label) : grp ? t(grp.label) : t(UI.allCards);
  const kicker = sub ? t(sub.groupLabel) : t(UI.catalogHeading);
  const blurb = grp && !sub ? t(grp.blurb) : "";

  // ── Stage sizing: how many cards fit in the row ───────────────────────────
  const rowRef = useRef(null);
  const [layout, setLayout] = useState({
    cardW: 210,
    gap: 24,
    visible: 3,
    thumbW: 46,
    thumbGap: 8,
  });

  useLayoutEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w === 0) return; // detached / not laid out yet — keep the last good layout
      const narrow = w < 560;
      const gap = narrow ? 12 : 24;
      // Width-driven size, then shrink so the tile + caption fits the height.
      let cardW = narrow ? 150 : w < 900 ? 180 : 240;
      if (h > 0)
        cardW = Math.min(cardW, Math.floor((h - CAPTION_H) / CARD_RATIO));
      cardW = Math.max(cardW, 110);
      const visible = Math.max(1, Math.floor((w + gap) / (cardW + gap)));
      setLayout({
        cardW,
        gap,
        visible,
        thumbW: narrow ? 36 : 46,
        thumbGap: narrow ? 6 : 8,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
    // The section is keyed by route and the row unmounts in tiles view, so the
    // element is recreated — re-attach the observer to the new one.
  }, [group, subtype, view]);

  const { cardW, gap, visible, thumbW, thumbGap } = layout;
  const step = thumbW + thumbGap;

  // ── Window position ───────────────────────────────────────────────────────
  const [start, setStart] = useState(0);
  const [dir, setDir] = useState(1);
  const maxStart = Math.max(0, cards.length - visible);
  const first = clamp(start, 0, maxStart);
  const last = Math.min(first + visible, cards.length);
  const shown = cards.slice(first, last);

  useEffect(() => setStart(0), [group, subtype]);
  useEffect(() => {
    if (start > maxStart) setStart(maxStart);
  }, [start, maxStart]);

  const jumpTo = useCallback(
    (index) => {
      setStart((s) => {
        const target = clamp(index, 0, maxStart);
        setDir(target >= clamp(s, 0, maxStart) ? 1 : -1);
        return target;
      });
    },
    [maxStart],
  );
  const go = useCallback(
    (delta) => jumpTo(clamp(start, 0, maxStart) + delta),
    [jumpTo, start, maxStart],
  );

  // Keyboard: ← / → snap one card (slider only, not while the info window is open).
  useEffect(() => {
    if (view !== "slider") return undefined;
    const onKey = (e) => {
      if (selected) return;
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, selected, view]);

  // ── Filmstrip drag ────────────────────────────────────────────────────────
  const scrollerRef = useRef(null);
  const drag = useRef(null);
  const moved = useRef(false);

  const onPointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    drag.current = { x: e.clientX, from: first };
    moved.current = false;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const delta = Math.round((e.clientX - drag.current.x) / step);
    if (delta !== 0) moved.current = true;
    jumpTo(drag.current.from + delta);
  };
  const endDrag = () => {
    drag.current = null;
  };
  const onThumbClick = (i) => {
    if (moved.current) return; // a drag just ended on this thumb — not a click
    jumpTo(i);
  };

  // Keep the window in view when the strip itself overflows.
  useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const left = first * step;
    const right = left + visible * step;
    if (left < sc.scrollLeft)
      sc.scrollTo({ left: Math.max(0, left - 24), behavior: "smooth" });
    else if (right > sc.scrollLeft + sc.clientWidth) {
      sc.scrollTo({ left: right - sc.clientWidth + 24, behavior: "smooth" });
    }
  }, [first, visible, step, view]);

  // ── Tiles view ────────────────────────────────────────────────────────────
  const tilesRef = useRef(null);
  useEffect(() => {
    if (view !== "tiles") return;
    // Open the grid scrolled to the cards that were on stage.
    tilesRef.current
      ?.querySelector(".tile.is-active")
      ?.scrollIntoView({ block: "center" });
  }, [view]);

  const pickTile = (i) => {
    jumpTo(i);
    setView("slider");
  };

  const windowStyle = {
    transform: `translateX(${first * step - 4}px)`,
    width: `${(last - first) * step - thumbGap + 8}px`,
  };

  const tiles = view === "tiles";

  return (
    <motion.section
      className="catalog"
      key={`${group ?? "all"}-${subtype ?? ""}`}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <header className="catalog__header">
        <div className="catalog__heading">
          <span className="catalog__kicker">{kicker}</span>
          <h2 className="catalog__title">{heading}</h2>
          {blurb && <p className="catalog__blurb">{blurb}</p>}
          <span className="catalog__count">
            {cards.length} {t(UI.navCards).toLowerCase()}
          </span>
        </div>

        {/* Slider ⇄ tiles toggle. */}
        {cards.length > 0 && (
          <button
            type="button"
            className={`view-toggle ${tiles ? "is-active" : ""}`}
            onClick={() => setView(tiles ? "slider" : "tiles")}
            aria-pressed={tiles}
            aria-label={tiles ? t(UI.viewSlider) : t(UI.viewTiles)}
            title={tiles ? t(UI.viewSlider) : t(UI.viewTiles)}
          >
            {tiles ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="7" y="5" width="10" height="14" rx="1.5" />
                <path d="M3 8v8M21 8v8" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            )}
            <span>{tiles ? t(UI.viewSlider) : t(UI.viewTiles)}</span>
          </button>
        )}
      </header>

      {cards.length === 0 ? (
        /* Announced set with no cards yet. */
        <div className="catalog__empty">
          <p>{t(UI.emptySet)}</p>
          <span className="stub__badge">{t(UI.comingSoon)}</span>
        </div>
      ) : tiles ? (
        /* Tiles: every card in the slice, small, scrollable. */
        <motion.div
          className="tiles"
          ref={tilesRef}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="tiles__hint">{t(UI.tilesHint)}</p>
          <div className="tiles__grid">
            {cards.map((card, i) => {
              const active = i >= first && i < last;
              return (
                <button
                  type="button"
                  key={card.id}
                  className={`tile ${active ? "is-active" : ""}`}
                  style={{ "--accent": SUBTYPES[card.subtype]?.color }}
                  onClick={() => pickTile(i)}
                  aria-label={card.ref}
                  aria-current={active ? "true" : undefined}
                >
                  <span className="tile__img">
                    <img
                      src={card.released ? card.front : card.back}
                      alt=""
                      loading="lazy"
                      draggable="false"
                    />
                  </span>
                  <span className="tile__ref">{card.ref}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      ) : (
        <>
          {/* Stage: the cards currently in the window. */}
          <div
            className="catalog__row"
            ref={rowRef}
            style={{ "--card-w": `${cardW}px`, "--card-gap": `${gap}px` }}
          >
            <AnimatePresence mode="popLayout" initial={false} custom={dir}>
              {shown.map((card, i) => (
                <motion.div
                  key={card.id}
                  className="catalog__cell"
                  layout
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 48, scale: 0.94 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -dir * 48, scale: 0.94 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card card={card} index={i} onOpen={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Filmstrip: every card in the slice, with the on-stage window. */}
          <div
            className="strip"
            style={{
              "--thumb-w": `${thumbW}px`,
              "--thumb-gap": `${thumbGap}px`,
            }}
          >
            <button
              type="button"
              className="strip__arrow"
              onClick={() => go(-1)}
              disabled={first === 0}
              aria-label={t(UI.carouselPrev)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>

            <div className="strip__scroller" ref={scrollerRef}>
              <div
                className="strip__track"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onLostPointerCapture={endDrag}
              >
                {cards.map((card, i) => {
                  const active = i >= first && i < last;
                  return (
                    <button
                      type="button"
                      key={card.id}
                      className={`strip__thumb ${active ? "is-active" : ""}`}
                      style={{ "--accent": SUBTYPES[card.subtype]?.color }}
                      onClick={() => onThumbClick(i)}
                      aria-label={card.ref}
                      aria-pressed={active}
                      title={card.ref}
                      draggable="false"
                    >
                      <img
                        src={card.released ? card.front : card.back}
                        alt=""
                        loading="lazy"
                        draggable="false"
                      />
                    </button>
                  );
                })}
                <div
                  className="strip__window"
                  style={windowStyle}
                  aria-hidden="true"
                />
              </div>
            </div>

            <button
              type="button"
              className="strip__arrow"
              onClick={() => go(1)}
              disabled={first >= maxStart}
              aria-label={t(UI.carouselNext)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <span className="strip__counter" aria-live="polite">
              {cards.length ? `${first + 1}–${last}` : "0"} / {cards.length}
            </span>
            <span className="strip__hint">{t(UI.carouselHint)}</span>
          </div>
        </>
      )}

      <AnimatePresence>
        {selected && (
          <CardInfoModal card={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
