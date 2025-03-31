import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className='bg-blue-600 p-2 text-white flex justify-around items-center'>
        <h1 className='text-xl font-bold'>Minha NavBar</h1>
        <ul>
            <li><Link to='/' className='hover:underline'>HOME</Link></li>
            <li><Link to='/projects' className='hover:underline'>PROJETOS</Link></li>
            <li><Link to='/contact' className='hover:underline'>CONTATO</Link></li>
            <li><Link to='/about' className='hover:underline'>SOBRE</Link></li>
        </ul>

     </nav>
  )
}

export default Navbar