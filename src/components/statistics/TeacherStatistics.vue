<template>

  <div style="width: 60%;margin: 20px auto">
    <Divider orientation="center">创课/开课日志</Divider>
    <Divider orientation="left">创课日志</Divider>

    <Table :columns="courseLogColumn" :data="courseLogColumnData"></Table>
    <Divider orientation="left">开课日志</Divider>

    <Table :columns="courseLogColumn1" :data="courseLogColumnData1"></Table>

  </div>
</template>

<script>
  import {getTeacherCreateCourseLogHttp, getTeacherReleaseCourseLogHttp} from "../../axios/teacherRequest";

  export default {
        name: "TeacherStatistics",
      data(){
          return{
            courseLogColumn: [
              {
                title: 'Date',
                key: 'date'
              },
              {
                title: 'Operation',
                key: 'operation'
              },
              {
                title:"Course",
                key: "name"
              }
            ],
            courseLogColumnData:[],

            courseLogColumn1: [
              {
                title: 'Date',
                key: 'date'
              },
              {
                title: 'Operation',
                key: 'operation'
              },
              {
                title:"Course",
                key: "name"
              }
            ],
            courseLogColumnData1:[]
          }
      },
    methods:{
      initData(){

        let studentId = this.$store.getters.getUser.id;
        getTeacherCreateCourseLogHttp(studentId).then(data=>{
          this.courseLogColumnData = data;
        }).catch(err=>{
          this.$Message.error(err);});
        getTeacherReleaseCourseLogHttp(studentId).then(data=>{
          this.courseLogColumnData1 = data;
        }).catch(err=>{
          this.$Message.error(err);});

      }

    },
    mounted(){
      this.initData()
    }
    }
</script>

<style scoped>

</style>
