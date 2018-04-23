import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthRoute, Login, Signup } from './auth'
import Welcome from './Welcome'
import Home from './Home'
import Cart from './Cart'
import NoMatch from './NoMatch'
import SingleProductPage from './SingleProductPage'
import SearchPage from './Searchpage'

const Routes = () => (
  <div className="fill-xy center-xy column">
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <AuthRoute exact path="/home" component={Home} />
      <Route path="/:productId" component={SingleProductPage} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
