import { useEffect, useMemo, useState } from 'react'
import { DICTIONARIES, LANGUAGES, LanguageContext, STORAGE_KEY } from './context'

// Idioma salvo; senão pt para navegador em português, en para o resto.
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // localStorage bloqueado: segue para o idioma do navegador.
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLanguage)
  const t = DICTIONARIES[lang]

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Sem localStorage, a escolha vale só para esta visita.
    }
  }

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [t])

  const value = useMemo(() => ({ t, lang, setLang }), [t, lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
