import React from 'react'
import AllProducts from './AllProducts'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const SearchPage = () => {
  //TODO KMS FIX THIS LATER
  //WE WANT THE SEARCH CLASS AS HIGH AS POSSIBLE
  return (
    <div id="search-page">
      {/* <!-- All Products Section --> */}

      <nav className="row center-y">
        <Link to="/">
          <img id="logo" src="/favicon.ico" />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Searchbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          query={this.state.query}
        />
        <AuthLink to="/home">Home</AuthLink>
        <AuthLink to="/">
          <Logout />
        </AuthLink>
      </nav>
      <AllProducts />
      {/* <!-- Back to Top Section --> */}
      <h3 id="back-to-top">THIS IS THE SEARCH PAGE</h3>
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default SearchPage
