import React from 'react';

import {
  Route,
  Redirect
} from "react-router-dom";

class ProtectedRoute extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        redirect_to: '',
        loading: true
      };
      
      
    }

    componentDidMount() {

      this.props.Authenticate(true, this.redirect);
    }

    redirect = (isLoggedIn) => {
      if(isLoggedIn){ //logged in
        if(!this.props.needAuth) { //need auth to access
          this.setState({
            redirect: true,
            redirect_to: '/dashboard'
          });
        }
      } else { //logged out
        if(this.props.needAuth) {
          this.setState({
            redirect: true,
            redirect_to: '/login'
          });
        }
      }
      this.setState({loading: false});
    }

    render() {
      return (
        <Route {...this.props.rest} render={(propss) => (
          this.state.redirect ?
          (<Redirect to={this.state.redirect_to}/>)
          :
          (
            this.state.loading ?
              <h1>Loading</h1>
              :
              <this.props.component {...this.props.rest} Authenticate={this.props.Authenticate.bind(this)} {...propss} />
          )
          
          
        )} />
      );
    }
  }

export default ProtectedRoute;
