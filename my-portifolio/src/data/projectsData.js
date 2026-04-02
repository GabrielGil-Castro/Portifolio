import climbImg from "../assets/anchor-ledger.png";
import culturaImg from "../assets/sistema-cultura.png";
import portifolioImg from "../assets/portifolio.png";
import pontoappImg from '../assets/ponto-app.png'

export const projects = [
  {
    id: 1,
    title: "Sistema Cultura",
    description:
      "Sistema web desenvolvido para a Secretaria de Cultura, facilitando o cadastro e integração de artistas locais.",
    image: culturaImg,
    technologies: ["React", "Express", "MySQL", "Docker", "Typescript"],
    category: "Full Stack",
    liveUrl: null,
    githubUrl: "https://github.com/GabrielGil-Castro/Sistema-Cultura",
    featured: true,
  },
  {
    id: 2,
    title: "Anchor Ledger",
    description:
      "Aplicação fullstack para consulta e gerenciamento de rotas de escalada. Conta com autenticação JWT, sistema de comentários, filtros avançados por dificuldade e área, e painel administrativo para gestão de vias.",
    image: climbImg,
    technologies: [
      "Vite",
      "React",
      "MySQL",
      "Prisma",
      "TailwindCSS",
      "TanStack Query",
      "Axios",
      "Node.js",
      "Express",
    ],
    category: "Full Stack",
    liveUrl: "https://anchor-ledger-frontend-sigma.vercel.app/",
    githubUrl: "https://github.com/GabrielGil-Castro/anchor-ledger-frontend",
    featured: true,
  },
  {
    id: 3,
    title: "Meu Portfólio",
    description:
      "Portfólio pessoal desenvolvido em React para apresentar meus projetos, habilidades e trajetória na tecnologia.",
    image: portifolioImg,
    technologies: ["React", "Tailwind CSS", "Vite"],
    category: "Frontend",
    liveUrl: "https://gabrielgil-castro.github.io/Portifolio/",
    githubUrl: "https://github.com/GabrielGil-Castro/Portifolio",
    featured: false,
  },
  {
    id: 4,
    title: "Ponto App",
    description: "Aplicação full stack de ponto eletrônico com painel admin, autenticação JWT e deploy em produção via Railway e Vercel.",
    image: pontoappImg,
    technologies: [
      "Docker",
      "Node.js",
      "Express",
      "React",
      "Vite",
      "TailwindCSS",
      "Axios",
      "Sequelize",
      "MySQL",
    ],
    category: "Full Stack",
    liveUrl: "https://app-ponto-frontend.vercel.app/login",
    githubUrl: "https://github.com/GabrielGil-Castro/app_ponto_backend",
    featured: true
  }
];
