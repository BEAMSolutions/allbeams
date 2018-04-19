import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'
import Searchbar from './Searchbar'

class Navbar extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    console.log(evt)
  }
  render() {
    return (
      <nav className="row center-y">
        <Link to="/">
          <img id="logo" src="/favicon.ico" />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Searchbar handleSubmit={this.handleSubmit} />
        <AuthLink to="/home">Home</AuthLink>
        <AuthLink to="/">
          <Logout />
        </AuthLink>
      </nav>
    )
  }
}

export default Navbar
