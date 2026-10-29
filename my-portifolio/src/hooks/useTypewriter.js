import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Revela o texto caractere a caractere; com reduced motion, começa completo.
// Se o texto mudar (troca de idioma), mostra o novo completo, sem redigitar.
export default function useTypewriter(text, speed = 45) {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? text.length : 0))
  const [prevText, setPrevText] = useState(text)

  if (text !== prevText) {
    setPrevText(text)
    setCount(text.length)
  }

  useEffect(() => {
    if (count >= text.length) return
    const delay = text[count] === '\n' ? speed * 6 : speed
    const id = setTimeout(() => setCount((c) => c + 1), delay)
    return () => clearTimeout(id)
  }, [count, text, speed])

  return [text.slice(0, count), count >= text.length]
}
