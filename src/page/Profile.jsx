import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Profile() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <Nav/>
      <div>
        Profile
      </div>
      <Footer/>
    </div>
  )
}

export default Profile