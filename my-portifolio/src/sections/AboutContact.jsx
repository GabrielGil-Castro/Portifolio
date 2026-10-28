import CopyEmail from '../components/CopyEmail'
import SectionLabel from '../components/SectionLabel'
import { CONTACT, CV_URL, WHATSAPP_URL } from '../config'

const LINKS = [
  { label: 'LinkedIn', href: CONTACT.linkedin, external: true },
  { label: 'GitHub', href: CONTACT.github, external: true },
  { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
  { label: 'Baixar CV', href: CV_URL, download: true, arrow: '↓' },
].filter((row) => row.href)

const rowClass = 'flex min-h-14 w-full items-center justify-between gap-4 py-3 text-lg transition-colors hover:text-accent'

export default function AboutContact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="scroll-mt-14 pt-20 pb-10 lg:scroll-mt-0">
      <SectionLabel number="05" as="h2" id="contato-title">
        SOBRE & CONTATO
      </SectionLabel>

      <div className="mt-10 grid gap-12 xl:grid-cols-2">
        <div className="max-w-[60ch] space-y-5 leading-relaxed text-ink-soft lg:text-lg">
          <p>
            Vim das Humanidades (UFJF), passei pela Trybe e hoje curso Engenharia de Software na Estácio. Gosto de
            sistema com regra clara e de decisão que dá pra explicar.
          </p>
          <p>
            No dia a dia, sou o TI de um escritório de contabilidade: automatizo rotinas fiscais com Python e n8n —
            como um fluxo que confere o PGDAS-D contra o Domínio e manda o relatório pronto para cada cliente.
          </p>
        </div>

        <div>
          <div className="@container">
            <h3 className="font-display text-[min(4rem,10cqi)] leading-none font-bold">Vamos conversar?</h3>
          </div>
          <ul className="mt-8 border-b border-ink">
            <li className="border-t border-ink">
              <CopyEmail className={`${rowClass} text-left`}>
                {(text, copied) => (
                  <>
                    <span>E-mail</span>
                    <span className={`min-w-0 truncate text-sm ${copied ? 'text-accent' : 'text-muted'}`}>{text}</span>
                  </>
                )}
              </CopyEmail>
            </li>
            {LINKS.map((row) => (
              <li key={row.label} className="border-t border-ink">
                <a
                  href={row.href}
                  {...(row.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  {...(row.download && { download: true })}
                  className={rowClass}
                >
                  <span>
                    {row.label}
                    {row.external && <span className="sr-only"> (abre em nova aba)</span>}
                  </span>
                  <span aria-hidden="true">{row.arrow ?? '→'}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-20 flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-dashed border-rule pt-4 text-[11px] tracking-[0.2em] text-muted">
        <span>GABRIEL GIL — 2026</span>
        <span>FIM DA FOLHA 05 / 05</span>
      </footer>
    </section>
  )
}
