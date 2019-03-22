import axios from './axios-init.js'
import md5 from 'js-md5'

export const loginHttp = (loginForm, _this,storeVuex, setRouter) => {
  _this.$Loading.start();

  // console.log(md5(loginForm.password))
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
    // console.log(1)
    // console.log(response.data)
    _this.$Loading.finish()
    console.log(response.data)
    storeVuex(response.data,{email:loginForm.user, identity: loginForm.identity.toUpperCase()})
    // axios.defaults.headers.Authorization = store.getters.getToken;
    setRouter();

  }).catch((error)=>{
    // console.log(error.response);
    _this.$Message.warning(error.response.data.message)
    _this.$Loading.finish()

  })
  // return;
};

export const registerHttp = (registerForm, _this) => {
  _this.$Loading.start();

  axios({
    method: 'get',
    url: '/register',
    params:{
      email: registerForm.user,
      password: md5(registerForm.password),
      identity: registerForm.identity
    }
  }).then((response)=>{
    // console.log(1)
    _this.$Loading.finish()
    // storeVuex(response.data,{email:loginForm.user, identity: loginForm.identity})
    // setRouter();
    console.log(response);
    _this.$Message.success(response.data);


  }).catch((error)=>{
    // console.log(error.response);
    _this.$Message.warning(error.response.data.message)
    _this.$Loading.finish()

  })
  // return;
};

export const authenticateHttp = (token,_this,returnLogin) => {
  // _this.$Loading.start();

  axios({
    method: 'get',
    url: '/authenticate',
    params:{
      token: token
    }
  }).then((response)=>{
    // console.log(1)
    // _this.$Loading.finish()
    // storeVuex(response.data,{email:loginForm.user, identity: loginForm.identity})
    // setRouter();
    console.log(response);
    setTimeout(() => {
      _this.$Message.success(response.data);
    }, 500);
    setTimeout(() => {
      returnLogin();
    }, 2500);

    // _this.$Message.success(response.data);
    // returnLogin();


  }).catch((error)=>{
    // console.log(error.response);
    // _this.$Message.warning(error.response.data.message)
    // _this.$Loading.finish();

  })
  // return;
};

export const getStudentIdHttp = (_this,email,storeId) => {

  // _this.$Loading.start();

  axios({
    method: 'get',
    url: '/studentInfo/getStudentId',
    params:{
      email:email
    }
  }).then((response) => {
    storeId(response.data);
  }).catch((error) => {
    _this.$Message.warning(error.response.data.message);
  })

};










