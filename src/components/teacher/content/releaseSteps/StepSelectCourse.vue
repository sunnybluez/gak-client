<template>
  <div>
    <RadioGroup v-model="currentCourseName" type="button">
      <Radio v-for="(item,index) in courseList" :key="index" :label="item.name"></Radio>
    </RadioGroup>
    <div v-if="currentCourse!=null" class="card-div">
      <Card>
        <p slot="title">{{currentCourse.name}}</p>
        <p>课程id: {{currentCourse.id}}</p>
        <p>{{currentCourse.description}}</p>
      </Card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StepSelectCourse",
      data(){
        return{
          currentCourseName:"",
          currentCourse:null
        }
      },
      props:['courseList'],
      watch:{
        currentCourseName(newVal){
          this.currentCourse = this.courseList.find(item=> item.name==newVal)
          this.$emit("getCurrentCourse", this.currentCourse);
        }
      }

    }
</script>

<style scoped>
.card-div{
  margin: 25px auto;
  text-align:initial;
  width: 40%;
}
  .card-div p{
    width: 100%;
    white-space:normal;
  }
</style>
