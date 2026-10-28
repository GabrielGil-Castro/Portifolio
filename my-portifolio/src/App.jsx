import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import WhatsAppFloating from './components/WhatsAppFloating'
import Hero from './sections/Hero'
import AnchorLedger from './sections/AnchorLedger'
import OtherProjects from './sections/OtherProjects'
import AboutContact from './sections/AboutContact'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="lg:flex">
      <a
        href="#conteudo"
        className="sr-only z-[60] bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Pular para o conteúdo
      </a>
      <Sidebar menuOpen={menuOpen} onMenuChange={setMenuOpen} />
      <main id="conteudo" className="min-w-0 flex-1 px-4 pt-14 sm:px-8 lg:px-24 lg:pt-0">
        <Hero />
        <AnchorLedger />
        <OtherProjects />
        <AboutContact />
      </main>
      <WhatsAppFloating hidden={menuOpen} />
    </div>
  )
}

export default App
