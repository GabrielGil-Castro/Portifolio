import RouteMap from '../components/RouteMap'
import SectionLabel from '../components/SectionLabel'

const VULPIS_STEPS = ['Coleta', 'Triagem', 'Site-modelo', 'Abordagem']
const VULPIS_TAGS = ['Agentes de IA', 'HTML/CSS', 'Identidade visual']
const ROTA_TAGS = ['TypeScript', 'Next.js', 'PostgreSQL + PostGIS', 'TanStack Query', 'Railway', 'Vercel']

function ProjectCard({ id, number, label, title, summary, part, tags, children }) {
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
        <p className="text-[11px] font-semibold tracking-[0.25em] text-muted">MINHA PARTE</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{part}</p>
      </div>
      {tags && (
        <ul className="flex flex-wrap gap-2" aria-label="Stack">
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
  return (
    <section id="outros" aria-labelledby="outros-title" className="py-20">
      <SectionLabel as="h2" id="outros-title">
        OUTROS PROJETOS
      </SectionLabel>

      <div className="mt-10 grid gap-8 xl:grid-cols-2">
        <ProjectCard
          id="vulpis"
          number="03"
          label="AGÊNCIA · EM ESTRUTURAÇÃO"
          title="Vulpis"
          summary="Agência digital para negócios locais do Sul Fluminense sem presença online — em sociedade."
          tags={VULPIS_TAGS}
          part="Identidade visual, manifesto e a máquina de prospecção: coleta de leads no Google Maps → triagem de quem não tem site → site-modelo gerado para cada negócio → kit de abordagem por WhatsApp, e-mail e DM."
        >
          <ol className="grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-4" aria-label="Fluxo de prospecção">
            {VULPIS_STEPS.map((step, i) => (
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
          label="PRODUTO · EM CONSTRUÇÃO"
          title="Rota Brechó"
          summary="Mapa colaborativo de brechós: você marca de onde sai e aonde vai, e o app traça o caminho passando pelos brechós do trajeto."
          part="Arquitetura e produto, com o mesmo método do Anchor: sprints curtas e pipeline de agentes de IA. É pensado pra quem gosta de garimpar e quer aproveitar o trajeto do dia a dia, e os donos de brechó cadastram a própria loja. Lançamento em Juiz de Fora e Belo Horizonte."
          tags={ROTA_TAGS}
        >
          <div className="border border-ink p-3">
            <RouteMap />
          </div>
        </ProjectCard>
      </div>
    </section>
  )
}
