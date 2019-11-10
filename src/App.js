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

import Navbar from './components/Navbar';

import auth from './auth';

/*const ProtectedRoute = ({ component: Component, needAuth: NeedAuth, ...rest}) => (
  <Route {...rest} render={(props) => (

    JSON.parse(NeedAuth) ? Can only access if logged in
    (JSON.parse(localStorage.getItem('isLoggedin')) Need to be logged in
    ? <Component {...rest} {...props} /> //if logged in access
      : <Redirect to='/login'/>) //if not
      : (!JSON.parse(localStorage.getItem('isLoggedin')) ? //need only only acces if logged out
      <Component {...rest} {...props} /> :
      <Redirect to='/dashboard'/>)

  )} />
)*/

import ProtectedRoute from './components/ProtectedRoute';

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          auth: new auth(),
          isLoggedin: JSON.parse(localStorage.getItem('isLoggedin'))
        }
    }

    Authenticate = (checkLocalStorage = true, onAuthenticated) => {
      this.state.auth.Authenticate(checkLocalStorage, this.AuthenticateCallback, onAuthenticated);
    }

    AuthenticateCallback = (isAuthenticated, onAuthenticated) => {
      if(isAuthenticated) {
        this.setState({isLoggedin: true});
        localStorage.setItem('isLoggedin', 'true');
        onAuthenticated(true);
      } else {
        this.setState({isLoggedin: false});
        localStorage.setItem('isLoggedin', 'false');
        onAuthenticated(false);
      }
    }

    render() {
      return (
        <Router className="App">
        <Navbar isLoggedin={this.state.isLoggedin}/>
        <Switch>
          <Route path="/" exact component={Landing} />
          <ProtectedRoute path="/login" needAuth={false} isLoggedin={this.state.isLoggedin} Authenticate={this.Authenticate.bind(this)} component={Login} />
          <ProtectedRoute path="/register" needAuth={false} isLoggedin={this.state.isLoggedin} Authenticate={this.Authenticate.bind(this)} component={Register}/>
          <ProtectedRoute path="/dashboard" needAuth={true} isLoggedin={this.state.isLoggedin} Authenticate={this.Authenticate.bind(this)} component={Dashboard}/>
        </Switch>
      </Router>
      );
    }
  }

  export default App;
