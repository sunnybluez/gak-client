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
      url: '/courseOperation/reelectCourse',
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

export const uploadStudentWorkHttp = (file,homeworkId,courseReleaseId,studentId)=>{
  let forms = new FormData();
  forms.append("file", file);
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/homework/uploadStudentWork',
      headers:{'Content-Type':'multipart/form-data'},
      params:{
        courseReleaseId:courseReleaseId,
        homeworkId:homeworkId,
        studentId, studentId
      },
      data:forms
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}

export const getAllMyStudentWorkHttp = (studentId,courseReleaseId) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/homework/getAllStudentWork',
      params:{
        studentId:parseInt(studentId),
        courseReleaseId: parseInt(courseReleaseId)
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
export const getSingleStudentWorkHttp = (studentId,courseReleaseId,homeworkId) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/homework/getSingleStudentWork',
      params:{
        studentId:parseInt(studentId),
        courseReleaseId: parseInt(courseReleaseId),
        homeworkId: parseInt(homeworkId)
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

export const getStudentInfoHttp = (studentId) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/studentInfo/getStudentDetail',
      params:{
        id:parseInt(studentId),
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

export const updateStudentInfoHttp = (studentId, name, age, sex, phoneNum, gradeType) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/studentInfo/updateStudentInfo',
      data:{
        id: parseInt(studentId),
       name,
        age:parseInt(age),
        sex,
        phoneNum:parseInt(phoneNum),
        grade: gradeType
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

}

export const cancelAccountHttp = (studentId)=> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/cancelAccount',
      params: {
        id: parseInt(studentId),
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
}

export const getAllMyCourseOperationHttp = (studentId) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/statistics/getAllMyCourseOperation',
      params:{
        studentId:parseInt(studentId),
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}






