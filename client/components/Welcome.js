import React from 'react'
import AllProducts from './AllProducts'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Banner from './Banner'

// Welcome: a landing page for unauthenticated users
const Welcome = () => {
  return (
    <div id="welcome">
      {/* <!-- Carousel Section --> */}
      {<Banner />}
      {/* <!-- All Products Section --> */}
      <AllProducts />
      {/* <!-- Back to Top Section --> */}
      <h3 id="back-to-top">Back to Top</h3>
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default Welcome
