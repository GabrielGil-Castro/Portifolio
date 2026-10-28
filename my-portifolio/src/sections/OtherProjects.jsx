import RouteMap from '../components/RouteMap'
import SectionLabel from '../components/SectionLabel'
import useT from '../i18n/context'

function ProjectCard({ id, number, label, title, summary, part, tags, children }) {
  const { t } = useT()
  return (
    <article id={id} aria-labelledby={`${id}-title`} className="flex scroll-mt-20 flex-col gap-5 border border-ink p-6 lg:scroll-mt-8">
      <div className="flex items-center gap-3">
        <span className="font-display text-lg font-bold text-accent">{number}</span>
        <p className="text-[11px] font-semibold tracking-[0.25em] text-muted">{label}</p>
      </div>
      <div className="@container">
        <h3 id={`${id}-title`} className="font-display text-[min(3rem,14cqi)] leading-none font-bold">
          {title}
        </h3>
      </div>
      <p className="leading-relaxed text-ink-soft">{summary}</p>
      <div>
        <p className="text-[11px] font-semibold tracking-[0.25em] text-muted">{t.projects.myPart}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{part}</p>
      </div>
      {tags && (
        <ul className="flex flex-wrap gap-2" aria-label={t.projects.stackLabel}>
          {tags.map((tag) => (
            <li key={tag} className="border border-ink px-2 py-1 text-xs">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-2">{children}</div>
    </article>
  )
}

export default function OtherProjects() {
  const { t } = useT()
  const { vulpis, rota } = t.projects

  return (
    <section id="outros" aria-labelledby="outros-title" className="py-20">
      <SectionLabel as="h2" id="outros-title">
        {t.projects.sectionLabel}
      </SectionLabel>

      <div className="mt-10 grid gap-8 xl:grid-cols-2">
        <ProjectCard
          id="vulpis"
          number="03"
          label={vulpis.label}
          title={vulpis.title}
          summary={vulpis.summary}
          tags={vulpis.tags}
          part={vulpis.part}
        >
          <ol className="grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-4" aria-label={vulpis.stepsLabel}>
            {vulpis.steps.map((step, i) => (
              <li key={step} className="bg-paper p-3">
                <span className="block font-display font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xs">{step}</span>
              </li>
            ))}
          </ol>
        </ProjectCard>

        <ProjectCard
          id="rota-brecho"
          number="04"
          label={rota.label}
          title={rota.title}
          summary={rota.summary}
          part={rota.part}
          tags={rota.tags}
        >
          <div className="border border-ink p-3">
            <RouteMap />
          </div>
        </ProjectCard>
      </div>
    </section>
  )
}
