import { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react'

/**
 * Bilingual (FR default / EN) language layer — no external i18n library.
 *
 * Content throughout the app is authored as `{ fr, en }` objects; `t(obj)`
 * picks the active language (falling back to FR then EN then '' so a missing
 * translation never crashes a render). The choice persists to localStorage.
 */

const LANGS = ['fr', 'en']
const STORAGE_KEY = 'coi.lang'

const LanguageContext = createContext(null)

function readInitial() {
  if (typeof window === 'undefined') return 'fr'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return LANGS.includes(saved) ? saved : 'fr'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitial)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(
    () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
    [],
  )

  // Resolve a `{ fr, en }` object (or a plain string) to the active language.
  const t = useCallback(
    (value) => {
      if (value == null) return ''
      if (typeof value === 'string') return value
      return value[lang] ?? value.fr ?? value.en ?? ''
    },
    [lang],
  )

  const ctx = useMemo(() => ({ lang, setLang, toggle, t }), [lang, toggle, t])

  return <LanguageContext.Provider value={ctx}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>')
  return ctx
}
