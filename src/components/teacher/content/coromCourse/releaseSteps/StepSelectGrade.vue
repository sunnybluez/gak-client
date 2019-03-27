<template>
<div>
  <Divider orientation="left">年级</Divider>
  <RadioGroup v-model="grade" type="button">
    <Radio label="大一"></Radio>
    <Radio label="大二"></Radio>
    <Radio label="大三"></Radio>
    <Radio label="大四"></Radio>
  </RadioGroup>
  <Divider orientation="left">学期</Divider>
  <RadioGroup v-model="term" type="button">
    <Radio label="2019春"></Radio>
    <Radio label="2018秋"></Radio>
    <Radio label="2018春"></Radio>
  </RadioGroup>
  <Divider orientation="left">人数</Divider>
  <Slider style="width: 60%;margin:30px 25%" v-model="limitNum" show-input></Slider>
</div>
</template>

<script>
    export default {
        name: "StepSelectGrade",
      data(){
          return{

             grade:null,
             term:null,
             limitNum:0,
            infoAll:{}

          }
      },
      methods:{
        sendFather(){
          this.$emit("getGradeInfo", this.infoAll);
        }
      },
      watch:{
        grade(newVal) {
          this.infoAll.grade = newVal;
          this.sendFather();
        },
        term(newVal) {
          this.infoAll.term = newVal;
          this.sendFather();
        },
        limitNum(newVal) {
          this.infoAll.limitNum = newVal;
          this.sendFather();
        }

      }
    }
</script>

<style scoped>

</style>
