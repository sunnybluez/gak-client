import axios from "./axios-init";

export const getCourseWareListHttp = (courseReleaseId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/fileStream/getCourseWarePathList',
      params: {
        courseReleaseId:parseInt(courseReleaseId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });

};

export const getHomeworkListHttp = (courseReleaseId) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/homework/getAllHomework',
      params: {
        courseReleaseId:parseInt(courseReleaseId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);
    })
  });

};
export const addHomeworkHttp = (courseReleaseId,title,description,finishTime) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/homework/addHomework',
      data: {
        courseReleaseId:parseInt(courseReleaseId),
        title:title,
        description:description,
        finishTime: parseInt(finishTime)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });

};

export const getCourseScoreExcelHttp = (courseReleaseId)=>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/homework/getCourseScoreExcel',
      params: {
        courseReleaseId:parseInt(courseReleaseId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
}

export const getCourseCreateId = (courseReleaseId)=>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getCourseCreateId',
      params: {
        courseReleaseId:parseInt(courseReleaseId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
}

export const getPostListByCCIdHttp = (courseCreateId)=>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getPostListByCCId',
      params: {
        courseCreateId:parseInt(courseCreateId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
}
export const getReplyListByPostIdHttp = (postId)=>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/courseInfo/getReplyListByPostId',
      params: {
        postId:parseInt(postId)
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
}

export const addPostHttp = (courseCreateId,email,title,content) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseInfo/addPost',
      data: {
        courseCreateId:parseInt(courseCreateId),
        title:title,
        email:email,
        content: content
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
};

export const addReplyHttp = (postId,email,content) => {
  // console.log(111,limitNum)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/courseInfo/addReply',
      data: {
        postId:parseInt(postId),
        email:email,
        content: content
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error.response.data.message);

    })
  });
};



