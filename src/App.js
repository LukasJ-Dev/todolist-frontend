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
import NewProject from './routes/NewProject';

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
          <ProtectedRoute path="/newproject" routeHandler={routeHandler.Dashboard.bind(this)} {...p} component={NewProject}/>
        </Switch>
      </Router>
      );
    }
  }

  export default App;
