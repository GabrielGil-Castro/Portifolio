import { useRef, useState } from 'react'
import BrowserFrame from './BrowserFrame'

const pad = (n) => String(n).padStart(2, '0')

export default function Carousel({ slides, label }) {
  const [index, setIndex] = useState(0)
  const startX = useRef(null)
  const total = slides.length
  const slide = slides[index]

  const go = (i) => setIndex((i + total) % total)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(index + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(index - 1)
    }
  }

  const onPointerDown = (e) => {
    startX.current = e.clientX
  }

  const onPointerUp = (e) => {
    if (startX.current === null) return
    const dx = e.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
  }

  const arrowClass =
    'grid size-12 shrink-0 place-items-center border border-ink text-lg transition-colors hover:bg-ink hover:text-paper'

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={label} tabIndex={0} onKeyDown={onKeyDown}>
      <div
        className="touch-pan-y overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
      >
        <ul
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <li
              key={s.file}
              className="w-full shrink-0"
              aria-roledescription="slide"
              aria-label={`${pad(i + 1)} de ${pad(total)}`}
              inert={i !== index}
            >
              <BrowserFrame src={s.src} alt={s.alt} title={s.title} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button type="button" onClick={() => go(index - 1)} aria-label="Slide anterior" className={arrowClass}>
          <span aria-hidden="true">←</span>
        </button>
        <p className="font-display text-xl font-bold text-accent">
          {pad(index + 1)} / {pad(total)}
        </p>
        <button type="button" onClick={() => go(index + 1)} aria-label="Próximo slide" className={arrowClass}>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="mt-2 flex flex-wrap justify-center">
        {slides.map((s, i) => (
          <button
            key={s.file}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir para ${pad(i + 1)}: ${s.title}`}
            aria-current={i === index ? 'true' : undefined}
            className="grid size-11 place-items-center"
          >
            <span className={`size-2.5 border border-ink ${i === index ? 'bg-ink' : ''}`} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-4 border-t border-dashed border-rule pt-4">
        <p className="font-display text-xl font-bold">{slide.title}</p>
        <p className="mt-1 max-w-[65ch] text-ink-soft">{slide.caption}</p>
      </div>
    </div>
  )
}
