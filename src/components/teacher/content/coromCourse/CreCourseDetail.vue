<template>
<div class="content">
  <div>
    <label  for="courseN">课程名</label>
    <Input id = "courseN" v-model="currentCourseName" placeholder="Enter Course Name" clearable style="width: 200px" />
  </div>
  <div>
    <label style="display: block" for="courseD">课程描述</label>
    <Input id= "courseD" v-model="courseDescription" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter description..." />
  </div>
  <div>
    <Button type="primary" icon="md-arrow-round-up" @click = "createCourse">提交审批</Button>
  </div>
</div>

</template>

<script>
  import {createCourseHttp} from "../../../../axios/teacherRequest";
    export default {
        name: "CreCourseDetail",
      data(){
          return{
            currentCourseName:"",
            courseDescription:""
          }
      },
      methods:{
          createCourse(){
            if(this.currentCourseName==""||this.courseDescription==""){
              this.$Message.warning("请填写完整课程信息")
            }else {
              let teacherId = this.$store.getters.getUser.id;
              createCourseHttp(teacherId, this.currentCourseName, this.courseDescription).then(data=>{
                this.$Message.success(data);
              }).catch(err=>{  this.$Message.error(err)}).finally(()=>{
                this.currentCourseName = "";
                this.courseDescription = "";
              })
            }
          }
      }
    }
</script>

<style scoped>
.content {
  width: 80%;
  margin: auto;

}
  .content >div{
    margin-top: 20px;
  }
  .content div *{
    margin: 10px;
  }
  .content label{
    font-size: 18px;
  }

</style>
