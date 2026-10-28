export const ANCHOR_NUMBERS = [
  { value: '2', label: 'países' },
  { value: '~1.400', label: 'vias' },
  { value: '54', label: 'setores' },
  { value: '1.000+', label: 'testes automatizados' },
  { value: '5', label: 'idiomas' },
  { value: '3', label: 'papéis' },
]

// Histórico e report ficam comentados até existirem os prints em public/anchor/.
export const ANCHOR_SLIDES = [
  {
    file: 'anchor-explorar.webp',
    src: '/anchor/anchor-explorar.webp',
    title: 'Descoberta com mapa',
    caption:
      'Pins por setor com agrupamento, lista que acompanha a área visível e busca que combina dados próprios com cidades e bairros.',
    alt: 'Tela de descoberta do Anchor Ledger: mapa com pins agrupados por setor e lista de setores da área visível.',
  },
  {
    file: 'anchor-setor.webp',
    src: '/anchor/anchor-setor.webp',
    title: 'Página do setor',
    caption: 'Vias, última inspeção, reports abertos e quanto do setor já tem material registrado.',
    alt: 'Página de um setor no Anchor Ledger com lista de vias, data da última inspeção e reports abertos.',
  },
  {
    file: 'anchor-via.webp',
    src: '/anchor/anchor-via.webp',
    title: 'Página da via',
    caption: 'Resumo, histórico, peças, fotos e localização — e o que ainda falta cadastrar.',
    alt: 'Página de uma via no Anchor Ledger com resumo, histórico, peças, fotos e localização.',
  },
  // {
  //   file: 'anchor-historico.webp',
  //   src: '/anchor/anchor-historico.webp',
  //   title: 'Histórico append-only',
  //   caption: 'Inspeções, reports e notas numa timeline única. Nada é apagado ou sobrescrito.',
  //   alt: 'Timeline de histórico de uma via no Anchor Ledger com inspeções, reports e notas.',
  // },
  // {
  //   file: 'anchor-report.webp',
  //   src: '/anchor/anchor-report.webp',
  //   title: 'Report público por QR',
  //   caption:
  //     'O escalador escaneia o QR colado no setor e reporta um problema sem precisar de conta.',
  //   alt: 'Formulário público de report de problema do Anchor Ledger, aberto a partir de um QR code.',
  // },
  {
    file: 'anchor-vias-gerenciar.webp',
    src: '/anchor/anchor-vias-gerenciar.webp',
    title: 'Gestão do acervo',
    caption: 'Painel da associação com o acervo completo, filtros e status de cada via.',
    alt: 'Painel de gestão do Anchor Ledger com a lista completa de vias, filtros e status.',
  },
  {
    file: 'anchor-materiais.webp',
    src: '/anchor/anchor-materiais.webp',
    title: 'Vocabulário por associação',
    caption:
      'Cada associação define os próprios materiais. Nada é apagado: o que não se usa mais é desativado.',
    alt: 'Tela de materiais do Anchor Ledger com a lista de materiais definida pela associação, ativos e desativados.',
  },
]
