import { useEffect, useState } from 'react'

// Retorna os ids das seções que cruzam uma faixa fina a 40% da altura da tela.
// Seções lado a lado (Vulpis e Rota Brechó no desktop) ficam ativas juntas.
export default function useScrollSpy(ids) {
  const key = ids.join(',')
  const [active, setActive] = useState([ids[0]])

  useEffect(() => {
    const order = key.split(',')
    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id),
        )
        if (visible.size) setActive(order.filter((id) => visible.has(id)))
      },
      { rootMargin: '-40% 0px -59% 0px' },
    )
    order.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [key])

  return active
}
