<template>
<div class="content-detail">



  <div class="step-head">
    <Steps :current="current">
      <Step title="选择课程"></Step>
      <Step title="年级相关"></Step>
      <Step title="限选人数"></Step>
      <Step title="提交审批"></Step>
    </Steps>
  </div>
  <div class="step-body">
    <component :is="currentStep"></component>
  </div>
  <div class="step-next">
    <Button type="primary" @click="nextStep">下一步</Button>
  </div>

</div>

</template>

<script>
  let selectCourse = {
    template:`    <div>选择课程</div>`
  }
  let selectGrade = {
    template:`    <div>年级相关</div>`
  }
  let selectNum = {
    template:`    <div>限选人数</div>`
  }
    export default {
        name: "ReleCourseDetail",
      components:{
        "step1":selectCourse,
        "step2":selectGrade,
        "step3":selectNum
      },
      data(){
          return{
            current:0,
            currentStep:"step1"
          }
      },
      methods:{
          nextStep(){
              if(this.current==3){

                this.current = 0;
                this.currentStep = "step" + (this.current + 1)
              }else {
                this.current++;
                this.currentStep = "step" + (this.current + 1)
              }
          }
      }
    }
</script>

<style scoped>
  .content-detail {
    width: 90%;
    margin: auto;
    text-align: initial;
  }
  .content-detail>div{
    width: 100%;
    margin:30px 0;
  }
  .step-head{

  }
  .step-body{
    text-align: center;
    min-height: 250px;
  }
  .step-next{
    text-align: center;

  }

</style>
