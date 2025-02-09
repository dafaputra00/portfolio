import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <div className='borbder-b border-neutral-900 pb-20'>
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className='my-10 text-center text-4xl'>
            Get in Touch
        </motion.h1>
        <motion.div 
        whileInView={{ opacity: 1}}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}
