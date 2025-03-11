import React, { useState } from 'react'
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'

export const Navbar = () => {
  const [language, setLanguage] = useState('EN')

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'ID' : 'EN'))
  }
  return (
    <nav className='mb-1 flex items-center justify-between py-6'>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/azizdafaputra/' target='_blank' rel='noreferrer' className='text-white mr-4'>
                <FaLinkedin />
            </a>
            <a href='https://www.github.com/dafaputra00' target='_blank' rel='noreferrer' className='text-white mr-4'>
                <FaGithub />
            </a>
            <a href='mailto:azizdafaputra@gmail.com' target='_blank' rel='noreferrer' className='text-white mr-4 block sm:hidden'>
            <FaEnvelope />
            </a>    
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-xl'>
            <a href='mailto:azizdafaputra@gmail.com' target='_blank' rel='noreferrer' className='text-white mr-4 hidden sm:block'>
            azizdafaputra@gmail.com
            </a>
        </div>
    </nav>
  )
}
