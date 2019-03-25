import axios from './axios-init.js'
import md5 from 'js-md5'

export const loginHttp = (loginForm) => {
  return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/login',
          data:{
            email: loginForm.user,
            password: md5(loginForm.password),
            identity: loginForm.identity
          },
          transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }]
        }).then((response)=>{

          resolve(response.data);

        }).catch((error)=>{
          reject(error.response.data.message);
        })
  });
};

export const registerHttp = (registerForm) => {

  return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: '/register',
        params:{
          email: registerForm.user,
          password: md5(registerForm.password),
          identity: registerForm.identity
        }
      }).then((response)=>{
        resolve(response.data);
      }).catch((error)=>{
        reject(error.response.data.message);
      })
  })


  // return;
};

export const authenticateHttp = (token) => {
  // _this.$Loading.start();
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/authenticate',
      params:{
        token: token
      }
    }).then((response)=>{
      resolve(response.data);

    }).catch((error)=>{
      reject(error.response.data.message);
    })
  })

  // return;
};












