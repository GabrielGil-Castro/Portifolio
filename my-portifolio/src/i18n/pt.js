// Copy em português. en.js tem exatamente as mesmas chaves.
const pt = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Gabriel Gil — Portfólio',
    description:
      'Gabriel Gil de Castro, desenvolvedor full stack. Estudo de caso do Anchor Ledger, SaaS de vias de escalada e histórico de segurança.',
  },

  language: {
    label: 'Idioma',
    switchTo: 'Mudar idioma para English',
  },

  common: {
    newTab: '(abre em nova aba)',
  },

  skipLink: 'Pular para o conteúdo',

  sidebar: {
    brand: 'G.G.',
    homeLabel: 'G.G. — voltar ao início',
    name: 'Gabriel Gil',
    role: 'Desenvolvedor full stack',
    navLabel: 'Seções',
    nav: {
      inicio: 'Início',
      anchor: 'Anchor Ledger',
      vulpis: 'Vulpis',
      'rota-brecho': 'Rota Brechó',
      contato: 'Sobre & contato',
    },
    featuredTag: '★ principal',
    otherProjects: 'OUTROS PROJETOS',
    status: 'Aberto a novos projetos',
    location: 'Barra Mansa — RJ · © 2026',
    menuOpen: 'Menu',
    menuClose: 'Fechar',
  },

  links: {
    email: 'E-mail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
    cv: 'Baixar CV',
  },

  copyEmail: {
    title: 'Copiar e-mail',
    copied: 'copiado ✓',
    announce: 'E-mail copiado para a área de transferência',
  },

  whatsapp: {
    message: 'Olá, Gabriel! Vi seu portfólio e gostaria de conversar.',
    floatingLabel: 'Conversar no WhatsApp (abre em nova aba)',
  },

  productLink: 'Ver o Anchor ao vivo',

  hero: {
    fileNo: 'ARQUIVO Nº 001 — PORTFÓLIO',
    sheet: 'FOLHA 01 / 05',
    headline: 'Gabriel Gil de Castro.\nDesenvolvedor full stack.',
    intro:
      'Hoje cuido da TI e da automação de processos num escritório de contabilidade. Fora dele, arquiteto, desenvolvo e automatizo meus projetos de ponta a ponta, com agentes de IA trabalhando sob a minha direção.',
    ctaCase: 'Ler o estudo de caso ↓',
    ctaContact: 'Entrar em contato',
    featuredLabel: 'EM DESTAQUE · EM PRODUÇÃO',
    featuredTitle: 'Anchor Ledger',
    featuredSummary: 'SaaS de vias de escalada e histórico de segurança',
    featuredCase: 'Ler o estudo de caso →',
  },

  numbers: [
    { value: '2', label: 'países' },
    { value: '~1.400', label: 'vias' },
    { value: '54', label: 'setores' },
    { value: '1.000+', label: 'testes automatizados' },
    { value: '5', label: 'idiomas' },
    { value: '3', label: 'papéis' },
  ],

  // Textos dos prints, pela chave usada em data/anchor.js.
  slides: {
    explorar: {
      title: 'Descoberta com mapa',
      caption:
        'Pins por setor com agrupamento, lista que acompanha a área visível e busca que combina dados próprios com cidades e bairros.',
      alt: 'Tela de descoberta do Anchor Ledger: mapa com pins agrupados por setor e lista de setores da área visível.',
    },
    setor: {
      title: 'Página do setor',
      caption: 'Vias, última inspeção, reports abertos e quanto do setor já tem material registrado.',
      alt: 'Página de um setor no Anchor Ledger com lista de vias, data da última inspeção e reports abertos.',
    },
    via: {
      title: 'Página da via',
      caption: 'Resumo, histórico, peças, fotos e localização — e o que ainda falta cadastrar.',
      alt: 'Página de uma via no Anchor Ledger com resumo, histórico, peças, fotos e localização.',
    },
    historico: {
      title: 'Histórico append-only',
      caption: 'Inspeções, reports e notas numa timeline única. Nada é apagado ou sobrescrito.',
      alt: 'Timeline de histórico de uma via no Anchor Ledger com inspeções, reports e notas.',
    },
    report: {
      title: 'Report público por QR',
      caption: 'O escalador escaneia o QR colado no setor e reporta um problema sem precisar de conta.',
      alt: 'Formulário público de report de problema do Anchor Ledger, aberto a partir de um QR code.',
    },
    gerenciar: {
      title: 'Gestão do acervo',
      caption: 'Painel da associação com o acervo completo, filtros e status de cada via.',
      alt: 'Painel de gestão do Anchor Ledger com a lista completa de vias, filtros e status.',
    },
    materiais: {
      title: 'Vocabulário por associação',
      caption: 'Cada associação define os próprios materiais. Nada é apagado: o que não se usa mais é desativado.',
      alt: 'Tela de materiais do Anchor Ledger com a lista de materiais definida pela associação, ativos e desativados.',
    },
  },

  carousel: {
    label: 'Capturas do Anchor Ledger',
    roleDescription: 'carrossel',
    slideRole: 'slide',
    slideOf: (i, total) => `${i} de ${total}`,
    prev: 'Slide anterior',
    next: 'Próximo slide',
    goTo: (i, title) => `Ir para ${i}: ${title}`,
  },

  browserFrame: {
    pending: (title) => `[ captura pendente — ${title} ]`,
  },

  anchor: {
    sectionLabel: 'ESTUDO DE CASO · EM PRODUÇÃO',
    title: 'Anchor Ledger',
    brand: 'um produto Vertical Trust',
    sheet: [
      { label: 'Papel', value: 'Único desenvolvedor, full stack — do banco à interface, com as decisões de arquitetura' },
      { label: 'Time', value: 'Sócio idealizador do produto e eu, como único desenvolvedor' },
      {
        label: 'Stack',
        value: 'Node 22 · Express 5 · Prisma · MySQL · React 19 · Vite · Tailwind v4 · TanStack Query · Leaflet · Zod',
      },
      { label: 'Deploy', value: 'Railway + Vercel · CI no GitHub Actions' },
    ],
    blocks: {
      problem: 'Problema',
      requirements: 'Requisitos',
      product: 'O produto',
      process: 'Processo de engenharia',
      architecture: 'Arquitetura',
      decisions: 'Decisões técnicas',
      results: 'Resultado e próximos passos',
    },
    problem:
      'Associações de escalada mantêm o histórico de segurança das vias — inspeções, troca de grampos, problemas reportados — em planilhas, grupos de mensagem e memória de quem equipou. Não existe um registro único, auditável e por associação.',
    requirements: [
      { label: 'MULTI-TENANT', text: 'Cada associação edita só a própria base, mas consulta os dados de todas.' },
      {
        label: 'PERSISTÊNCIA',
        text: 'Nada é apagado, nem pelos administradores. O que sai de uso é desativado ou rejeitado, e o registro fica.',
      },
      {
        label: 'REPORT PELO QR',
        text: 'Escaladores reportam um problema na via escaneando o QR do setor, mesmo sem cadastro. Editar e gerenciar continua restrito aos membros da associação.',
      },
      { label: 'VOCABULÁRIO PRÓPRIO', text: 'Cada associação cadastra os próprios materiais, em vez de uma lista fixa.' },
    ],
    process: [
      {
        id: 'P.01',
        title: 'Sprints orientadas à entrega',
        text: 'Sprints curtas, reordenadas pelo que destrava o usuário — mapa e tela de descoberta antes da integração.',
      },
      {
        id: 'P.02',
        title: 'Pipeline de agentes de IA',
        text: 'Engenharia assistida por IA com processo, não vibe coding. 10 agentes — architect, implementer, tester e reviewer para back e front, mais deployer e documenter — executam cada sprint a partir de handoffs escritos. Eu decido a arquitetura num registro de decisões, defino o critério de pronto de cada passo e reviso tudo antes de produção.',
        inverted: true,
      },
      {
        id: 'P.03',
        title: 'Qualidade',
        text: 'Mais de 1.000 testes automatizados (Vitest + Supertest), CI no GitHub Actions e validação com Zod nas bordas da API.',
      },
    ],
    architectureCaption:
      'O app de campo puxa o catálogo e empurra os resultados — o Anchor nunca inicia a comunicação. OpenAPI gerado a partir dos schemas Zod.',
    decisions: [
      {
        id: 'D.01',
        title: 'Permissões num lugar só',
        text: 'Toda regra de quem pode ver e editar fica num ponto central. Se alguém cria uma rota nova e esquece a regra, o projeto nem compila.',
        why: 'Um esquecimento vira erro na hora, não vazamento em produção.',
      },
      {
        id: 'D.02',
        title: 'Visitante na casa dos outros',
        text: 'Quem é de uma associação e abre os dados de outra entra como visitante: vê tudo e não edita nada.',
        why: 'Uma conta só pra navegar pelo sistema inteiro, sem risco de mexer no que não é seu.',
      },
      {
        id: 'D.03',
        title: 'Sessão que se protege sozinha',
        text: 'O login se renova em segundo plano. Se alguém tenta usar uma credencial antiga roubada, o sistema percebe e encerra a sessão.',
        why: 'Credencial vazada não vira acesso permanente.',
      },
      {
        id: 'D.04',
        title: 'Histórico que não se apaga',
        text: 'Inspeções, reports e notas viram uma linha do tempo só. Nada é apagado nem editado por cima.',
        why: 'Em segurança, o que importa é saber o que aconteceu e quando.',
      },
    ],
    why: '→ por quê:',
    resultLabel: 'RESULTADO',
    result:
      'Em produção com associações na Itália e no Brasil, cerca de 1.400 vias catalogadas e interface em 5 idiomas.',
    nextLabel: 'PRÓXIMOS PASSOS',
    next: 'Levar o Anchor a mais associações e países, e integrar com os apps que as equipes de manutenção usam em campo.',
    repoNote: 'Repositório privado. Walkthrough do código mediante contato.',
  },

  architecture: {
    title: 'Arquitetura do Anchor Ledger',
    desc: 'Front (React) chama a API (Express), que passa pelas políticas de autorização antes de chegar ao banco (MySQL). O app de campo offline-first e a camada de dados são consumidores externos ligados à API.',
    front: ['Front', 'React'],
    api: ['API', 'Express'],
    policies: ['Políticas de', 'autorização'],
    database: ['Banco', 'MySQL'],
    fieldApp: ['App de campo', '(offline-first)'],
    dataLayer: ['Camada de dados'],
    dataLayerNarrow: ['Camada de', 'dados'],
    external: 'CONSUMIDORES EXTERNOS',
  },

  projects: {
    sectionLabel: 'OUTROS PROJETOS',
    myPart: 'MINHA PARTE',
    stackLabel: 'Stack',
    vulpis: {
      label: 'AGÊNCIA · EM ESTRUTURAÇÃO',
      title: 'Vulpis',
      summary: 'Agência digital para negócios locais do Sul Fluminense sem presença online — em sociedade.',
      part: 'Identidade visual, manifesto e a máquina de prospecção: coleta de leads no Google Maps → triagem de quem não tem site → site-modelo gerado para cada negócio → kit de abordagem por WhatsApp, e-mail e DM.',
      tags: ['Agentes de IA', 'HTML/CSS', 'Identidade visual'],
      stepsLabel: 'Fluxo de prospecção',
      steps: ['Coleta', 'Triagem', 'Site-modelo', 'Abordagem'],
    },
    rota: {
      label: 'PRODUTO · EM CONSTRUÇÃO',
      title: 'Rota Brechó',
      summary:
        'Mapa colaborativo de brechós: você marca de onde sai e aonde vai, e o app traça o caminho passando pelos brechós do trajeto.',
      part: 'Arquitetura e produto, com o mesmo método do Anchor: sprints curtas e pipeline de agentes de IA. É pensado pra quem gosta de garimpar e quer aproveitar o trajeto do dia a dia, e os donos de brechó cadastram a própria loja. Lançamento em Juiz de Fora e Belo Horizonte.',
      tags: ['TypeScript', 'Next.js', 'PostgreSQL + PostGIS', 'TanStack Query', 'Railway', 'Vercel'],
      mapTitle: 'Rota do ponto A ao ponto B passando por brechós no trajeto',
      mapStart: 'A',
      mapEnd: 'B',
    },
  },

  about: {
    sectionLabel: 'SOBRE & CONTATO',
    paragraphs: [
      'Vim das Humanidades (UFJF), passei pela Trybe e hoje curso Engenharia de Software na Estácio. Gosto de sistema com regra clara e de decisão que dá pra explicar.',
      'No dia a dia, sou o TI de um escritório de contabilidade e automatizo rotinas fiscais com Python e n8n.',
    ],
    contactTitle: 'Vamos conversar?',
    footerName: 'GABRIEL GIL — 2026',
    footerEnd: 'FIM DA FOLHA 05 / 05',
  },
}

export default pt
