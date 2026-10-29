// English copy. Same keys as pt.js.
const en = {
  meta: {
    htmlLang: 'en',
    title: 'Gabriel Gil — Portfolio',
    description:
      'Gabriel Gil de Castro, full stack developer. Case study of Anchor Ledger, a SaaS for climbing routes and safety history.',
  },

  language: {
    label: 'Language',
    switchTo: 'Switch language to Português',
  },

  common: {
    newTab: '(opens in a new tab)',
  },

  skipLink: 'Skip to content',

  sidebar: {
    brand: 'G.G.',
    homeLabel: 'G.G. — back to top',
    name: 'Gabriel Gil',
    role: 'Full stack developer',
    navLabel: 'Sections',
    nav: {
      inicio: 'Home',
      anchor: 'Anchor Ledger',
      vulpis: 'Vulpis',
      'rota-brecho': 'Rota Brechó',
      contato: 'About & contact',
    },
    featuredTag: '★ featured',
    otherProjects: 'OTHER PROJECTS',
    status: 'Open to new projects',
    location: 'Barra Mansa, Brazil · © 2026',
    menuOpen: 'Menu',
    menuClose: 'Close',
  },

  links: {
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
    cv: 'Download CV',
  },

  copyEmail: {
    title: 'Copy email',
    copied: 'copied ✓',
    announce: 'Email copied to clipboard',
  },

  whatsapp: {
    message: 'Hi, Gabriel! I saw your portfolio and would like to talk.',
    floatingLabel: 'Chat on WhatsApp (opens in a new tab)',
  },

  productLink: 'See Anchor live',

  hero: {
    fileNo: 'FILE NO. 001 — PORTFOLIO',
    sheet: 'SHEET 01 / 05',
    headline: 'Gabriel Gil de Castro.\nFull stack developer.',
    intro:
      'I currently handle IT and process automation at an accounting firm. Outside work, I architect, build, and automate my own projects end to end, with AI agents working under my direction.',
    ctaCase: 'Read the case study ↓',
    ctaContact: 'Get in touch',
    featuredLabel: 'FEATURED · IN PRODUCTION',
    featuredTitle: 'Anchor Ledger',
    featuredSummary: 'SaaS for climbing routes and safety history',
    featuredCase: 'Read the case study →',
  },

  numbers: [
    { value: '2', label: 'countries' },
    { value: '~1,400', label: 'routes' },
    { value: '54', label: 'sectors' },
    { value: '1,000+', label: 'automated tests' },
    { value: '5', label: 'languages' },
    { value: '3', label: 'user roles' },
  ],

  // Screenshot copy, keyed like data/anchor.js. The screenshots themselves stay in Portuguese.
  slides: {
    explorar: {
      title: 'Map-based discovery',
      caption:
        'Sector pins with clustering, a list that follows the visible area, and search that combines Anchor data with cities and neighborhoods.',
      alt: 'Anchor Ledger discovery screen: map with sector pins clustered and a list of the sectors in the visible area.',
    },
    setor: {
      title: 'Sector page',
      caption: 'Routes, last inspection, open reports, and how much of the sector already has hardware recorded.',
      alt: 'Sector page in Anchor Ledger with the route list, last inspection date, and open reports.',
    },
    via: {
      title: 'Route page',
      caption: 'Summary, history, parts, photos, and location — plus what is still missing from the record.',
      alt: 'Route page in Anchor Ledger with summary, history, parts, photos, and location.',
    },
    historico: {
      title: 'Append-only history',
      caption: 'Inspections, reports, and notes in a single timeline. Nothing is deleted or overwritten.',
      alt: 'History timeline for a route in Anchor Ledger with inspections, reports, and notes.',
    },
    report: {
      title: 'Public report via QR',
      caption: 'A climber scans the QR code posted at the sector and reports a problem without an account.',
      alt: 'Anchor Ledger public problem report form, opened from a QR code.',
    },
    gerenciar: {
      title: 'Route catalog management',
      caption: 'Association dashboard with the full catalog, filters, and the status of each route.',
      alt: 'Anchor Ledger management dashboard with the full route list, filters, and status.',
    },
    materiais: {
      title: 'Per-association vocabulary',
      caption: 'Each association defines its own hardware list. Nothing is deleted: items no longer in use are deactivated.',
      alt: 'Anchor Ledger materials screen with the hardware list defined by the association, active and deactivated.',
    },
  },

  carousel: {
    label: 'Anchor Ledger screenshots',
    roleDescription: 'carousel',
    slideRole: 'slide',
    slideOf: (i, total) => `${i} of ${total}`,
    prev: 'Previous slide',
    next: 'Next slide',
    goTo: (i, title) => `Go to ${i}: ${title}`,
  },

  browserFrame: {
    pending: (title) => `[ screenshot pending — ${title} ]`,
  },

  anchor: {
    sectionLabel: 'CASE STUDY · IN PRODUCTION',
    title: 'Anchor Ledger',
    brand: 'a Vertical Trust product',
    sheet: [
      { label: 'Role', value: 'Sole developer, full stack — from database to UI, including all architecture decisions' },
      { label: 'Team', value: 'A co-founder who conceived the product, and me as the sole developer' },
      {
        label: 'Stack',
        value: 'Node 22 · Express 5 · Prisma · MySQL · React 19 · Vite · Tailwind v4 · TanStack Query · Leaflet · Zod',
      },
      { label: 'Deploy', value: 'Railway + Vercel · CI on GitHub Actions' },
    ],
    blocks: {
      problem: 'Problem',
      requirements: 'Requirements',
      product: 'The product',
      process: 'Engineering process',
      architecture: 'Architecture',
      decisions: 'Technical decisions',
      results: 'Results and next steps',
    },
    problem:
      'Climbing associations keep the safety history of their routes — inspections, bolt replacements, reported problems — in spreadsheets, group chats, and the memory of whoever bolted them. There is no single, auditable record per association.',
    requirements: [
      { label: 'MULTI-TENANT', text: "Each association edits only its own data, but can view everyone's." },
      {
        label: 'PERSISTENCE',
        text: 'Nothing is deleted, not even by administrators. What goes out of use is deactivated or rejected, and the record stays.',
      },
      {
        label: 'REPORTS VIA QR',
        text: "Climbers report a problem on a route by scanning the sector's QR code, even without an account. Editing and management stay restricted to association members.",
      },
      { label: 'OWN VOCABULARY', text: 'Each association registers its own hardware instead of using a fixed list.' },
    ],
    process: [
      {
        id: 'P.01',
        title: 'Delivery-driven sprints',
        text: 'Short sprints, reordered by what unblocks the user — map and discovery screen before integration.',
      },
      {
        id: 'P.02',
        title: 'AI agent pipeline',
        text: 'AI-assisted engineering with a process, not vibe coding. 10 agents — architect, implementer, tester, and reviewer for back end and front end, plus deployer and documenter — run each sprint from written handoffs. I make the architecture calls in a decision log, define the done criteria for each step, and review everything before production.',
        inverted: true,
      },
      {
        id: 'P.03',
        title: 'Quality',
        text: 'Over 1,000 automated tests (Vitest + Supertest), CI on GitHub Actions, and Zod validation at the API boundaries.',
      },
    ],
    architectureCaption:
      'The field app pulls the catalog and pushes results — Anchor never initiates communication. OpenAPI generated from the Zod schemas.',
    decisions: [
      {
        id: 'D.01',
        title: 'Permissions in one place',
        text: "Every rule about who can view and edit lives in one central point. If someone adds a new endpoint and forgets the rule, the project won't compile.",
        why: 'A missed rule becomes an immediate error, not a leak in production.',
      },
      {
        id: 'D.02',
        title: 'Read-only across associations',
        text: "A member of one association who opens another association's data enters as a visitor: they can see everything and edit nothing.",
        why: "One account to browse the whole system, with no risk of changing what isn't yours.",
      },
      {
        id: 'D.03',
        title: 'Self-protecting sessions',
        text: 'Sessions refresh in the background. If someone tries to use an old, stolen credential, the system detects it and ends the session.',
        why: "A leaked credential doesn't turn into permanent access.",
      },
      {
        id: 'D.04',
        title: 'History that cannot be erased',
        text: 'Inspections, reports, and notes form a single timeline. Nothing is deleted or overwritten.',
        why: 'In safety, what matters is knowing what happened and when.',
      },
    ],
    why: '→ why:',
    resultLabel: 'RESULT',
    result: 'In production with associations in Italy and Brazil, about 1,400 routes cataloged, and an interface in 5 languages.',
    nextLabel: 'NEXT STEPS',
    next: 'Bring Anchor to more associations and countries, and integrate with the apps maintenance teams use in the field.',
    repoNote: 'Private repository. Code walkthrough available on request.',
  },

  architecture: {
    title: 'Anchor Ledger architecture',
    desc: 'The front end (React) calls the API (Express), which goes through the authorization policies before reaching the database (MySQL). The offline-first field app and the data layer are external consumers connected to the API.',
    front: ['Front', 'React'],
    api: ['API', 'Express'],
    policies: ['Authorization', 'policies'],
    database: ['Database', 'MySQL'],
    fieldApp: ['Field app', '(offline-first)'],
    dataLayer: ['Data layer'],
    dataLayerNarrow: ['Data', 'layer'],
    external: 'EXTERNAL CONSUMERS',
  },

  projects: {
    sectionLabel: 'OTHER PROJECTS',
    myPart: 'MY ROLE',
    stackLabel: 'Stack',
    vulpis: {
      label: 'AGENCY · EARLY STAGE',
      title: 'Vulpis',
      summary: 'Digital agency for local businesses with no online presence in southern Rio de Janeiro state — co-owned with a partner.',
      part: 'Visual identity, manifesto, and the prospecting machine: lead collection on Google Maps → screening for businesses without a website → a template site generated for each business → outreach kit for WhatsApp, email, and DM.',
      tags: ['AI agents', 'HTML/CSS', 'Visual identity'],
      stepsLabel: 'Prospecting flow',
      steps: ['Collection', 'Screening', 'Template site', 'Outreach'],
    },
    rota: {
      label: 'PRODUCT · IN DEVELOPMENT',
      title: 'Rota Brechó',
      summary:
        "Collaborative map of thrift stores: you set a start and a destination, and the app draws a route through the thrift stores along the way.",
      part: "Architecture and product, using the same method as Anchor: short sprints and an AI agent pipeline. It's built for people who like thrifting along their daily commute, and store owners register their own shops. Launching in Juiz de Fora and Belo Horizonte.",
      tags: ['TypeScript', 'Next.js', 'PostgreSQL + PostGIS', 'TanStack Query', 'Railway', 'Vercel'],
      mapTitle: 'Route from point A to point B passing through thrift stores along the way',
      mapStart: 'A',
      mapEnd: 'B',
    },
  },

  about: {
    sectionLabel: 'ABOUT & CONTACT',
    paragraphs: [
      "I come from the Humanities (UFJF), went through Trybe, and I'm now studying Software Engineering at Estácio. I like systems with clear rules and decisions that can be explained.",
      "Day to day, I'm the IT person at an accounting firm, automating tax workflows with Python and n8n.",
    ],
    contactTitle: "Let's talk",
    footerName: 'GABRIEL GIL — 2026',
    footerEnd: 'END OF SHEET 05 / 05',
  },
}

export default en
