import { createContext, useContext } from 'react'
import en from './en'
import pt from './pt'

export const DICTIONARIES = { pt, en }
export const LANGUAGES = ['pt', 'en']
export const STORAGE_KEY = 'lang'

export const LanguageContext = createContext(null)

// { t, lang, setLang }: t é o dicionário do idioma ativo.
export default function useT() {
  return useContext(LanguageContext)
}
