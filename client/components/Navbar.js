import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'
import Searchbar from './Searchbar'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      query: 'something'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(evt.target.query.value)
  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value
    })
  }

  render() {
    return (
      <nav className="row center-y">
        <div className="left-side">
          <Link to="/">
            <img id="logo" src="/favicon.ico" />
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <div className="right-side">
          <Link className="go-to-cart" to="/cart">Go to cart</Link>
          {/* <Searchbar handleSubmit={this.handleSubmit} handleChange={this.handleChange} query={this.state.query} /> */}
        </div>
        <AuthLink to="/home">Home</AuthLink>
        <AuthLink to="/">
          <Logout />
        </AuthLink>
      </nav>
    )
  }
}

export default Navbar
