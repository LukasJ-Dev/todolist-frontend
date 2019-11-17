import React from 'react';

import authHandler from '../handler/authHandler';

import {
  Route,
  Redirect
} from "react-router-dom";

class ProtectedRoute extends React.Component {
  
    constructor(props) {
      super(props);
      console.log('-');
      console.log(props);
      
      
      this.state = {
        redirect: false,
        redirect_to: '',
        loading: true
      };
      
      
    }

    componentDidMount() {
      console.log('a');
      this.props.authenticate.then(isAuth => {
          var t = this.props.routeHandler(isAuth, this.props.permissions);
          console.log(t);
          if(t.access) {

          } else {
            if(t.redirect.length > 1) {
              this.redirect(t.redirect);
            }
          }
          
      });
      
    }

    componentDidUpdate() {
      if(this.state.redirect_to === this.props.path) {
        this.setState({
          redirect: false,
          redirect_to: ''
        });
      }
    }

    redirect(url) {
      this.setState({
        redirect: true,
        redirect_to: url
      });
    }

    render() {
      console.log('isloggedin ' + this.props.isLoggedin);
      console.log('loading... ' + this.props.component.name);
      console.log('redirect ' + this.state.redirect);
      console.log('redirect to ' + this.state.redirect_to);
      console.log('is loading ' + this.state.loading);
      console.log(this.props);
      
      console.log('--------------------------');

      return (
        <Route {...this.props.rest} exact render={(props) => (
          this.state.redirect ?
          (<Redirect to={this.state.redirect_to}/>)
          :
          (
            this.props.loading ?
              <h1>Loading</h1>
              :
              <this.props.component handler={this.props.handler} {...props} redirect={this.redirect.bind(this)} />
          )
          
          
        )} />
      );
    }
  }

export default ProtectedRoute;
