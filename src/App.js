import React, { Component } from 'react';
import './Components/Style/App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/Client/NavBar';
import home from './Components/Client/Home';
import user from './Components/Client/Users';
import product from './Components/Client/Products';
import details from './Components/Client/Details';
import DC from './Components/Client/DefaultComponent';

// import statistic from './Components/Charts/Statistic';
// import alarm from './Components/Client/Alarm';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={home}></Route>
          <Route path='/users' component={user}></Route>
          <Route path='/products' component={product}></Route>
          {/* <Route path='/alarmsetting' component={alarm}></Route> */}
          {/* <Route path='/statistik' component={statistic}></Route> */}
          <Route path='/details/:products/:id' component={details} />
          <Route component={DC}></Route>
        </Switch>
      </div>
    )
  }
};