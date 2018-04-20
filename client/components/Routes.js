import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthRoute, Login, Signup } from './auth'
import Welcome from './Welcome'
import Home from './Home'
import NoMatch from './NoMatch'
import SingleProductPage from './SingleProductPage'
import SearchPage from './Searchpage'

const Routes = () => (
  <div className="fill-xy center-xy column">
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/search" component={SearchPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/:productId" component={SingleProductPage} />
      <AuthRoute path="/home" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
