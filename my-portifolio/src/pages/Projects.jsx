import React, { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { projects } from "../data/projectsData";


const ExpandableDescription = ({ description, className = '' }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={className}>
      <div className="relative">
        <p className={`text-slate-100 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
          expanded ? 'max-h-40' : 'max-h-10'
        }`}>
          {description}
        </p>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-slate-700 to-transparent pointer-events-none" />
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-cyan-400 font-medium mt-1 hover:underline"
      >
        {expanded ? 'Ver menos' : 'Ver mais'}
      </button>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Frontend', 'Full Stack', 'Mobile', 'Backend'];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projetos" className="py-20 bg-gradient-to-tr from-slate-100 via-slate-200 to-cyan-100 relative overflow-hidden">
      
      {/* Background Effects */}      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-950 mb-4">
            Meus <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, aplicando diferentes tecnologias e soluções inovadoras
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-700 mb-8 text-center">Projetos em Destaque</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative bg-slate-600/60 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-blue-500/50">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destaque
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <ExpandableDescription description={project.description} className="mb-4" />

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        Ver Projeto
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700/70 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group  bg-slate-600/60 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
              
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <ExpandableDescription description={project.description} className="mb-3" />

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-slate-500 text-xs px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-500/60 hover:bg-blue-400 text-white py-2 rounded text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      Ver
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-cyan-600 hover:border-slate-500 text-slate-200 hover:text-white py-2 rounded text-sm font-medium transition-all"
                  >
                    <Github size={14} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-800/70 mb-6">
            Interessado em ver mais projetos ou colaborar em algo novo?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;