import axios from "./axios-init";

export const createCourseHttp = (teacherId, courseName, courseDescription) => {

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseOperation/createCourse',
      data: {
        teacherId: teacherId,
        currentCourseName: courseName,
        courseDescription: courseDescription
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};

export const releaseCourseHttp = (courseCreateId, studentGradeType, limitNum, term) => {
  console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseOperation/releaseCourse',
      data: {
        courseCreateId,
        studentGradeType,
        limitNum,
        term
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};

export const getAllMyPassCourse = (teacherId) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllMyCreatePassCourseCreate',
      params: {
        teacherId
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

}


