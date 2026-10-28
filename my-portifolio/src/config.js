// A marca da empresa depende de aprovação do sócio.
export const SHOW_COMPANY_BRAND = true

export const CONTACT = {
  github: 'https://github.com/GabrielGil-Castro',
  linkedin: 'https://www.linkedin.com/in/gabriel-gil-de-castro/',
  email: 'gildecastro.g@gmail.com',
}

// Por enquanto o mesmo PDF nos dois idiomas.
export const CV_URL = {
  pt: '/cv/Gabriel-Gil-Castro-CV.pdf',
  en: '/cv/Gabriel-Gil-Castro-CV.pdf',
}

export const WHATSAPP_NUMBER = '5524999357737'

// A mensagem padrão vem do dicionário do idioma ativo.
export const whatsappUrl = (message) =>
  WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : null

export const PRODUCT_URL = 'https://getverticaltrust.com'
