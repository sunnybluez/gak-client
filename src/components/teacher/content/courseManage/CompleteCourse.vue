<template>

  <div>
    <Tabs v-model="currentTab">

      <TabPane label="课件" name="courseWare" icon="ios-book">
        <Divider orientation="left">以往课件</Divider>
        <div   style="width: 80%;margin: 25px auto">

        <a style="display: block;margin: 5px auto" v-for="(value,index) in courseWareList" :key="index"  :href="'http://localhost:8080/'+ value.path" target="_blank">{{value.name}}</a>
        </div>
        <Divider orientation="left">课件上传</Divider>
        <Upload
          :before-upload="handleUpload"
          style="width: 80%;margin: 20px auto"
          multiple
          type="drag"
          :action="'http://localhost:8080/fileStream/uploadCourseWare?courseReleaseId='+courseReleaseId">

          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>选择或拖拽文件上传</p>
          </div>
        </Upload>
        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
      </TabPane>
      <TabPane label="作业" name="homework" icon="ios-copy">
        <Divider orientation="left">发布新作业</Divider>
        <div>
          <Input v-model="newHomeWorkTitle" placeholder="输入标题..." clearable style="width: 20%" />
          <Input v-model="newHomeWorkFinishTime" number placeholder="输入完成天数..." clearable style="width: 20%"  />
          <div style="margin-top: 25px">
            <Input v-model="newHomeWorkDescription" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="作业要求..." style="width: 70%" />
            <Button @click="addNewHomework" style="margin-top: 10px" type="primary">提交</Button>
          </div>
        </div>
        <h2 style="margin-top: 30px"> 往期作业</h2>
        <div v-if="homeworkList.length!=0">
          <div v-for="(value,index) in homeworkList" :key="index">
            <Divider  orientation="left">{{value.title}}</Divider>
            <div class="homework-detail">
              <p>描述：{{value.description}} </p>
              <p>截止时间：{{value.deadline}}</p>
            </div>
            <div class="operate-div">
              <!--<Button @click="downloadWorkZip" style="margin-top: 10px" type="primary">下载作业</Button>-->
              <a :href="'http://localhost:8080/homework/downloadWorkZip?homeworkId='+value.id" target="_blank">下载作业</a>
            </div>
          </div>

        </div>
      </TabPane>
      <TabPane label="成绩" name="score" icon="ios-ionic">
        <div v-if="excelPath">
          <a :href="'http://localhost:8080/'+excelPath" target="_blank">成绩表excel</a>
        </div>
        <div v-else>
          <Upload
            :before-upload="handleUploadExcel"
            style="width: 80%;margin: 20px auto"
            type="drag"
            :action="'http://localhost:8080/fileStream/uploadCourseScoreExcel?courseReleaseId='+courseReleaseId">

            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>选择或拖拽Excel文件上传</p>
            </div>
            <div v-if="excel !== null">Upload file: {{ excel.name }} <Button type="text" @click="uploadExcel" :loading="loadingStatusExcel">{{ loadingStatusExcel ? 'Uploading' : 'Click to upload' }}</Button></div>

          </Upload>
        </div>
      </TabPane>
      <TabPane label="论坛" name="bbs" icon="ios-people"></TabPane>
    </Tabs>
  </div>
</template>

<script>
  import {postCourseWareHttp,postCourseExcelHttp} from "../../../../axios/teacherRequest";
  import  {getCourseWareListHttp,getHomeworkListHttp,addHomeworkHttp,getCourseScoreExcelHttp} from  "../../../../axios/publicResourceRequest"
    export default {
        name: "CompleteCourse",
      data(){
        return{
          courseReleaseId: 0,
          courseInfo:{},
          currentTab:"courseWare",
          courseWareList:[],

          file: null,
          loadingStatus: false,

          homeworkList:[],

          newHomeWorkTitle:undefined,
          newHomeWorkDescription:undefined,
          newHomeWorkFinishTime:undefined,

          excelPath:null,
          excel: null,
          loadingStatusExcel: false

        }
      },
      methods:{
        initCourseInfo(){
          this.courseReleaseId = this.$route.query.courseReleaseId;
          this.currentTab = "courseWare";
          this.courseInfo = {};
          this.initCourseWare();
          this.initHomework();
          this.initAddHomework();
          this.initCourseScore();
        },
        initCourseWare(){
          getCourseWareListHttp(this.courseReleaseId).then(data=>{
            this.courseWareList = data;
          }).catch(err=>{
            this.courseWareList=[]
            this.$Message.error(err);
          });

        },
        initHomework(){
          getHomeworkListHttp(this.courseReleaseId).then(data=>{
            this.homeworkList = data;
          }).catch(err=>{
            this.homeworkList=[];
            this.$Message.error(err);
          })
        },
        initAddHomework(){
          this.newHomeWorkTitle= undefined
          this.newHomeWorkDescription= undefined
          this.newHomeWorkFinishTime= undefined
        },
        initCourseScore(){
          getCourseScoreExcelHttp(this.courseReleaseId).then(data=>{
            this.excelPath = data;
            console.log("path", this.excelPath);
          }).catch(err=>{
            this.$Message.error(err);
          })
        },

        addNewHomework(){
          if(this.newHomeWorkTitle===undefined||this.newHomeWorkDescription===undefined||this.newHomeWorkFinishTime===null) {
            this.$Message.error("请填写完整信息");
          }else {
            addHomeworkHttp(this.courseReleaseId,this.newHomeWorkTitle,this.newHomeWorkDescription,this.newHomeWorkFinishTime).then(data=>{
              this.$Message.success(data);
              this.initCourseInfo();
              this.currentTab = "homework";
            }).catch(err=>{ this.$Message.error(err)}).finally(()=>{
              this.initAddHomework();
            })
          }
        },
        handleUpload (file) {
          this.file = file;
          return false;
        },
        upload () {
          this.loadingStatus = true;
          postCourseWareHttp(this.file,this.courseReleaseId).then(data=>{
            this.file = null;
            this.loadingStatus = false;
            this.$Message.success(data);
            this.initCourseWare()
          }).catch(err=>{
            this.$Message.error(err);
          })

        },

        handleUploadExcel (file) {
          this.excel = file;
          return false;
        },
        uploadExcel () {
          this.loadingStatusExcel = true;
         postCourseExcelHttp(this.excel,this.courseReleaseId).then(data=>{
           this.excel = null;
           this.loadingStatusExcel = false;
           this.$Message.success(data);
           this.initCourseScore();
         }).catch(err=>{
           this.$Message.error(err);
         })
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
  /*width: 80%;*/
  /*text-align: initial;*/
  /*margin: 10px 10%;*/

  width: 50%;
  text-align: initial;
  margin: 10px 5%;
  display: inline-block;
}
.operate-div{
  width: 20%;
  /*text-align: initial;*/
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
</style>
