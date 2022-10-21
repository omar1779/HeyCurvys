import Home from './page/Home'
import Products from './page/Products.jsx'
import DetailProduct from './page/DetailProduct.jsx'
import Profile from './page/Profile'
import {Routes , Route} from "react-router-dom"

function App() {

  return (
    <div className="App h-screen bg-purple-100 overflow-hidden">
      <Routes>
        {/* <Route path='' element={<LandingPage/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products:id' element={<DetailProduct/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
