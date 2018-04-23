import React from 'react'
import AllProducts from './AllProducts'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const SearchPage = (props) => {
  //TODO KMS FIX THIS LATER
  //WE WANT THE SEARCH CLASS AS HIGH AS POSSIBLE

  return (
    <div id="search-page">
      {/* <!-- All Products Section --> */}
      <AllProducts />
      {/* <!-- Back to Top Section --> */}
      <h3 id="back-to-top">THIS IS THE SEARCH PAGE</h3>
      {/* <!-- Footer --> */}
    </div>
  )
}

export default SearchPage
