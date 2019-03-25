<template>
<div class="content-detail">



  <div class="step-head" style="margin-left: 10%">
    <Steps :current="current">
      <Step title="选择课程"></Step>
      <Step title="年级相关"></Step>
      <!--<Step title="限选人数"></Step>-->
      <Step title="提交审批"></Step>
    </Steps>
  </div>
  <div class="step-body">
    <component :course-list="courseCreateList" :is="currentStep"
               @getCurrentCourse="getCurrentCourse"
               @getGradeInfo="getGradeInfo"></component>
  </div>
  <div class="step-next">
    <Button type="primary" @click="nextStep">下一步</Button>
  </div>

</div>

</template>

<script>
  import {getAllMyPassCourse,releaseCourseHttp} from "../../../axios/teacherRequest";
  import selectCourse from "./releaseSteps/StepSelectCourse";
  import selectGrade from "./releaseSteps/StepSelectGrade";

    export default {
        name: "ReleCourseDetail",
      components:{
        "step1":selectCourse,
        "step2":selectGrade,
      },
      data(){
          return{
            current:0,
            currentStep:"step1",
            courseCreateList:[],
            courseSelected: null,
            grade:null,
            term:null,
            limitNum:0
          }
      },
      methods:{
          nextStep(){
            if(this.current==0){
              if(this.courseSelected===null) return;
              this.current++;
              this.currentStep = "step2"
            }else if(this.current==1){
              if(this.grade===null||this.term===null||this.limitNum===0) return;
              this.current++;
              releaseCourseHttp(this.courseSelected.id, this.grade, this.limitNum, this.term).then(data=>{
                this.$Message.success(data);
              }).catch(err=>{this.$Message.error(err); }).finally(()=>{
                this.current =0;
                this.currentStep = "step1"
                this.courseSelected= null
                this.grade=null
                this.term=null
                this.limitNum=0
              })
            }

              // if(this.current==2){
              //
              //   this.current = 0;
              //   this.currentStep = "step" + (this.current + 1)
              // }else {
              //   this.current++;
              //   this.currentStep = "step" + (this.current + 1)
              // }
          },
          getCurrentCourse(childValue) {
            this.courseSelected = childValue;
          },
          getGradeInfo(childValue){
            this.grade=childValue.grade;
            this.term=childValue.term;
            this.limitNum=childValue.limitNum;
          }


      },
      mounted(){
        let teacherId = this.$store.getters.getUser.id;

        getAllMyPassCourse(teacherId).then(data=>{
          this.courseCreateList = data;
          // console.log(111,data)
        }).catch(err=>{
          console.log(err);
        })


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

  .step-body{
    text-align: center;
    min-height: 250px;
  }
  .step-next{
    text-align: center;

  }

</style>
