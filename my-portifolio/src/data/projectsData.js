import climbImg from "../assets/climb-route.png";
import culturaImg from '../assets/sistema-cultura.png'
import portifolioImg from '../assets/portifolio.png'

export const projects = [
  {
    id: 1,
    title: "Sistema Cultura",
    description:
      "Sistema web desenvolvido para a Secretaria de Cultura, facilitando o cadastro e integração de artistas locais.",
    image: culturaImg, 
    technologies: ["React", "Express", "MySQL", "Docker", ],
    category: "Full Stack",
    liveUrl: null, 
    githubUrl: "https://github.com/GabrielGil-Castro/Sistema-Cultura",
    featured: true,
  },
  {
    id: 2,
    title: "Climb Routes",
    description:
      "Site informativo e visual sobre escalada, com destaque para rotas e conteúdo associado.",
    image: climbImg,
    technologies: ["React", "Tailwind CSS", "Vite"],
    category: "Frontend",
    liveUrl: "https://gabrielgil-castro.github.io/climb_routes/",
    githubUrl: "https://github.com/GabrielGil-Castro/climb_routes",
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
    featured: true,
  },
];
