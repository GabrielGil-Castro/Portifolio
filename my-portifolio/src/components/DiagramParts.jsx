// Peças dos diagramas SVG (arquitetura e pipeline).

export function Box({ x, y, w, h, lines, accent = false, dashed = false, stacked = false, size = 14, subSize = size }) {
  const lineHeight = (size + subSize) / 2 * 1.35
  const top = y + h / 2 - ((lines.length - 1) * lineHeight) / 2
  const rectProps = {
    width: w,
    height: h,
    className: accent ? 'fill-paper stroke-accent' : 'fill-paper stroke-ink',
    strokeWidth: accent ? 2 : 1,
    strokeDasharray: dashed ? '5 4' : undefined,
  }
  return (
    <g>
      {/* Caixa empilhada: indica trilhas paralelas */}
      {stacked && <rect x={x + 5} y={y + 5} {...rectProps} />}
      <rect x={x} y={y} {...rectProps} />
      <text textAnchor="middle" dominantBaseline="central" className={accent ? 'fill-accent' : 'fill-ink'}>
        {lines.map((line, i) => (
          <tspan
            key={line}
            x={x + w / 2}
            y={top + i * lineHeight}
            fontSize={i === 0 ? size : subSize}
            fontWeight={i === 0 ? 600 : 400}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  )
}

export function ArrowMarker({ id }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" className="fill-ink" />
    </marker>
  )
}
