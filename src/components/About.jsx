import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>
            About 
            <span className='text-neutral-500'> Me</span>
        </h1>
        <div className='flex justify-center'>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full lg:w-1/2'>
                <div className='flex justify-center'>
                    <p className='my-2 max-w-xl py-6 text-2xl text-center'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}