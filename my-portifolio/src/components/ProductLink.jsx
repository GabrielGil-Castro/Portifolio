import { PRODUCT_URL } from '../config'
import useT from '../i18n/context'

// Botão sólido ink que abre o Anchor em produção numa nova aba.
export default function ProductLink({ className = '' }) {
  const { t } = useT()
  return (
    <a
      href={PRODUCT_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex min-h-12 items-center border border-ink bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:border-accent hover:bg-accent ${className}`}
    >
      {t.productLink} <span aria-hidden="true">&nbsp;↗</span>
      <span className="sr-only"> {t.common.newTab}</span>
    </a>
  )
}
