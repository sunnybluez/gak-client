import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/Login'
import introduction from '@/components/login/Introduction'
import studentHome from '@/components/home/StudentHome'
import teacherHome from '@/components/home/TeacherHome'
import managerHome from '@/components/home/ManagerHome'
import authentication from '@/components/authentication/Authentication'

import studentInfo from "../components/personalInfo/StudentInfo";
import teacherInfo from "../components/personalInfo/TeacherInfo";

import stuMyCourseNav from '../components/student/navigation/MyCourseNavigation'
import stuSeOReCourseNav from '../components/student/navigation/SeOReCourseNavgation';
import selectContent from '../components/student/content/serereCourse/SelectCourseDetail'
import selectResult from '../components/student/content/serereCourse/MySelectionAndResult'
import reelectCourse from '../components/student/content/serereCourse/ReelectCourse'
import completeCourse from '../components/student/content/myCourse/CompleteCourseS'

import partialCourse from '../components/student/content/myCourse/PartialCourse'


import teaNavCORCourse from  '@/components/teacher/navigation/CORCourseNavigation'
import teaCreateCourse from '../components/teacher/content/coromCourse/CreCourseDetail'
import teaReleaseCourse from '../components/teacher/content/coromCourse/ReleCourseDetail'
import courseStateManage from '../components/teacher/content/coromCourse/CourseStateManage'
import courseManage from '../components/teacher/navigation/CourseManage';
import completeCourseManage from '../components/teacher/content/courseManage/CompleteCourse';




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
      redirect:'/studentHome/myCourse',
      children:[

        {
          path:'/studentHome/myCourse',
          components:{
            "student-all-nav":stuMyCourseNav
          },
          children:[
            {
              path:'/studentHome/MyCourse/CurrentTerm',
              components:{
                "content":completeCourse
              }
            },
            {
              path:'/studentHome/MyCourse/PreviousTerm',
              components:{
                "content":partialCourse
              }
            }
          ]
        },
        {
          path:'/studentHome/selectCourse',
          components:{
            "student-all-nav":stuSeOReCourseNav
          },
          children:[
            {
              path: '/studentHome/selectCourse/select',
              components: {
                "content": selectContent
              }
            },
            {
              path: '/studentHome/selectCourse/result',
              components: {
                "content": selectResult
              }
            },
            {
              path: '/studentHome/selectCourse/reelect',
              components: {
                "content": reelectCourse
              }
            },
          ]
        },
        {
          path:'/studentHome/personalInfo',
          components:{
            "student-all-nav":studentInfo
          },

        }
      ]

    },
    {
      path: '/teacherHome',
      components:{
        'homePage':teacherHome
      },
      redirect:"/teacherHome/courseManage",
      children:[
        {
          path:'/teacherHome/corCourse',
          components:{
            "teacher-all-nav":teaNavCORCourse
          },
          redirect:"/teacherHome/corCourse/createCourse",
          children:[
            {
              path:"/teacherHome/corCourse/createCourse",
              components:{
                "content":teaCreateCourse
              }
            },
            {
              path:"/teacherHome/corCourse/releaseCourse",
              components:{
                "content":teaReleaseCourse
              }
              },
            {
              path:"/teacherHome/corCourse/courseStateManage",
              components:{
                "content":courseStateManage
              }

            }
          ]
        },
        {
          path: '/teacherHome/courseManage',
          components:{
            "teacher-all-nav":courseManage
          },
          children:[
            {
              path:'/teacherHome/courseManage/completeCourseManage',
              components:{
                "content": completeCourseManage
              }
            }
          ]
        },
        {
          path:'/teacherHome/personalInfo',
          components:{
            "teacher-all-nav":teacherInfo
          },

        }
      ]
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
