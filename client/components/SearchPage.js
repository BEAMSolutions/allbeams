import React from 'react'
import AllProducts from './AllProducts'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const SearchPage = () => {
  return (
    <div id="search-page">
      {/* <!-- All Products Section --> */}
      <AllProducts />
      {/* <!-- Back to Top Section --> */}
      <h3 id="back-to-top">Back to Top</h3>
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default SearchPage
