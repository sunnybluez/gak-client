import axios from "./axios-init";




export const getAllMyOnCourseByTerm =  (studentId,term)=>{

  // let studentIds = parseInt(studentId);
  // console.log(studentIds===3)
  // console.log(typeof studentId)

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllMyOnCourseByTerm',
      params: {
        studentId: parseInt(studentId),
        term: term
      }
    }).then((response) => {
      // console.log(response.data)
      // callback(response.data, term);
      resolve(response.data);
    }).catch((error) => {
      // console.log(error.response.data.message)
      // _this.$Message.warning(error.response.data.message);
      reject(error.response.data.message);
    });
  })

}

//得到所有的可选的初选课程
export const getAllCanSelectCourseHttp  = (studentId,term)=>{

  console.log(studentId, term);

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllCanSelectCourseByTerm',
      params:{
        studentId:parseInt(studentId),
        term: term
      }
    }).then((response) => {
      // callback(response.data);
      resolve(response.data);
    }).catch((error) => {
      // _this.$Message.warning(error.response.data.message);
      reject(error.response.data.message);
    })
  });

}

//得到所有的可补选的课程
export const getAllCanReelectCourseHttp  = (studentId,term)=>{

  // console.log(studentId, term);

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllCanReelectCourseByTerm',
      params:{
        studentId:parseInt(studentId),
        term: term
      }
    }).then((response) => {
      // callback(response.data);
      resolve(response.data);
    }).catch((error) => {
      // _this.$Message.warning(error.response.data.message);
      reject(error.response.data.message);
    })
  });

}

export const getAllSelectedCourseHttp = (studentId,term) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllSelectedCourseByTerm',
      params:{
        studentId:parseInt(studentId),
        term: term
      }
    }).then((response) => {
      // callback(response.data);
      resolve(response.data);
    }).catch((error) => {
      // _this.$Message.warning(error.response.data.message);
      reject(error.response.data.message);
    })
  });
}

export const getAllFailedCourseHttp = (studentId,term) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllFailedCourseByTerm',
      params:{
        studentId:parseInt(studentId),
        term: term
      }
    }).then((response) => {
      // callback(response.data);
      resolve(response.data);
    }).catch((error) => {
      // _this.$Message.warning(error.response.data.message);
      reject(error.response.data.message);
    })
  });
}

export const getAllOngoingCourseHttp = (studentId,term) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllOngoingCourseByTerm',
      params:{
        studentId:parseInt(studentId),
        term: term
      }
    }).then((response) => {
      // callback(response.data);
      resolve(response.data);
    }).catch((error) => {
      // _this.$Message.warning(error.response.data.message);
      reject(error.response.data.message);
    })
  });
}


export const selectCourseHttp = (studentId, courseReleaseId) => {

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseOperation/selectCourse',
      data:{
        studentId:parseInt(studentId),
        courseReleaseId: parseInt(courseReleaseId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};

export const reelectCourseHttp = (studentId, courseReleaseId) => {

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseOperation/dropCourse',
      data:{
        studentId:parseInt(studentId),
        courseReleaseId: parseInt(courseReleaseId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};

export const dropCourseHttp = (studentId, courseReleaseId) => {

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseOperation/drop',
      data:{
        studentId:parseInt(studentId),
        courseReleaseId: parseInt(courseReleaseId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};
