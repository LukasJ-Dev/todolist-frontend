import axios from 'axios';
class apiHandler {
    constructor() {
        this.apiUrls = {
            domain: 'http://laravel.local:85/ljtodolist-backend/public/api/',
        }
    }

    getUrlFor = (api) => {
        return this.apiUrls.domain + api;
    }

    get(api, ignoreResponse = true) {
        let promise = axios.get(this.getUrlFor(api), { 'headers': 
          { 'Authorization': 'Bearer '+localStorage.getItem('token'), 'Accept': 'application/json' } })
          .then(response => {
              if(ignoreResponse) {
                return response.data;
              } else {
                  return response;
              }
            
          }).catch((err) => {
            return err;
          });
    
          return promise;
      }

      post(api, data, auth = false) {
          
        return axios({
            method: 'post',
            url: this.getUrlFor(api),
            data: data,
            headers: auth ?
            { 'Authorization': 'Bearer '+localStorage.getItem('token'), 'Accept': 'application/json' } : {}
          }).then((response) => {
            return response;
        });
        
      }
}

export default new apiHandler();