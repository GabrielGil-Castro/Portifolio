// A marca da empresa depende de aprovação do sócio.
export const SHOW_COMPANY_BRAND = true

export const CONTACT = {
  github: 'https://github.com/GabrielGil-Castro',
  linkedin: 'https://www.linkedin.com/in/gabriel-gil-de-castro/',
  email: 'gildecastro.g@gmail.com',
}

export const CV_URL = '/cv/Gabriel-Gil-Castro-CV.pdf'

export const WHATSAPP_NUMBER = '5524999357737'
export const WHATSAPP_MESSAGE = 'Olá, Gabriel! Vi seu portfólio e gostaria de conversar.'

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : null

export const PRODUCT_URL = 'https://getverticaltrust.com'
