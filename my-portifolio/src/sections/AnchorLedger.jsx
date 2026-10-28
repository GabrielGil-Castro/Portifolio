import { useState } from 'react'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import Carousel from '../components/Carousel'
import ProductLink from '../components/ProductLink'
import SectionLabel from '../components/SectionLabel'
import { SHOW_COMPANY_BRAND } from '../config'
import { ANCHOR_SLIDES } from '../data/anchor'
import useT from '../i18n/context'

function Block({ title, children }) {
  return (
    <div className="mt-20">
      <h3 className="border-b border-ink pb-3 font-display text-2xl font-bold lg:text-3xl">{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  )
}

// Rótulo em accent à esquerda, texto à direita, tracejado entre as linhas.
function LabeledRows({ rows }) {
  return (
    <dl>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`grid gap-1 py-4 md:grid-cols-[13rem_1fr] md:gap-6 ${i > 0 ? 'border-t border-dashed border-rule' : ''}`}
        >
          <dt className="text-xs font-semibold tracking-[0.25em] text-accent md:pt-1">{row.label}</dt>
          <dd className="leading-relaxed text-ink-soft">{row.text}</dd>
        </div>
      ))}
    </dl>
  )
}

function Decisions({ items, whyLabel }) {
  const [open, setOpen] = useState(() => new Set())

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <div>
      {items.map((d) => {
        const isOpen = open.has(d.id)
        const key = d.id.replace('.', '')
        return (
          <div key={d.id} className="border-b border-ink">
            <h4>
              <button
                type="button"
                id={`dec-${key}-btn`}
                aria-expanded={isOpen}
                aria-controls={`dec-${key}-panel`}
                onClick={() => toggle(d.id)}
                className="flex min-h-14 w-full items-center gap-4 py-4 text-left transition-colors hover:text-accent"
              >
                <span className="font-display text-lg font-bold text-accent">{d.id}</span>
                <span className="font-display text-xl leading-tight font-bold lg:text-2xl">{d.title}</span>
                <span className="ml-auto font-display text-2xl font-bold" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h4>
            <div
              id={`dec-${key}-panel`}
              role="region"
              aria-labelledby={`dec-${key}-btn`}
              hidden={!isOpen}
              className="max-w-3xl space-y-5 pb-8"
            >
              <p className="leading-relaxed text-ink-soft">{d.text}</p>
              {d.why && (
                <p className="leading-relaxed font-medium">
                  <span className="text-accent">{whyLabel}</span> {d.why}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function AnchorLedger() {
  const { t } = useT()
  const a = t.anchor
  const slides = ANCHOR_SLIDES.map((s) => ({ ...s, ...t.slides[s.id] }))

  return (
    <section id="anchor" aria-labelledby="anchor-title" className="scroll-mt-14 py-20 lg:scroll-mt-0">
      <SectionLabel number="02">{a.sectionLabel}</SectionLabel>

      <div className="@container mt-8">
        <h2 id="anchor-title" className="font-display text-[min(6.5rem,12cqi)] leading-none font-bold">
          {a.title}
        </h2>
      </div>
      {SHOW_COMPANY_BRAND && <p className="mt-3 text-sm tracking-[0.2em] text-muted uppercase">{a.brand}</p>}

      <dl className="mt-10 border border-ink">
        {a.sheet.map((row, i) => (
          <div
            key={row.label}
            className={`grid gap-1 p-4 sm:grid-cols-[7rem_1fr] sm:gap-6 ${i > 0 ? 'border-t border-dashed border-rule' : ''}`}
          >
            <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted uppercase sm:pt-0.5">{row.label}</dt>
            <dd className="text-sm text-ink-soft">{row.value}</dd>
          </div>
        ))}
      </dl>

      <Block title={a.blocks.problem}>
        <p className="max-w-[65ch] leading-relaxed text-ink-soft lg:text-lg">{a.problem}</p>
      </Block>

      <Block title={a.blocks.requirements}>
        <LabeledRows rows={a.requirements} />
      </Block>

      <Block title={a.blocks.product}>
        <Carousel slides={slides} label={t.carousel.label} />
      </Block>

      <Block title={a.blocks.process}>
        <div className="grid divide-y divide-ink border border-ink xl:grid-cols-3 xl:divide-x xl:divide-y-0">
          {a.process.map((p) => (
            <div key={p.id} className={`p-6 ${p.inverted ? 'bg-ink text-paper' : ''}`}>
              <p className={`font-display text-lg font-bold ${p.inverted ? 'text-accent-on-dark' : 'text-accent'}`}>{p.id}</p>
              <h4 className="mt-1 font-display text-xl leading-tight font-bold">{p.title}</h4>
              <p className={`mt-3 text-sm leading-relaxed ${p.inverted ? 'text-paper/85' : 'text-ink-soft'}`}>{p.text}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title={a.blocks.architecture}>
        <figure>
          <div className="border border-ink p-4 md:p-6">
            <ArchitectureDiagram />
          </div>
          <figcaption className="mt-4 max-w-[65ch] text-sm leading-relaxed text-ink-soft">{a.architectureCaption}</figcaption>
        </figure>
      </Block>

      <Block title={a.blocks.decisions}>
        <Decisions items={a.decisions} whyLabel={a.why} />
      </Block>

      <Block title={a.blocks.results}>
        <dl className="max-w-[65ch] space-y-6">
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted">{a.resultLabel}</dt>
            <dd className="mt-1 leading-relaxed text-ink-soft lg:text-lg">{a.result}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted">{a.nextLabel}</dt>
            <dd className="mt-1 leading-relaxed text-ink-soft lg:text-lg">{a.next}</dd>
          </div>
        </dl>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-rule pt-4">
          <p className="text-xs text-muted">{a.repoNote}</p>
          <ProductLink />
        </div>
      </Block>
    </section>
  )
}
