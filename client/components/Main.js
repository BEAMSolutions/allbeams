import React from 'react'
import Routes from './Routes'
import Navbar from './Navbar'
import Footer from './Footer'
import { getQueryProducts } from '../store/products'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return { getQueryProducts: arg => dispatch(getQueryProducts(arg)) }
}

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      query: '',
      isQuery: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(this.state.query)
    this.props.getQueryProducts(this.state.query).then(products => {console.log(products)})
    // this.setState({
    //   isQuery: true
    // }, () => {
    //   window.location.replace("search");
    // })
    // TODO make the query search
    // also move the user to local:8080/search/?name=query page
  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value
    })
  }

  render () {
    return (
      <div id="main" className="fill-xy column">
        <Navbar handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query}/>
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Main)
