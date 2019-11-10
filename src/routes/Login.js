import React from 'react';
import 'react-router';

import auth from '../auth';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login_url: 'http://laravel.local:85/ljtodolist-backend/public/api/login',
            email: '',
            password: ''
        };
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        new auth().Login(this.state.email, this.state.password,this.onLoggedin.bind(this));
    }

    onLoggedin = () => {
        this.props.history.push('/dashboard');
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
