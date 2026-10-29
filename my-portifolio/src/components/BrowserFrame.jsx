import { useState } from 'react'
import useT from '../i18n/context'

// Print dentro de uma moldura de navegador. Sem src (ou se o arquivo não carregar),
// mostra o placeholder de captura pendente.
export default function BrowserFrame({ src, alt, title, eager = false, compact = false }) {
  const { t } = useT()
  // Guarda qual src falhou, para um arquivo novo no mesmo lugar voltar a ser tentado.
  const [failedSrc, setFailedSrc] = useState(null)
  const missing = !src || failedSrc === src

  return (
    <div className="border border-ink bg-paper">
      <div
        className={`flex items-center gap-1.5 border-b border-ink ${compact ? 'px-2 py-1' : 'px-3 py-2'}`}
        aria-hidden="true"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className={`${compact ? 'size-1.5' : 'size-2.5'} rounded-full border border-ink`} />
        ))}
      </div>
      <div className="aspect-[16/10] bg-code">
        {missing ? (
          <div
            className={`grid h-full place-items-center p-3 text-center text-muted ${compact ? 'text-[10px]' : 'text-xs sm:text-sm'}`}
          >
            {t.browserFrame.pending(title)}
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : undefined}
            decoding="async"
            draggable={false}
            onError={() => setFailedSrc(src)}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>
    </div>
  )
}
