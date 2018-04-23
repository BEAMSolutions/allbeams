import React from 'react'
import Routes from './Routes'
import Navbar from './Navbar'
import Footer from './Footer'
import { getQueryProducts } from '../store/products'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

const mapStateToProps = state => {
  return { products: state.products }
}
const mapDispatchToProps = dispatch => {
  return { getQueryProducts: arg => dispatch(getQueryProducts(arg)) }
}

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props
      .getQueryProducts(this.state.query)
      .then(() => this.props.history.push('search'))
  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value
    })
  }

  render() {
    return (
      <div id="main" className="fill-xy column">
        <Navbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          query={this.state.query}
        />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
