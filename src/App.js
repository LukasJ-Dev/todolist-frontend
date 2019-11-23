import React from 'react';
import './App.css';
import 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './routes/Landing';
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';
import ProjectView from './routes/ProjectView';
import TodolistView from './routes/TodolistView';
import Teams from './routes/Teams';
import NewTeam from './routes/NewTeam';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import routeHandler from './handler/routeHandler';
import authHandler from './handler/authHandler';

class App extends React.Component {

    constructor(props) {
        super(props);
        var authenticate = authHandler.Authenticate();
        this.state = {
          permissions: {
            accessDashboard: true,
          },
          isLoggedin: false,
          loading: true,
          authenticate: authenticate
        }
        authenticate.then(isAuth => {
          this.setState({isLoggedin: isAuth, loading: false});
        });
    }

    setLoggedin(isLoggedIn) {
      this.setState({isLoggedin: isLoggedIn});
    }

    render() {
      const p = {
        loading: this.state.loading,
        isLoggedin: this.state.isLoggedin,
        setLoggedin: this.setLoggedin.bind(this),
        permissions: this.state.permissions,
        authenticate: this.state.authenticate
      };

      return (
        <Router className="App">
        <Navbar isLoggedin={this.state.isLoggedin} loading={this.state.loading}/>
        <Switch>
          <Route path="/" exact component={Landing} />
          <ProtectedRoute path="/login" routeHandler={routeHandler.Login.bind(this)} {...p} component={Login} />
          <ProtectedRoute path="/register" routeHandler={routeHandler.Login.bind(this)} {...p} component={Register}/>
          <ProtectedRoute path="/dashboard" routeHandler={routeHandler.Dashboard.bind(this)} {...p} component={Dashboard}/>
          <ProtectedRoute path="/teams" routeHandler={routeHandler.Dashboard.bind(this)} {...p} component={Teams}/>
          <ProtectedRoute path="/newteam" routeHandler={routeHandler.Dashboard.bind(this)} {...p} component={NewTeam}/>
          <ProtectedRoute path="/project/:id" routeHandler={routeHandler.Dashboard.bind(this)} {...p} component={ProjectView}/>
          <ProtectedRoute path="/todolist/:id" routeHandler={routeHandler.Dashboard.bind(this)} {...p} component={TodolistView}/>
          <Route path="*" ><h1>Page not found</h1></Route>
        </Switch>
      </Router>
      );
    }
  }

  export default App;
