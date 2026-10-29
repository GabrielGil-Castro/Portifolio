import useT from '../i18n/context'

const STREETS_X = [20, 65, 110, 155, 200]
const STREETS_Y = [20, 55, 90, 125]
const PINS = [
  [42, 125],
  [110, 90],
  [155, 72],
  [200, 38],
]

export default function RouteMap() {
  const { t } = useT()
  const r = t.projects.rota
  return (
    <svg viewBox="0 0 240 150" className="w-full font-display" role="img" aria-labelledby="route-map-t">
      <title id="route-map-t">{r.mapTitle}</title>
      <g className="stroke-rule" strokeWidth="1">
        {STREETS_X.map((x) => (
          <line key={`x${x}`} x1={x} y1={8} x2={x} y2={137} />
        ))}
        {STREETS_Y.map((y) => (
          <line key={`y${y}`} x1={8} y1={y} x2={222} y2={y} />
        ))}
      </g>
      <path
        d="M20 125 H65 V90 H155 V55 H200 V20"
        className="stroke-accent"
        strokeWidth="2.5"
        strokeDasharray="6 4"
        fill="none"
      />
      {PINS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={4.5} className="fill-ink stroke-paper" strokeWidth="1.5" />
      ))}
      <rect x={15} y={120} width={10} height={10} className="fill-accent" />
      <rect x={195} y={15} width={10} height={10} className="fill-accent" />
      <text x={8} y={147} fontSize={12} fontWeight={700} className="fill-ink">{r.mapStart}</text>
      <text x={212} y={24} fontSize={12} fontWeight={700} className="fill-ink">{r.mapEnd}</text>
    </svg>
  )
}
