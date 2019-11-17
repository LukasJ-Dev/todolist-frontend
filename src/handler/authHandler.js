import apiHandler from './apiHandler';

class Auth {
    Authenticate()  {
        if(localStorage.getItem('token') == null) {
          return new Promise((resolve) => {resolve(false)});
        }
        
        let promise = apiHandler.get('user', false).then((data) => {
          if(data.status === 200) {
            return true;
          } else {
            return false;
          }
        });
        return promise;
      }

      Login(email, password) {
        return apiHandler.post('login', {
            email: email,
            password: password 
        })
        .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
      }

      Register(name, email, password, password_confirmation) {
        return apiHandler.post('register', {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }).then((response) => {
          return true;
        })
        .catch((err) => {
          return false;
        });
      }
}

export default new Auth();