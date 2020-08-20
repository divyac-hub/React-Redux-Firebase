import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar.js'
import Dashboard from './components/dashboard/Dashboard.js'
import EmpDetails from './components/employee/EmpDetails.js'
import SignIn from './components/auth/SignIn.js'
import AddDetails from './components/employee/AddDetails.js'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/empDetails/:id' component={EmpDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/addDetails' component={AddDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
