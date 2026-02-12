import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero' // Renomeie Home para Hero
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />     {/* Seção Home/Hero */}
      <Projects /> {/* Seção Projetos */}
      <About />    {/* Seção Sobre */}
      <Contact />  {/* Seção Contato */}
    </div>
  )
}

export default App