import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import fotoProfil from '../assets/fp.jpg' 
import { ABOUT_TEXT } from '../constants'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

export const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center  lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial='hidden'
                animate='visible'
                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                    Aziz Dafa Putra
                </motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-4xl tracking-tight text-transparent'>
                    IT-OPS
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial='hidden'
                animate='visible'
                className='my-2 text-2xl max-w-xl py-6 font-light tracking-tighter'>
                    {ABOUT_TEXT}
                </motion.p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{x: 100, opacity: 0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    src={ fotoProfil } alt="Foto profil"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
