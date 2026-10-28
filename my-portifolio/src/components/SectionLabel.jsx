// Linha de seção: número em accent, rótulo em caixa alta e traço tracejado.
export default function SectionLabel({ number, children, as = 'p', id }) {
  const Tag = as
  return (
    <div className="flex items-center gap-4">
      {number && <span className="font-display text-lg font-bold text-accent">{number}</span>}
      <Tag id={id} className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        {children}
      </Tag>
      <span className="h-0 flex-1 border-t border-dashed border-rule" aria-hidden="true" />
    </div>
  )
}
