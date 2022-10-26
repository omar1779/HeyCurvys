import React from 'react'
import Bienvenida from '../components/Bienvenida'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className='bg-purple-100 h-full flex flex-col justify-between'>
      <Nav/>
      <Bienvenida/>
      <Footer/>
    </div>
  )
}

export default Home