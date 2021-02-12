import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import home from './Components/Home';
import user from './Components/Users';
import product from './Components/Products';
import alarm from './Components/Alarm';
import details from './Components/Details';
import DC from './Components/DefaultComponent';

import test from './Components/ProductsTest';

import statistic from './Components/Charts/Statistic';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={home}></Route>
          <Route path='/test' component={test}></Route>
          <Route path='/users' component={user}></Route>
          <Route path='/products' component={product}></Route>
          <Route path='/alarmsetting' component={alarm}></Route>
          <Route path='/statistik' component={statistic}></Route>
          <Route path='/details/:products/:id' component={details} />
          <Route component={DC}></Route>
        </Switch>
      </div>
    )
  }
};