import axios from "./axios-init";

export const getAllWaitingCourseCreateHttp = () =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/managerWork/getAllWaitingCourseCreate',
    }).then((response) => {

      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}

export const getAllWaitingCourseReleaseHttp = () =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/managerWork/getAllWaitingCourseRelease',
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}


export const approveCourseCreateHttp = (courseCreateId,advice) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/managerWork/approveCourseCreate',
      data:{
        courseCreateId: parseInt(courseCreateId),
        advice:advice
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

}

export const approveCourseReleaseHttp = (courseReleaseId,advice) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/managerWork/approveCourseRelease',
      data:{
        courseReleaseId: parseInt(courseReleaseId),
        advice:advice
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
}

export const getStuAndTeaNumHttp = () =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/statistics/getStuAndTeaNum',
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}
export const getStuTypeNumHttp = () =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/statistics/getStuAndTeaNum',
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}
export const getTeacherLoginDetailHttp = () =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/statistics/getTeacherLoginDetail',
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}
export const getStudentLoginDetailHttp = () =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/statistics/getStudentLoginDetail',
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}


