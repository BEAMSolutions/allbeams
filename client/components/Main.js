import React from 'react'
import Routes from './Routes'
import Navbar from './Navbar'
import Footer from './Footer'
const Main = () => {
  return (
    <div id="main" className="fill-xy column">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default Main
