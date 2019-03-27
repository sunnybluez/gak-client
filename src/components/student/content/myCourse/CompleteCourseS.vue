<template>
    <div>
      <Tabs v-model="currentTab">
        <TabPane label="课件" name="courseWare" icon="ios-book">
          <Divider orientation="left">以往课件</Divider>
          <div   style="width: 80%;margin: 25px auto">

            <a style="display: block;margin: 5px auto" v-for="(value,index) in courseWareList" :key="index"  :href="'http://localhost:8080/'+ value.path" target="_blank">{{value.name}}</a>
          </div>
        </TabPane>
        <TabPane label="作业" name="homework" icon="ios-copy">
          <h2 style="margin-top: 30px"> 往期作业</h2>
          <div v-if="homeworkList.length!=0">
            <div v-for="(value,index) in homeworkList" :key="index">
              <Divider  orientation="left">{{value.title}}</Divider>
              <div class="homework-detail">
                <p>描述:{{value.description}}</p>
                <p>截止时间:{{value.deadline}}</p>
              </div>
              <div class="finished-div" >
                <Button type="primary" @click="loadMyWork(value)">查看</Button>
              </div>


            </div>
          </div>
          <Modal
          v-model="modal1"
          :title="currentHomework.title"
        >
            <div v-if="currentStudentWork.id">
              <p>已提交</p>
              <a style="display: block;margin: 5px auto"  :href="'http://localhost:8080/'+ currentStudentWork.path" target="_blank">{{currentStudentWork.name}}</a>
            </div>
            <div v-else>
              <Upload
                :before-upload="handleUpload"
                style="width: 80%;margin: 20px auto"
                type="drag"
                :action="'http://localhost:8080/fileStream/uploadCourseWare?courseReleaseId='+courseReleaseId">

                <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                  <p>选择或拖拽文件上传</p>
                </div>
              </Upload>
              <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>

            </div>

        </Modal>
        </TabPane>
        <TabPane label="成绩" name="score" icon="ios-ionic">
          <div v-if="excelPath">
            <a :href="'http://localhost:8080/'+excelPath" target="_blank">成绩表excel</a>
          </div>
          <div v-else>
              <p>暂时未发布成绩
              </p>
          </div>
        </TabPane>
        <TabPane label="论坛" name="bbs" icon="ios-people">
          <Bbs :courseId="this.$route.query.courseReleaseId"></Bbs>
        </TabPane>
      </Tabs>
    </div>
</template>

<script>
  import  {getCourseWareListHttp,getHomeworkListHttp,getCourseScoreExcelHttp} from  "../../../../axios/publicResourceRequest"
  import {uploadStudentWorkHttp,getSingleStudentWorkHttp} from "../../../../axios/studentRequest"
  import Bbs from "../../../bbs/Bbs";

    export default {
        name: "completeCourseS",
      components: {Bbs},
      data(){
        return {
          courseReleaseId: 0,
          courseInfo: {},
          currentTab: "courseWare",
          courseWareList: [],


          homeworkList: [],

          modal1: false,
          currentHomework: {},
          currentStudentWork: {},


          file: null,
          loadingStatus: false,

          excelPath:null
        };
      },
      methods:{
        initCourseInfo(){
          this.courseReleaseId = this.$route.query.courseReleaseId;
          this.currentTab = "courseWare";
          this.courseInfo = {};

          this.initCourseWare();
          this.initHomework();
          this.initCourseScore();
        },

        initCourseWare(){

          getCourseWareListHttp(this.courseReleaseId).then(data=>{
            this.courseWareList = data;
          }).catch(err=>{
            this.$Message.error(err);
          });

        },

        initHomework(){
          getHomeworkListHttp(this.courseReleaseId).then(data=>{
            this.homeworkList = data;

          }).catch(errArr=>{
            this.homeworkList=[];
            this.$Message.error(errArr);
          })
        },
        initCourseScore(){
          getCourseScoreExcelHttp(this.courseReleaseId).then(data=>{
            this.excelPath = data;
            console.log("path", this.excelPath);
          }).catch(err=>{
            this.$Message.error(err);
          })
        },


        loadMyWork(homework){
          console.log(homework)
          this.modal1 = true;
          this.currentHomework = homework;

          let homeworkId = homework.id;
          let studentId = this.$store.getters.getUser.id;
          let courseReleaseId = this.courseReleaseId;
          getSingleStudentWorkHttp(studentId, courseReleaseId, homeworkId).then(data=>{
            this.currentStudentWork = data;
          }).catch(err=>{
            this.$Message.error(err);
          })

        },

        handleUpload (file) {
          this.file = file;
          return false;
        },
        upload () {
          this.loadingStatus = true;

          let homeworkId = this.currentHomework.id;
          let studentId = this.$store.getters.getUser.id;

          uploadStudentWorkHttp(this.file, homeworkId, this.courseReleaseId, studentId).then(data => {
            this.file = null;
            this.loadingStatus = false;
            this.$Message.success(data);
            this.loadMyWork(this.currentHomework);
          }).catch(err => {
            this.$Message.error(err);
          });

        }




      },
      mounted(){
        this.initCourseInfo();
      },
      watch:{
        "$route":function () {
          this.initCourseInfo();
          }
      }

    }
</script>

<style scoped>
  .homework-detail{
    width: 50%;
    text-align: initial;
    margin: 10px 5%;
    display: inline-block;

  }
  .homework-detail p{
    width: 100%;
    margin-top: 5px;
    margin-left: 0px;

    word-break:normal;
    white-space:pre-warp;
    word-wrapL:break-word;
  }
  .finished-div {
    display: inline-block;
    width: 20%;
    margin: auto;
  }


  .post-div {
    width: 40%;
    /*padding: px;*/
    margin: 10px auto;
  }
  .post-div >div{
    cursor: pointer;
  }
</style>
