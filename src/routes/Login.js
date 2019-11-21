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
          <div className="container">
              <div className="card login-card">
              <h1 className="login-title">Login</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div className="container">
                      <label htmlFor="email">Email Adress</label><br />
                      <input id="email" className="input" type="email" name="email" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div className="container">
                      <label htmlFor="password">Password</label><br />
                      <input id="password" className="input" type="password" name="password" onChange={this.onChange}/>
                  </div>
                  <hr />
                  <div className="card-button-group">
                    <button type="submit" className="float-button">Login</button>
                  </div>
                  
              </form>
              </div>
          </div>
      );
    }
  }

export default Login;
