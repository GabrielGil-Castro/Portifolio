import { useEffect, useRef } from 'react'
import { CONTACT, CV_URL, whatsappUrl } from '../config'
import useScrollSpy from '../hooks/useScrollSpy'
import useT from '../i18n/context'
import CopyEmail from './CopyEmail'
import { DownloadIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'
import LanguageSwitch from './LanguageSwitch'

const NAV = [
  { id: 'inicio', n: '01' },
  { id: 'anchor', n: '02', featured: true },
  { group: 'otherProjects' },
  { id: 'vulpis', n: '03' },
  { id: 'rota-brecho', n: '04' },
  { id: 'contato', n: '05' },
]

const SECTION_IDS = NAV.filter((item) => item.id).map((item) => item.id)

const FOCUSABLE = 'a[href], button:not([disabled])'

function NavList({ active, onNavigate }) {
  const { t } = useT()
  return (
    <nav aria-label={t.sidebar.navLabel}>
      <ul>
        {NAV.map((item) =>
          item.group ? (
            <li key={item.group} className="pt-[clamp(0.5rem,2vh,1.25rem)] pb-1 text-[11px] tracking-[0.25em] text-paper/60">
              {t.sidebar[item.group]}
            </li>
          ) : (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                aria-current={active.includes(item.id) ? 'location' : undefined}
                className="flex min-h-11 items-center gap-3 text-sm text-paper transition-colors hover:text-accent-on-dark"
              >
                <span
                  className={`font-display font-bold ${active.includes(item.id) ? 'text-accent-on-dark' : 'text-paper/60'}`}
                >
                  {item.n}
                </span>
                <span className="flex flex-col py-1">
                  {t.sidebar.nav[item.id]}
                  {item.featured && (
                    <span className="text-[11px] uppercase tracking-wider text-accent-on-dark">{t.sidebar.featuredTag}</span>
                  )}
                </span>
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}

function SidebarFooter() {
  const { t, lang } = useT()
  const links = [
    { key: 'github', href: CONTACT.github, Icon: GitHubIcon, external: true },
    { key: 'linkedin', href: CONTACT.linkedin, Icon: LinkedInIcon, external: true },
    { key: 'whatsapp', href: whatsappUrl(t.whatsapp.message), Icon: WhatsAppIcon, external: true },
    { key: 'cv', href: CV_URL[lang], Icon: DownloadIcon, download: true },
  ].filter((link) => link.href)

  return (
    <div className="space-y-[clamp(0.25rem,1.5vh,1rem)] text-xs [@media(max-height:679px)]:space-y-0">
      <p className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-[#4CAF50]" aria-hidden="true" />
        {t.sidebar.status}
      </p>
      <CopyEmail className="flex min-h-11 items-center text-left text-paper transition-colors hover:text-accent-on-dark">
        {(text) => <span>{text}</span>}
      </CopyEmail>
      <LanguageSwitch />
      <ul className="-ml-3 flex">
        {links.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              {...(link.download && { download: true })}
              aria-label={link.external ? `${t.links[link.key]} ${t.common.newTab}` : t.links[link.key]}
              title={t.links[link.key]}
              className="grid size-11 place-items-center text-paper transition-colors hover:text-accent-on-dark"
            >
              <link.Icon />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-paper/60 [@media(max-height:679px)]:hidden">{t.sidebar.location}</p>
    </div>
  )
}

export default function Sidebar({ menuOpen, onMenuChange }) {
  const { t } = useT()
  const active = useScrollSpy(SECTION_IDS)
  const mobileRef = useRef(null)
  const toggleRef = useRef(null)

  // Fecha o menu se a tela crescer até o breakpoint lg.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)')
    const onChange = (e) => e.matches && onMenuChange(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [onMenuChange])

  // Menu aberto: trava o scroll, foca o primeiro link, prende o Tab e fecha com Esc.
  useEffect(() => {
    if (!menuOpen) return
    const root = mobileRef.current
    document.body.style.overflow = 'hidden'
    root.querySelector('#mobile-menu a')?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onMenuChange(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const items = [...root.querySelectorAll(FOCUSABLE)]
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, onMenuChange])

  const close = () => onMenuChange(false)

  return (
    <>
      <aside className="on-dark hidden h-screen w-[300px] shrink-0 flex-col justify-between gap-[clamp(1rem,4vh,2.5rem)] overflow-y-auto bg-sidebar px-8 py-[clamp(1.25rem,4.5vh,2.5rem)] text-paper lg:sticky lg:top-0 lg:flex">
        <div>
          <a href="#inicio" className="inline-block font-display text-[40px] font-bold leading-none" aria-label={t.sidebar.homeLabel}>
            {t.sidebar.brand}
          </a>
          <p className="mt-[clamp(0.5rem,1.8vh,1rem)] text-sm font-medium">{t.sidebar.name}</p>
          <p className="text-xs text-paper/60">{t.sidebar.role}</p>
          <div className="mt-[clamp(1rem,4.5vh,2.5rem)]">
            <NavList active={active} />
          </div>
        </div>
        <SidebarFooter />
      </aside>

      <div ref={mobileRef} className="on-dark lg:hidden">
        <div className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between bg-sidebar px-4 text-paper">
          <a
            href="#inicio"
            onClick={close}
            className="flex min-h-11 items-center font-display text-2xl font-bold"
            aria-label={t.sidebar.homeLabel}
          >
            {t.sidebar.brand}
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => onMenuChange(!menuOpen)}
            className="min-h-11 min-w-11 border border-paper/40 px-4 text-xs uppercase tracking-[0.2em] transition-colors hover:border-paper"
          >
            {menuOpen ? t.sidebar.menuClose : t.sidebar.menuOpen}
          </button>
        </div>
        {menuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-14 bottom-0 z-50 flex flex-col justify-between gap-10 overflow-y-auto bg-sidebar px-4 py-8 text-paper"
          >
            <NavList active={active} onNavigate={close} />
            <SidebarFooter />
          </div>
        )}
      </div>
    </>
  )
}
