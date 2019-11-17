import React from 'react';
import 'react-router';
import authHandler from '../handler/authHandler';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        authHandler.Login(this.state.email, this.state.password).then((isAuth) => {
            if(isAuth) {
                
                this.props.setLoggedin(true);
                this.props.history.push('/dashboard');
            }
            
        });
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
      return (
          <div>
              <h1>Login</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div>
                      <label htmlFor="email">Email Adress</label>
                      <input id="email" type="email" name="email" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div>
                      <label htmlFor="password">Password</label>
                      <input id="password" type="password" name="password" onChange={this.onChange}/>
                  </div>
                  <button type="submit">Login</button>
              </form>
          </div>
      );
    }
  }

export default Login;
