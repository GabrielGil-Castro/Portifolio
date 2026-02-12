import React from 'react';
import { Code, Database, Globe, Smartphone, Users, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
    },
    {
      category: "Backend", 
      icon: <Database className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Expo", "Flutter"]
    },
    {
      category: "Ferramentas",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Git", "Docker", "AWS", "Figma", "VS Code"]
    }
  ];

  const qualities = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Aprendizado Rápido",
      description: "Sempre em busca de novas tecnologias e melhores práticas para entregar soluções inovadoras."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trabalho em Equipe",
      description: "Experiência colaborando em projetos ágeis, comunicação clara e foco em resultados."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Código Limpo",
      description: "Foco em escrever código legível, testável e maintível seguindo as melhores práticas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-slate-100 via-slate-200 to-cyan-100 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4">
            Sobre <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - About Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900/80">
                Desenvolvedor apaixonado por tecnologia
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Olá! Sou Gabriel Gil, desenvolvedor full stack com paixão por criar 
                experiências digitais que fazem a diferença. Com anos de experiência
                                em transformar ideias complexas em soluções elegantes e funcionais.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web, 
                e hoje trabalho com as mais modernas tecnologias para entregar produtos que 
                impactam positivamente a vida das pessoas.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Quando não estou codando, você pode me encontrar explorando novas tecnologias, 
                contribuindo para projetos open source, ou compartilhando conhecimento com a 
                comunidade dev.
              </p>
            </div>

            {/* Qualities */}
            <div className="grid gap-4 mt-8">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-700/60 hover:bg-slate-700/50 transition-colors duration-300">
                  <div className="text-cyan-300/80 flex-shrink-0">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{quality.title}</h4>
                    <p className="text-slate-900/80 text-m">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900/80 text-center lg:text-left">
              Tecnologias & Ferramentas
            </h3>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-700/60 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-cyan-400/80">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold text-lg">{skill.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-600/80 text-slate-300 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/80 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
              2+
            </div>
            <div className="text-slate-700/80 mt-1">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
              15+
            </div>
            <div className="text-slate-700/80 mt-1">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-slate-700/80 mt-1">Commits no GitHub</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-slate-700/80 mt-1">Dedicação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;