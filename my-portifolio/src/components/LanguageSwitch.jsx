import { Fragment, useEffect, useRef } from 'react'
import useT, { LANGUAGES } from '../i18n/context'

// "PT / EN": o idioma ativo em accent, o outro é o botão de troca.
export default function LanguageSwitch() {
  const { t, lang, setLang } = useT()
  const buttonRef = useRef(null)
  const switched = useRef(false)

  // Depois de trocar pelo teclado, o foco vai para o botão novo (o idioma anterior).
  useEffect(() => {
    if (!switched.current) return
    switched.current = false
    buttonRef.current?.focus()
  }, [lang])

  const onSwitch = (next) => {
    switched.current = true
    setLang(next)
  }

  return (
    <div role="group" aria-label={t.language.label} className="-ml-3 flex items-center text-xs tracking-[0.2em]">
      {LANGUAGES.map((code, i) => (
        <Fragment key={code}>
          {i > 0 && (
            <span className="text-paper/60" aria-hidden="true">
              /
            </span>
          )}
          {code === lang ? (
            <span className="grid size-11 place-items-center font-semibold text-accent-on-dark" aria-current="true">
              {code.toUpperCase()}
            </span>
          ) : (
            <button
              ref={buttonRef}
              type="button"
              onClick={() => onSwitch(code)}
              aria-label={t.language.switchTo}
              className="grid size-11 place-items-center text-paper transition-colors hover:text-accent-on-dark"
            >
              {code.toUpperCase()}
            </button>
          )}
        </Fragment>
      ))}
    </div>
  )
}
