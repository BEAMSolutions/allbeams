import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'
import Searchbar from './Searchbar'

const Navbar = (props) => {
  return (
    <nav id="navbar" className="row center-y">
       <div className="left-side">
          <Link to="/">
            <img id="logo" src="/favicon.ico" />
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <div className="right-side col-md-6">
          <Searchbar
            handleSubmit={props.handleSubmit}
            handleChange={props.handleChange}
            query={props.query}
          />
          <Link className="go-to-cart" to="/cart">Go to cart</Link>

        </div>
        <AuthLink to="/home">Home</AuthLink>
        <AuthLink to="/">
          <Logout />
        </AuthLink>
    </nav>
  )
}

export default Navbar
