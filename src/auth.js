import axios from 'axios';
class Auth {
    constructor() {
        this.authenticated = false;
        this.login_url = 'http://laravel.local:85/ljtodolist-backend/public/api/login';
    }


    AuthenticateWithBackend() {
      let promise = axios.get('http://laravel.local:85/ljtodolist-backend/public/api/user', { 'headers': 
      { 'Authorization': 'Bearer '+localStorage.getItem('token'), 'Accept': 'application/json' } })
      .then(response => {
        return response;
      }).catch((err) => {
        return err;
      });
      return promise;
    }

    Authenticate(checkLocalStorage = true, AuthCallback, onAuthenticated) {
        if(!JSON.parse(localStorage.getItem('isLoggedin')) && checkLocalStorage) {
          AuthCallback(false, onAuthenticated);
          return false;
        }
        if(localStorage.getItem('token') == null) {
          AuthCallback(false, onAuthenticated);
          return false;
        }
        
        let promise = this.AuthenticateWithBackend();
        promise.then((data) => {
          if(data.status === 200){
            AuthCallback(true, onAuthenticated);
          } else {
            AuthCallback(false, onAuthenticated);
          }
        });
      }

      Login(email, password, onLoggedin) {
        axios.post(this.login_url, {
            email: email,
            password: password 
        })
        .then((response) => {
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('isLoggedin', true);
            onLoggedin();
        })
        .catch((err) => {
            console.log(err);
        });
      }
}

export default Auth;