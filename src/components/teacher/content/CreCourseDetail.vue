<template>
<div class="content">
  <div>
    <label  for="courseN">课程名</label>
    <Input id = "courseN" v-model="courseName" placeholder="Enter Course Name" clearable style="width: 200px" />
  </div>
  <div>
    <label style="display: block" for="courseD">课程描述</label>
    <Input id= "courseD" v-model="courseDescription" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter description..." />
  </div>
  <div>
    <Button type="primary" icon="md-arrow-round-up">提交审批</Button>
  </div>
</div>

</template>

<script>
    export default {
        name: "CreCourseDetail",
      data(){
          return{
            courseName:"",
            courseDescription:""
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
