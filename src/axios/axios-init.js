import axios from 'axios'
import store from '../store/store'

axios.defaults.baseURL = 'http://localhost:8080/';
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
//
// // http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log("header初始化");
    if (store.getters.getToken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      // console.log("header添加token")
      config.headers.Authorization = `${store.getters.getToken}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           // 返回 401 清除token信息并跳转到登录页面
//           store.commit(types.LOGOUT);
//           router.replace({
//             path: 'login',
//             query: {redirect: router.currentRoute.fullPath}
//           })
//       }
//     }
//     return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//   });
export default axios
