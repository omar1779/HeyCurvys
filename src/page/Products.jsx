import React from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ProductsList from "../components/ProductsList"

function Products() {
  return (
    <div className="h-full bg-purple-100 flex flex-col justify-between">
      <Nav/>
      <ProductsList/>
      <Footer/>
    </div>
  )
}

export default Products