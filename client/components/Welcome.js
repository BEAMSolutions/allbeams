import React from 'react'
import AllProducts from './AllProducts'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import BackToTop from './BackToTop'

// Welcome: a landing page for unauthenticated users
const Welcome = () => {
  return (
    <div id="welcome">
      {/* <!-- Carousel Section --> */}
      {<Banner />}
      {/* <!-- All Products Section --> */}
      <AllProducts />
      {/* <!-- Back to Top Section --> */}
      {<BackToTop />}
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default Welcome
