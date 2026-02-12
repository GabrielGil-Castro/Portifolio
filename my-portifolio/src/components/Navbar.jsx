import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-bl from-cyan-200 via-slate-200 to-slate-300 backdrop-blur-lg border-b border-cyan-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          
          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home','Projetos', 'Sobre', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-800 border-e-amber-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-slate-800"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Botão Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-100 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menu Mobile Expandido */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg mt-2">
              {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;