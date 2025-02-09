import React from 'react'
import { FaDocker, FaLinux, FaReact, FaPython } from 'react-icons/fa'
import { SiBamboo, SiRedhatopenshift, SiKubernetes, SiAnsible } from "react-icons/si"
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export const Technologies = () => {
  return (
    <div className='boredr-b border-neutral-800 pb-24'>
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>
                Technologies
        </motion.h1>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaLinux className='text-7xl text-white-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(7)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaPython className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiAnsible className='text-7xl text-red-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(8)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaDocker className='text-7xl text-blue-600' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiBamboo className='text-7xl text-green-600' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(9)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiRedhatopenshift className='text-7xl text-red-700' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiKubernetes className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaReact className='text-7xl text-blue-400' />
                </motion.div>
        </motion.div>
    </div>
  )
}
