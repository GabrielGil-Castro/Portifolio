import { useId } from 'react'
import { ArrowMarker, Box } from './DiagramParts'

const TITLE = 'Arquitetura do Anchor Ledger'
const DESC =
  'Front (React) chama a API (Express), que passa pelas políticas de autorização antes de chegar ao banco (MySQL). O app de campo offline-first e a camada de dados são consumidores externos ligados à API.'

export default function ArchitectureDiagram() {
  const uid = useId().replace(/:/g, '')
  const h = `arrow-h-${uid}`
  const v = `arrow-v-${uid}`

  return (
    <>
      {/* Horizontal, a partir de xl */}
      <svg viewBox="0 0 760 300" className="hidden w-full font-mono xl:block" role="img" aria-labelledby={`${h}-t ${h}-d`}>
        <title id={`${h}-t`}>{TITLE}</title>
        <desc id={`${h}-d`}>{DESC}</desc>
        <defs>
          <ArrowMarker id={h} />
        </defs>
        <Box x={10} y={40} w={150} h={64} lines={['Front', 'React']} />
        <Box x={200} y={40} w={150} h={64} lines={['API', 'Express']} />
        <Box x={390} y={40} w={150} h={64} lines={['Políticas de', 'autorização']} accent />
        <Box x={580} y={40} w={150} h={64} lines={['Banco', 'MySQL']} />
        <g className="stroke-ink" strokeWidth="1.5" fill="none" markerEnd={`url(#${h})`}>
          <path d="M160 72 H198" />
          <path d="M350 72 H388" />
          <path d="M540 72 H578" />
          <path d="M185 200 V160 H255 V106" />
          <path d="M375 200 V160 H295 V106" />
        </g>
        <Box x={95} y={200} w={180} h={60} lines={['App de campo', '(offline-first)']} dashed size={13} />
        <Box x={285} y={200} w={180} h={60} lines={['Camada de dados']} dashed size={13} />
        <text x={95} y={286} fontSize={11} letterSpacing="2.5" className="fill-muted">
          CONSUMIDORES EXTERNOS
        </text>
      </svg>

      {/* Vertical, abaixo de xl */}
      <svg viewBox="0 0 340 380" className="mx-auto w-full max-w-[440px] font-mono xl:hidden" role="img" aria-labelledby={`${v}-t ${v}-d`}>
        <title id={`${v}-t`}>{TITLE}</title>
        <desc id={`${v}-d`}>{DESC}</desc>
        <defs>
          <ArrowMarker id={v} />
        </defs>
        <Box x={10} y={10} w={180} h={56} lines={['Front', 'React']} />
        <Box x={10} y={110} w={180} h={56} lines={['API', 'Express']} />
        <Box x={10} y={210} w={180} h={56} lines={['Políticas de', 'autorização']} accent />
        <Box x={10} y={310} w={180} h={56} lines={['Banco', 'MySQL']} />
        <g className="stroke-ink" strokeWidth="1.5" fill="none" markerEnd={`url(#${v})`}>
          <path d="M100 66 V108" />
          <path d="M100 166 V208" />
          <path d="M100 266 V308" />
          <path d="M216 98 H204 V126 H192" />
          <path d="M216 188 H204 V152 H192" />
        </g>
        <Box x={216} y={70} w={118} h={56} lines={['App de campo', '(offline-first)']} dashed size={10.5} />
        <Box x={216} y={160} w={118} h={56} lines={['Camada de', 'dados']} dashed size={10.5} />
      </svg>
    </>
  )
}
