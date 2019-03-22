import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/Login'
import introduction from '@/components/login/Introduction'
import studentHome from '@/components/home/StudentHome'
import teacherHome from '@/components/home/TeacherHome'
import managerHome from '@/components/home/ManagerHome'
import authentication from '@/components/authentication/Authentication'
import navigationSelect from '../components/student/navigation/SelectCourseNavigation'
import navigationMyCourse from '../components/student/navigation/MyCourseNavigation'


Vue.use(Router)
// Router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// })
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        'login': login,
        'introduction':introduction
      },
      alias:'/login'
    },
    {
      path: '/studentHome',
      // meta: {
      //   requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      // },
      components:{
        'homePage':studentHome
      },
      // alias:'',
      children:[
        {
          path: '/studentHome/selectCourse',
          components: {
            navigation: navigationSelect
          }
        },
        {

          path:'/studentHome/myCourse',
          components:{
            navigation:navigationMyCourse
          }
        }
      ]

    },
    {
      path: '/teacherHome',
      components:{
        'homePage':teacherHome
      }
    },
    {
      path: '/managerHome',
      components:{
        'homePage':managerHome
      }
    },
    {
      path: '/authentication',
      components:{
        'authenticationPage':authentication
      }
    },
  ]
})
