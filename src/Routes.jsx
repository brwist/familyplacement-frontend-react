import PrivateRoute from 'components/PrivateRoute'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import NotFound from 'screens/404'
import CreateFamily from 'screens/CreateFamily'
import CreatePlacement from 'screens/CreatePlacement'
import EditFamily from 'screens/EditFamily'
import EditPlacement from 'screens/EditPlacement'
import Families from 'screens/Families'
import Family from 'screens/Family'
import Home from 'screens/index'
import Placement from 'screens/Placement'
import Placements from 'screens/Placements'
import history from './History'

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.login?.isLoggedIn)
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute isLoggedIn={isLoggedIn} path="/" exact component={Home} />
        <Route path="/families" component={Families} />
        <Route path="/placements" component={Placements} />
        <Route path="/placement" component={Placement} />
        <Route path="/family" component={Family} />
        <Route path="/create-placement" component={CreatePlacement} />
        <Route path="/create-family" component={CreateFamily} />
        <Route path="/edit-family" component={EditFamily} />
        <Route path="/edit-placement" component={EditPlacement} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}
export default Routes
