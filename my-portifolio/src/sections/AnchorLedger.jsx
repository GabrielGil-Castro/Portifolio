import { useState } from 'react'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import Carousel from '../components/Carousel'
import ProductLink from '../components/ProductLink'
import SectionLabel from '../components/SectionLabel'
import { SHOW_COMPANY_BRAND } from '../config'
import { ANCHOR_SLIDES } from '../data/anchor'

const FICHA = [
  { label: 'Papel', value: 'Único desenvolvedor, full stack — do banco à interface, com as decisões de arquitetura' },
  { label: 'Time', value: 'Sócio idealizador do produto e eu, como único desenvolvedor' },
  {
    label: 'Stack',
    value: 'Node 22 · Express 5 · Prisma · MySQL · React 19 · Vite · Tailwind v4 · TanStack Query · Leaflet · Zod',
  },
  { label: 'Deploy', value: 'Railway + Vercel · CI no GitHub Actions' },
]

const REQUISITOS = [
  { label: 'MULTI-TENANT', text: 'Cada associação edita só a própria base, mas consulta os dados de todas.' },
  {
    label: 'PERSISTÊNCIA',
    text: 'Nada é apagado, nem pelos administradores. O que sai de uso é desativado ou rejeitado, e o registro fica.',
  },
  {
    label: 'REPORT PELO QR',
    text: 'Escaladores reportam um problema na via escaneando o QR do setor, mesmo sem cadastro. Editar e gerenciar continua restrito aos membros da associação.',
  },
  { label: 'VOCABULÁRIO PRÓPRIO', text: 'Cada associação cadastra os próprios materiais, em vez de uma lista fixa.' },
]

const PROCESSO = [
  {
    id: 'P.01',
    title: 'Sprints orientadas à entrega',
    text: 'Sprints curtas, reordenadas pelo que destrava o usuário — mapa e tela de descoberta antes da integração.',
  },
  {
    id: 'P.02',
    title: 'Pipeline de agentes de IA',
    text: 'Engenharia assistida por IA com processo, não vibe coding. 10 agentes — architect, implementer, tester e reviewer para back e front, mais deployer e documenter — executam cada sprint a partir de handoffs escritos. Eu decido a arquitetura num registro de decisões, defino o critério de pronto de cada passo e reviso tudo antes de produção.',
    inverted: true,
  },
  {
    id: 'P.03',
    title: 'Qualidade',
    text: 'Mais de 1.000 testes automatizados (Vitest + Supertest), CI no GitHub Actions e validação com Zod nas bordas da API.',
  },
]

const DECISOES = [
  {
    id: 'D.01',
    title: 'Permissões num lugar só',
    text: 'Toda regra de quem pode ver e editar fica num ponto central. Se alguém cria uma rota nova e esquece a regra, o projeto nem compila.',
    why: 'Um esquecimento vira erro na hora, não vazamento em produção.',
  },
  {
    id: 'D.02',
    title: 'Visitante na casa dos outros',
    text: 'Quem é de uma associação e abre os dados de outra entra como visitante: vê tudo e não edita nada.',
    why: 'Uma conta só pra navegar pelo sistema inteiro, sem risco de mexer no que não é seu.',
  },
  {
    id: 'D.03',
    title: 'Sessão que se protege sozinha',
    text: 'O login se renova em segundo plano. Se alguém tenta usar uma credencial antiga roubada, o sistema percebe e encerra a sessão.',
    why: 'Credencial vazada não vira acesso permanente.',
  },
  {
    id: 'D.04',
    title: 'Histórico que não se apaga',
    text: 'Inspeções, reports e notas viram uma linha do tempo só. Nada é apagado nem editado por cima.',
    why: 'Em segurança, o que importa é saber o que aconteceu e quando.',
  },
]

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

function Decisions() {
  const [open, setOpen] = useState(() => new Set())

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <div>
      {DECISOES.map((d) => {
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
                  <span className="text-accent">→ por quê:</span> {d.why}
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
  return (
    <section id="anchor" aria-labelledby="anchor-title" className="scroll-mt-14 py-20 lg:scroll-mt-0">
      <SectionLabel number="02">ESTUDO DE CASO · EM PRODUÇÃO</SectionLabel>

      <div className="@container mt-8">
        <h2 id="anchor-title" className="font-display text-[min(6.5rem,12cqi)] leading-none font-bold">
          Anchor Ledger
        </h2>
      </div>
      {SHOW_COMPANY_BRAND && <p className="mt-3 text-sm tracking-[0.2em] text-muted uppercase">um produto Vertical Trust</p>}

      <dl className="mt-10 border border-ink">
        {FICHA.map((row, i) => (
          <div
            key={row.label}
            className={`grid gap-1 p-4 sm:grid-cols-[7rem_1fr] sm:gap-6 ${i > 0 ? 'border-t border-dashed border-rule' : ''}`}
          >
            <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted uppercase sm:pt-0.5">{row.label}</dt>
            <dd className="text-sm text-ink-soft">{row.value}</dd>
          </div>
        ))}
      </dl>

      <Block title="Problema">
        <p className="max-w-[65ch] leading-relaxed text-ink-soft lg:text-lg">
          Associações de escalada mantêm o histórico de segurança das vias — inspeções, troca de grampos, problemas
          reportados — em planilhas, grupos de mensagem e memória de quem equipou. Não existe um registro único,
          auditável e por associação.
        </p>
      </Block>

      <Block title="Requisitos">
        <LabeledRows rows={REQUISITOS} />
      </Block>

      <Block title="O produto">
        <Carousel slides={ANCHOR_SLIDES} label="Capturas do Anchor Ledger" />
      </Block>

      <Block title="Processo de engenharia">
        <div className="grid divide-y divide-ink border border-ink xl:grid-cols-3 xl:divide-x xl:divide-y-0">
          {PROCESSO.map((p) => (
            <div key={p.id} className={`p-6 ${p.inverted ? 'bg-ink text-paper' : ''}`}>
              <p className={`font-display text-lg font-bold ${p.inverted ? 'text-accent-on-dark' : 'text-accent'}`}>{p.id}</p>
              <h4 className="mt-1 font-display text-xl leading-tight font-bold">{p.title}</h4>
              <p className={`mt-3 text-sm leading-relaxed ${p.inverted ? 'text-paper/85' : 'text-ink-soft'}`}>{p.text}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Arquitetura">
        <figure>
          <div className="border border-ink p-4 md:p-6">
            <ArchitectureDiagram />
          </div>
          <figcaption className="mt-4 max-w-[65ch] text-sm leading-relaxed text-ink-soft">
            O app de campo puxa o catálogo e empurra os resultados — o Anchor nunca inicia a comunicação. OpenAPI gerado
            a partir dos schemas Zod.
          </figcaption>
        </figure>
      </Block>

      <Block title="Decisões técnicas">
        <Decisions />
      </Block>

      <Block title="Resultado e próximos passos">
        <dl className="max-w-[65ch] space-y-6">
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted">RESULTADO</dt>
            <dd className="mt-1 leading-relaxed text-ink-soft lg:text-lg">
              Em produção com associações na Itália e no Brasil, cerca de 1.400 vias catalogadas e interface em 5
              idiomas.
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted">PRÓXIMOS PASSOS</dt>
            <dd className="mt-1 leading-relaxed text-ink-soft lg:text-lg">
              Levar o Anchor a mais associações e países, e integrar com os apps que as equipes de manutenção usam em
              campo.
            </dd>
          </div>
        </dl>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-rule pt-4">
          <p className="text-xs text-muted">Repositório privado. Walkthrough do código mediante contato.</p>
          <ProductLink />
        </div>
      </Block>
    </section>
  )
}
