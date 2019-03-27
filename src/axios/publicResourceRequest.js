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
