import CopyEmail from '../components/CopyEmail'
import SectionLabel from '../components/SectionLabel'
import { CONTACT, CV_URL, whatsappUrl } from '../config'
import useT from '../i18n/context'

const rowClass = 'flex min-h-14 w-full items-center justify-between gap-4 py-3 text-lg transition-colors hover:text-accent'

export default function AboutContact() {
  const { t, lang } = useT()
  const ab = t.about
  const links = [
    { key: 'linkedin', href: CONTACT.linkedin, external: true },
    { key: 'github', href: CONTACT.github, external: true },
    { key: 'whatsapp', href: whatsappUrl(t.whatsapp.message), external: true },
    { key: 'cv', href: CV_URL[lang], download: true, arrow: '↓' },
  ].filter((row) => row.href)

  return (
    <section id="contato" aria-labelledby="contato-title" className="scroll-mt-14 pt-20 pb-10 lg:scroll-mt-0">
      <SectionLabel number="05" as="h2" id="contato-title">
        {ab.sectionLabel}
      </SectionLabel>

      <div className="mt-10 grid gap-12 xl:grid-cols-2">
        <div className="max-w-[60ch] space-y-5 leading-relaxed text-ink-soft lg:text-lg">
          {ab.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div>
          <div className="@container">
            <h3 className="font-display text-[min(4rem,10cqi)] leading-none font-bold">{ab.contactTitle}</h3>
          </div>
          <ul className="mt-8 border-b border-ink">
            <li className="border-t border-ink">
              <CopyEmail className={`${rowClass} text-left`}>
                {(text, copied) => (
                  <>
                    <span>{t.links.email}</span>
                    <span className={`min-w-0 truncate text-sm ${copied ? 'text-accent' : 'text-muted'}`}>{text}</span>
                  </>
                )}
              </CopyEmail>
            </li>
            {links.map((row) => (
              <li key={row.key} className="border-t border-ink">
                <a
                  href={row.href}
                  {...(row.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  {...(row.download && { download: true })}
                  className={rowClass}
                >
                  <span>
                    {t.links[row.key]}
                    {row.external && <span className="sr-only"> {t.common.newTab}</span>}
                  </span>
                  <span aria-hidden="true">{row.arrow ?? '→'}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-20 flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-dashed border-rule pt-4 text-[11px] tracking-[0.2em] text-muted">
        <span>{ab.footerName}</span>
        <span>{ab.footerEnd}</span>
      </footer>
    </section>
  )
}
