import { whatsappUrl } from '../config'
import useT from '../i18n/context'
import { WhatsAppIcon } from './icons'

// Botão flutuante de WhatsApp. Some sem número configurado e com o menu mobile aberto.
export default function WhatsAppFloating({ hidden = false }) {
  const { t } = useT()
  const href = whatsappUrl(t.whatsapp.message)
  if (!href || hidden) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floatingLabel}
      title={t.links.whatsapp}
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center border border-ink bg-paper text-ink transition-colors hover:bg-ink hover:text-paper lg:right-8 lg:bottom-8"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  )
}
