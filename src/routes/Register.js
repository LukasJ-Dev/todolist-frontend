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
          <div>
              <h1>Register</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div>
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" name="name" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div>
                      <label htmlFor="email">Email Adress</label>
                      <input id="email" type="email" name="email" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div>
                      <label htmlFor="password">Password</label>
                      <input id="password" type="password" name="password" onChange={this.onChange}/>
                  </div>
                  <div>
                      <label htmlFor="password_confirmation">Confirm Password</label>
                      <input id="password_confirmation" type="password" name="password_confirmation" onChange={this.onChange}/>
                  </div>
                  <button type="submit">Register</button>
              </form>
          </div>
      );
    }
  }

export default Register;
