import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-blue-400 text-lg font-medium">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Gabriel Gil
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Apaixonado por criar experiências digitais incríveis e soluções inovadoras. 
            Especializado em React, Node.js e tecnologias modernas de desenvolvimento web.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Ver Projetos
            </button>
            <button className="border border-slate-400 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800">
              Baixar CV
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/GabrielGil-Castro" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-gil-de-castro/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:gildecastro.g@gmail.com"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;