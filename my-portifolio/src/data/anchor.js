export const ANCHOR_NUMBERS = [
  { value: '2', label: 'países' },
  { value: '~1.400', label: 'vias' },
  { value: '54', label: 'setores' },
  { value: '1.000+', label: 'testes automatizados' },
  { value: '5', label: 'idiomas' },
  { value: '3', label: 'papéis' },
]

// src: null = captura ainda não existe em public/anchor/ (mostra placeholder).
export const ANCHOR_SLIDES = [
  {
    file: 'anchor-explorar.png',
    src: '/anchor/anchor-explorar.png',
    title: 'Descoberta com mapa',
    caption:
      'Pins por setor com agrupamento, lista que acompanha a área visível e busca que combina dados próprios com cidades e bairros.',
    alt: 'Tela de descoberta do Anchor Ledger: mapa com pins agrupados por setor e lista de setores da área visível.',
  },
  {
    file: 'anchor-setor.png',
    src: '/anchor/anchor-setor.png',
    title: 'Página do setor',
    caption: 'Vias, última inspeção, reports abertos e quanto do setor já tem material registrado.',
    alt: 'Página de um setor no Anchor Ledger com lista de vias, data da última inspeção e reports abertos.',
  },
  {
    file: 'anchor-via.png',
    src: '/anchor/anchor-via.png',
    title: 'Página da via',
    caption: 'Resumo, histórico, peças, fotos e localização — e o que ainda falta cadastrar.',
    alt: 'Página de uma via no Anchor Ledger com resumo, histórico, peças, fotos e localização.',
  },
  {
    file: 'anchor-historico.png',
    src: null, // TODO: captura pendente (anchor-historico.png)
    title: 'Histórico append-only',
    caption: 'Inspeções, reports e notas numa timeline única. Nada é apagado ou sobrescrito.',
    alt: 'Timeline de histórico de uma via no Anchor Ledger com inspeções, reports e notas.',
  },
  {
    file: 'anchor-report.png',
    src: null, // TODO: captura pendente (anchor-report.png)
    title: 'Report público por QR',
    caption:
      'O escalador escaneia o QR colado no setor e reporta um problema sem precisar de conta.',
    alt: 'Formulário público de report de problema do Anchor Ledger, aberto a partir de um QR code.',
  },
  {
    file: 'anchor-vias-gerenciar.png',
    src: '/anchor/anchor-vias-gerenciar.png',
    title: 'Gestão do acervo',
    caption: 'Painel da associação com o acervo completo, filtros e status de cada via.',
    alt: 'Painel de gestão do Anchor Ledger com a lista completa de vias, filtros e status.',
  },
  {
    file: 'anchor-materiais.png',
    src: '/anchor/anchor-materiais.png',
    title: 'Vocabulário por associação',
    caption:
      'Cada associação define os próprios materiais. Nada é apagado: o que não se usa mais é desativado.',
    alt: 'Tela de materiais do Anchor Ledger com a lista de materiais definida pela associação, ativos e desativados.',
  },
]
