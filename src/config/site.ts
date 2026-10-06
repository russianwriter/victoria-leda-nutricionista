export const site = {
  name: 'Victória Lêda',
  role: 'Nutricionista',
  crn: 'CRN-11 12633',

  /*
   * ============================================================
   *  NÚMERO DO WHATSAPP
   *  Formato: código do país + DDD + número, apenas dígitos.
   *  Ex.: 55 (Brasil) + 88 (DDD) + 997952944 => '5588997952944'
   * ============================================================
   */
  whatsappNumber: '5588997952944',
  whatsappMessage:
    'Olá, Victória! Vim pelo seu site e gostaria de saber mais sobre o acompanhamento nutricional.',

  location: {
    city: 'Mombaça',
    state: 'Ceará',
    remote: 'Atendimento Remoto',
    presencial: 'Atendimento Presencial em Mombaça, Ceará',
    label: 'Atendimento Remoto e Presencial',
    address: 'Consultório em Mombaça - CE',
    online: 'Atendimento online para todo o Brasil',
  },

  /*
   * ============================================================
   *  EMPRESA QUE DESENVOLVEU O SITE
   * ============================================================
   */
  developer: {
    name: 'CodeSertão',
    logo: '/codesertao.png',
    url: 'https://www.instagram.com/codesertao/',
  },

  youtube: 'https://www.youtube.com/@victorialeda',
  instagram: 'https://www.instagram.com/victorialeda/',
  email: 'victorialeda@hotmail.com',

  /*
   * ============================================================
   *  TROQUE AQUI A FOTO DA NUTRICIONISTA
   *  Coloque o arquivo dentro da pasta /public e troque o caminho.
   *  Ex.: '/nutricionista.png' ou '/nutricionista.jpg'
   *  Ideal: PNG com fundo transparente (recorte da pessoa).
   * ============================================================
   */
  heroImage: '/vichero3-1.webp',
} as const

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

export const navLinks = [
  { label: 'SOBRE', href: '#sobre' },
  { label: 'CONTEÚDO', href: '#conteudo' },
  { label: 'CONTATO', href: '#contato' },
]
