import { WHATSAPP_URL } from '../config'
import { WhatsAppIcon } from './icons'

// Botão flutuante de WhatsApp. Some sem número configurado e com o menu mobile aberto.
export default function WhatsAppFloating({ hidden = false }) {
  if (!WHATSAPP_URL || hidden) return null

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp (abre em nova aba)"
      title="WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center border border-ink bg-paper text-ink transition-colors hover:bg-ink hover:text-paper lg:right-8 lg:bottom-8"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  )
}
