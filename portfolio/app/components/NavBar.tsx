import Image from 'next/image';
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
const NavBar = () => {
  return (
   <nav className='flex items-center px-10 py-4 bg-black border-b border-gray-200 sticky top-0 z-50'>
    <a href="/" className='flex'><Image src="/favicon.ico" width={75} height={200} alt="logo"></Image></a>
    <div className='flex justify-center gap-8 flex-1'>
    <a href="#about" className='text-white hover:text-gray-200 transition-colors'>About</a>
    <a href="#projects" className='text-white hover:text-gray-200 transition-colors'>Projects</a>
    </div>

  <div className='flex gap-4 items-center'>
    <a href="https://github.com/alexlee78980" target="_blank" className='text-white hover:text-gray-200 transition-colors'><FaGithub size={20}/></a>
    <a href="https://linkedin.com/in/alex-lee-ubc" target="_blank" className='text-white hover:text-gray-200 transition-colors'><FaLinkedin size={20}/></a>
    <a href="mailto:alex.lee.swe@gmail.com" className='text-white hover:text-gray-200 transition-colors text-sm'><FaEnvelope size={20}/></a>
     <a href="/Resume_Lee_Alex.pdf" target="_blank" className='text-white hover:text-gray-200 transition-colors text-sm'><FaFileAlt size={20}/></a>
  </div>
</nav>

  )
}

export default NavBar