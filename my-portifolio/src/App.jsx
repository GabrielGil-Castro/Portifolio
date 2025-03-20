import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 class= 'text-3xl font-bold underline'>
      My Portifolio
     </h1>
     <About />
     <Contact />
     <Home />
    <Projects />
    </>
  )
}

export default App
