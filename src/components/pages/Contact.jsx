import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './pages.css'

/** Destination inbox for the contact form. */
export const CONTACT_EMAIL = 'contact@malmaisongames.com'

// The site is static (GitHub Pages), so delivery goes through FormSubmit's
// AJAX endpoint, which relays the payload to CONTACT_EMAIL. Override with
// VITE_CONTACT_ENDPOINT to point at any other JSON-accepting handler.
const ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const EMPTY = { lastName: '', firstName: '', email: '', subject: '', message: '' }
const NOTICE_MS = 6000

/**
 * Contact — form (nom, prénom, e-mail, objet, texte) posted to the studio
 * inbox. On success the form is cleared and a toast confirms; on failure the
 * user's input is kept intact so they can retry.
 */
export default function Contact() {
  const { t, lang } = useLang()
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending
  const [notice, setNotice] = useState(null) // { kind: 'success' | 'error', text }
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const notify = (kind, text) => {
    clearTimeout(timer.current)
    setNotice({ kind, text })
    timer.current = setTimeout(() => setNotice(null), NOTICE_MS)
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setNotice(null)

    const payload = {
      name: `${values.firstName} ${values.lastName}`.trim(),
      nom: values.lastName,
      prenom: values.firstName,
      email: values.email,
      objet: values.subject,
      message: values.message,
      _subject: `[Chains of Innocence] ${values.subject}`,
      _replyto: values.email,
      _template: 'table',
      _captcha: 'false',
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      const ok = res.ok && String(data.success ?? 'true') !== 'false'
      if (!ok) throw new Error(data.message || `HTTP ${res.status}`)

      setValues(EMPTY) // success → clear the form
      notify('success', t(UI.contactSuccess))
    } catch (err) {
      // Failure → keep what was typed. FormSubmit's one-time activation gate
      // is the common cause, so name it rather than showing a generic error.
      const needsActivation = /activat/i.test(err?.message ?? '')
      notify('error', t(needsActivation ? UI.contactNotActivated : UI.contactError))
    } finally {
      setStatus('idle')
    }
  }

  const sending = status === 'sending'

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="contact__scroll">
        <header className="contact__head">
          <span className="stub__kicker">Chains of Innocence</span>
          <h2 className="stub__title">{t(UI.navContact)}</h2>
          <p className="stub__body">{t(UI.contactBody)}</p>
          <a className="contact__mail" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </header>

        <form className="contact__form" onSubmit={onSubmit} noValidate={false} key={lang}>
          <div className="contact__row">
            <label className="field">
              <span className="field__label">{t(UI.contactLastName)} *</span>
              <input
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                maxLength={80}
                value={values.lastName}
                onChange={onChange}
                disabled={sending}
              />
            </label>
            <label className="field">
              <span className="field__label">{t(UI.contactFirstName)} *</span>
              <input
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                maxLength={80}
                value={values.firstName}
                onChange={onChange}
                disabled={sending}
              />
            </label>
          </div>

          <label className="field">
            <span className="field__label">{t(UI.contactEmail)} *</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              maxLength={160}
              value={values.email}
              onChange={onChange}
              disabled={sending}
            />
          </label>

          <label className="field">
            <span className="field__label">{t(UI.contactSubject)} *</span>
            <input
              name="subject"
              type="text"
              required
              maxLength={140}
              value={values.subject}
              onChange={onChange}
              disabled={sending}
            />
          </label>

          <label className="field">
            <span className="field__label">{t(UI.contactMessage)} *</span>
            <textarea
              name="message"
              rows={7}
              required
              maxLength={4000}
              value={values.message}
              onChange={onChange}
              disabled={sending}
            />
          </label>

          <div className="contact__actions">
            <span className="contact__hint">* {t(UI.contactRequired)}</span>
            <button type="submit" className="contact__submit" disabled={sending}>
              {sending && <span className="contact__spinner" aria-hidden="true" />}
              {sending ? t(UI.contactSending) : t(UI.contactSend)}
            </button>
          </div>
        </form>
      </div>

      {/* Toast — polite live region so screen readers announce the outcome. */}
      <div className="toast-region" aria-live="polite" aria-atomic="true">
        <AnimatePresence>
          {notice && (
            <motion.div
              key={notice.kind + notice.text}
              className={`toast toast--${notice.kind}`}
              role={notice.kind === 'error' ? 'alert' : 'status'}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="toast__icon" aria-hidden="true">
                {notice.kind === 'success' ? '✓' : '!'}
              </span>
              <span>{notice.text}</span>
              <button
                type="button"
                className="toast__close"
                onClick={() => setNotice(null)}
                aria-label={t(UI.close)}
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
