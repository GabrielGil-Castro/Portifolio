import AnchorNumbers from '../components/AnchorNumbers'
import BrowserFrame from '../components/BrowserFrame'
import ProductLink from '../components/ProductLink'
import { ANCHOR_SLIDES } from '../data/anchor'
import useTypewriter from '../hooks/useTypewriter'

const HEADLINE = 'Gabriel Gil de Castro.\nDesenvolvedor full stack.'
const FEATURED = ANCHOR_SLIDES[0]

export default function Hero() {
  const [typed] = useTypewriter(HEADLINE)

  return (
    <section id="inicio" className="scroll-mt-14 pb-8 lg:scroll-mt-0 lg:pb-12">
      {/* Primeira tela: meta, título, parágrafo e botões cabem sem rolar. */}
      <div className="flex min-h-[calc(100svh-3.5rem)] flex-col pt-6 lg:min-h-svh lg:pt-8">
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-dashed border-rule pb-3 text-[11px] tracking-[0.2em] text-muted">
          <span>ARQUIVO Nº 001 — PORTFÓLIO</span>
          <span>FOLHA 01 / 05</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-8">
          <div className="@container">
            <h1 className="grid font-display text-[clamp(2rem,min(6.6cqi,11vh),6rem)] leading-[1.05] font-bold">
              <span className="sr-only">{HEADLINE}</span>
              <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-pre-line">
                {HEADLINE}
              </span>
              <span aria-hidden="true" className="col-start-1 row-start-1 whitespace-pre-line">
                {typed}
                <span className="cursor-blink ml-[0.05em] inline-block h-[0.8em] w-[0.08em] translate-y-[0.08em] bg-accent" />
              </span>
            </h1>
          </div>

          <p className="mt-6 max-w-[64ch] leading-relaxed text-ink-soft lg:mt-8 lg:text-lg">
            Hoje cuido da TI e da automação de processos num escritório de contabilidade. Fora dele, arquiteto, desenvolvo
            e automatizo meus projetos de ponta a ponta, com agentes de IA trabalhando sob a minha direção.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
            <a
              href="#anchor"
              className="inline-flex min-h-12 items-center border border-ink bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:border-accent hover:bg-accent"
            >
              Ler o estudo de caso ↓
            </a>
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center border border-ink px-6 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>

      <div className="grid border border-ink xl:grid-cols-[3fr_2fr]">
        <div className="border-b border-ink p-4 xl:border-r xl:border-b-0">
          <BrowserFrame src={FEATURED.src} alt={FEATURED.alt} title={FEATURED.title} eager />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-accent">EM DESTAQUE · EM PRODUÇÃO</p>
          <p className="font-display text-4xl leading-none font-bold">Anchor Ledger</p>
          <p className="text-sm text-ink-soft">SaaS de vias de escalada e histórico de segurança</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
            <ProductLink />
            <a
              href="#anchor"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-hover"
            >
              Ler o estudo de caso →
            </a>
          </div>
        </div>
        <div className="border-t border-ink p-6 xl:col-span-2">
          <AnchorNumbers />
        </div>
      </div>
    </section>
  )
}
