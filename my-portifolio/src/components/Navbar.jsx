import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className='bg-sky-900 p-2 text-white flex flex-col items-center'>
        <h1 className='text-xl font-bold'>Minha NavBar</h1>
        <ul className='flex justify-around w-full max-w-lg'>
            <li><Link to='/home' className='hover:bg-gray-500 hover:text-white px-2 py-1 rounded transition'>HOME</Link></li>
            <li><Link to='/projects' className='hover:bg-gray-500 hover:text-white px-2 py-1 rounded transition'>PROJETOS</Link></li>
            <li><Link to='/contact' className='hover:bg-gray-500 hover:text-white px-2 py-1 rounded transition'>CONTATO</Link></li>
            <li><Link to='/about' className='hover:bg-gray-500 hover:text-white px-2 py-1 rounded transition'>SOBRE</Link></li>
        </ul>

     </nav>
  )
}

export default Navbar