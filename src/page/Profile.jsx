import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import AdminPanel from '../components/adminPanel'

function Profile() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <Nav/>
      <AdminPanel/>
      <Footer/>
    </div>
  )
}

export default Profile