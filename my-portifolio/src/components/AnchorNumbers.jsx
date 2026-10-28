import useT from '../i18n/context'

// Os 6 números do Anchor: 3 colunas, 6 a partir de 1280px.
// O número tem 32px e só encolhe quando a coluna é estreita demais para "~1.400".
export default function AnchorNumbers({ className = '' }) {
  const { t } = useT()
  return (
    <dl className={`grid grid-cols-3 gap-x-4 gap-y-6 xl:grid-cols-6 ${className}`}>
      {t.numbers.map((n) => (
        <div key={n.label} className="@container flex flex-col-reverse justify-end border-t border-ink pt-3">
          <dt className="mt-2 text-[11px] tracking-wider text-muted uppercase">{n.label}</dt>
          <dd className="font-display text-[min(2rem,27.5cqi)] leading-none font-bold">{n.value}</dd>
        </div>
      ))}
    </dl>
  )
}
