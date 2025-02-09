import React, { useState } from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

export const Navbar = () => {
  const [language, setLanguage] = useState('EN')

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'ID' : 'EN'))
  }
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' className='text-white mr-4'>
                <FaLinkedin />
            </a>
            <a href='https://www.github.com/' target='_blank' rel='noreferrer' className='text-white mr-4'>
                <FaGithub />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className='text-white mr-4'>
                <FaInstagram />
            </a>
        </div>
        <div className='flex flex-shrink-0 items-center'>
            <label htmlFor='language-toggle' className='flex items-center cursor-pointer'>
                <div className='relative'>
                    <input 
                        type='checkbox' 
                        id='language-toggle' 
                        checked={language === 'EN'} 
                        onChange={toggleLanguage} 
                        className='sr-only peer' 
                    />
                    <div className='block border-[1px] border-gray-900 dark:border-white w-20 h-8 rounded-full'></div>
                    <div className='dot absolute left-1 top-1 bg-gray-800 dark:bg-white w-6 h-6 rounded-full transition'></div>
                </div>
                <div className='ml-3 text-gray-900 dark:text-white font-medium'>
                    {language === 'EN' ? 'English' : 'Indonesia'}
                </div>
            </label>
        </div>
    </nav>
  )
}
