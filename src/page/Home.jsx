import React from 'react'
import Bienvenida from '../components/Bienvenida'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'
function Home() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
    className='bg-purple-100 h-full flex justify-between'>
        <Nav/>
        <Bienvenida/>
    </motion.div>
  )
}

export default Home