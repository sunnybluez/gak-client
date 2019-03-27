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
  // console.log(111,limitNum)
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
export const beginClassHttp = (courseReleaseId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseOperation/beginClass',
      data: {
        courseReleaseId:courseReleaseId
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};
export const officialBeginClassHttp = (courseReleaseId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseOperation/officialBeginClass',
      data: {
        courseReleaseId:courseReleaseId
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
export const getAllApprovingCCHttp = (teacherId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllWaitingOrFailedCourseCreate',
      params: {
        teacherId: parseInt(teacherId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};
export const getAllApprovingCRHttp = (teacherId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllWaitingOrFailedCourseRelease',
      params: {
        teacherId: parseInt(teacherId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};
export const getAllGeneralCRHttp = (teacherId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllGeneralCourse',
      params: {
        teacherId: parseInt(teacherId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};
export const getAllReelectCRHttp = (teacherId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllReelectCourse',
      params: {
        teacherId: parseInt(teacherId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};
export const getAllBeginCRHttp = (teacherId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllBeginCourse',
      params: {
        teacherId: parseInt(teacherId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};

export const getAllBeginClassHttp = (teacherId,term) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getAllBeginClassByTerm',
      params: {
        teacherId: parseInt(teacherId),
        term:term
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};



export const postCourseWareHttp = (file,courseReleaseId)=>{
  let forms = new FormData();
  forms.append("file", file);
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/fileStream/uploadCourseWare',
      headers:{'Content-Type':'multipart/form-data'},
      params:{
        courseReleaseId:courseReleaseId
      },
      data:forms
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });
}


