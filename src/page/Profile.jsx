import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import ProfilePanel from '../components/ProfilePanel'
function Profile() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
    className="bg-purple-100 h-screen flex justify-between">
      <Nav/>
      <div className='flex flex-col justify-center w-full'>
      <ProfilePanel/>
      </div>
    </motion.div>
  )
}

export default Profile