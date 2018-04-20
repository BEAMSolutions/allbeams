import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'
import Searchbar from './Searchbar'

const Navbar = (props) => {
  return (
    <nav className="row center-y">
      <Link to="/">
        <img id="logo" src="/favicon.ico" />
      </Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Searchbar
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        query={props.query}
      />
      <AuthLink to="/home">Home</AuthLink>
      <AuthLink to="/">
        <Logout />
      </AuthLink>
    </nav>
  )
}

export default Navbar
