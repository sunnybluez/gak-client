<template>
<div class="main-con">
  <Divider orientation="left">课程审批</Divider>
  <div style="display:inline-block;width: 45%;vertical-align: top">
    <Divider orientation="left">创建课程</Divider>
    <div class="post-single" v-for="(value,index) in courseCreateList" :key="index">
      <Card >
        <p style="text-align: initial" slot="title">{{value.name}}</p>
        <p style="text-align: initial" >老师：{{value.teacher}}</p>
        <p style="text-align: initial;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{{value.description}}</p>
        <div style="float: right">
          <Button type="success" @click="doCreate(value.id,'agree')">通过</Button>
          <Button type="error" @click="doCreate(value.id,'refuse')">拒绝</Button>
        </div>
        <div style="clear: both"></div>
      </Card>
    </div>
  </div>
  <Divider style="min-height: 500px;max-height: 1000px" type="vertical"></Divider>
  <div style="display:inline-block;width: 45%;vertical-align: top">
    <Divider orientation="left">发布课程</Divider>
    <div class="post-single" v-for="(value,index) in courseReleaseList" :key="index">
      <Card >
        <p style="text-align: initial" slot="title">{{value.name}}</p>
        <p style="text-align: initial">老师：{{value.teacher}}</p>
        <p style="text-align: initial">学期：{{value.term}}</p>
        <p style="text-align: initial" >年级：{{value.grade}}</p>
        <p style="text-align: initial">限选人数：{{value.limitNum}}</p>
        <p style="text-align: initial;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{{value.description}}</p>
        <div style="float: right">
          <Button type="success" @click="doRelease(value.id,'agree')">通过</Button>
          <Button type="error" @click="doRelease(value.id,'refuse')">拒绝</Button>
        </div>
        <div style="clear: both"></div>
      </Card>
    </div>

  </div>
</div>
</template>

<script>

  import {getAllWaitingCourseCreateHttp,getAllWaitingCourseReleaseHttp,approveCourseCreateHttp,approveCourseReleaseHttp} from "../../axios/managerRequest";

  export default {
        name: "ManagerApprove",
      data(){
          return{
            courseCreateList: [],
            courseReleaseList: []
          }
      },
    methods:{
      init(){
        getAllWaitingCourseCreateHttp().then(data=>{
          this.courseCreateList = data
          console.log("createList",this.courseCreateList)
        }).catch(err=>{this.$Message.error(err)})

        getAllWaitingCourseReleaseHttp().then(data=>{
          this.courseReleaseList = data
          console.log("releaseList",this.courseReleaseList)
        }).catch(err=>{this.$Message.error(err)})
      },
      doCreate(courseCreateId,advice){
        approveCourseCreateHttp(courseCreateId,advice).then(data=>{
          this.$Message.success(data);
        }).catch(err=>{this.$Message.error(err);}).finally(()=>{
          this.init();
        })

      },
      doRelease(courseReleaseId,advice){
        approveCourseReleaseHttp(courseReleaseId,advice).then(data=>{
          this.$Message.success(data);
        }).catch(err=>{this.$Message.error(err);}).finally(()=>{
          this.init();
        })
      }
    },
    mounted(){
     this.init()


    }
    }
</script>

<style scoped>
.main-con {
  width: 60%;
  margin: 20px auto;

}
  .post-single{
    margin: 10px auto;
  }
</style>
