import React from 'react';
import 'react-router';
import authHandler from '../handler/authHandler';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        authHandler.Register(
          this.state.name, this.state.email, this.state.password, this.state.password_confirmation
          ).then((isAuth) => {
            if(isAuth) {
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
              <h1 className="login-title">Register</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div className="container">
                      <label htmlFor="name">Name</label><br/>
                      <input id="name" className="input" type="text" name="name" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div className="container">
                      <label htmlFor="email">Email Adress</label><br/>
                      <input id="email" className="input" type="email" name="email" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div className="container">
                      <label htmlFor="password">Password</label><br/>
                      <input id="password" className="input" type="password" name="password" onChange={this.onChange}/>
                  </div>
                  <div className="container">
                      <label htmlFor="password_confirmation">Confirm Password</label><br/>
                      <input id="password_confirmation" className="input" type="password" name="password_confirmation" onChange={this.onChange}/>
                  </div>
                  <br /><hr/>
                  <div className="card-button-group">
                    <button type="submit" className="float-button">Register</button>
                  </div>
                  
              </form>
            </div>
          </div>
      );
    }
  }

export default Register;
