import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className='bg-sky-900 p-2 text-white flex flex-col items-center '>
        <h1 className='text-xl font-bold'>Minha NavBar</h1>
        <ul className='flex justify-around w-full max-w-lg'>
            <li><Link to='/home' className='hover:underline'>HOME</Link></li>
            <li><Link to='/projects' className='hover:underline'>PROJETOS</Link></li>
            <li><Link to='/contact' className='hover:underline'>CONTATO</Link></li>
            <li><Link to='/about' className='hover:underline'>SOBRE</Link></li>
        </ul>

     </nav>
  )
}

export default Navbar