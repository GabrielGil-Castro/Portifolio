import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { motion } from "framer-motion";

export default function Home() {
  return (

    <section className="flex flex-col items-center justify-center h-screen text-center p-6 bg-gray-900 text-white">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Olá, sou <span className="text-blue-400">Gabriel Gil</span>
      </motion.h1>
      <p className="text-lg md:text-xl mt-4">Desenvolvedor Full Stack apaixonado por tecnologia e inovação.</p>

      <div className="mt-6 flex gap-4">
       <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition">
          Ver Projetos
       </Link>
       <Link to="/contact" className="border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition">
          Contato
       </Link>
      </div>
    </section>


  )
}
