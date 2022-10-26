import React from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ProductsList from "../components/ProductsList"

function Products() {
  return (
    <div className="h-full bg-gradient-to-r from-violet-900 to-transparent flex flex-col lg:justify-between">
      <div className='h-auto mb-3'>
      <Nav/>
      </div>
      <div className='h-full lg:h-5/6'>
      <ProductsList/>
      </div>
      <div className='h-auto'>
      <Footer/>
      </div>
    </div>
  )
}

export default Products