import { useEffect, useState } from 'react'
import { CONTACT } from '../config'
import useT from '../i18n/context'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Fallback para contextos sem a Clipboard API (http, permissão negada).
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.appendChild(field)
    field.select()
    document.execCommand('copy')
    field.remove()
  }
}

// Botão que copia o e-mail e mostra "copiado ✓" por 2s.
// children recebe (texto, copiado) e decide o layout.
export default function CopyEmail({ className, children }) {
  const { t } = useT()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  const onClick = async () => {
    await copyText(CONTACT.email)
    setCopied(true)
  }

  return (
    <button type="button" onClick={onClick} title={t.copyEmail.title} className={className}>
      {children(copied ? t.copyEmail.copied : CONTACT.email, copied)}
      <span className="sr-only" aria-live="polite">
        {copied ? t.copyEmail.announce : ''}
      </span>
    </button>
  )
}
