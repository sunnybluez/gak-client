<template>
<div style="width: 60%;margin: 20px auto">
  <Divider orientation="left">选课/退课日志</Divider>
  <Table :columns="courseLogColumn" :data="courseLogColumnData"></Table>

</div>
</template>

<script>
  // import ECharts from 'vue-echarts'

  // import theme from '../theme.json'
  // ECharts.registerTheme('ovilia-green', theme); //引入主题
  import {getAllMyCourseOperationHttp} from "../../axios/studentRequest";
  import PieChart from "./charts/PieChart"
    export default {
        name: "StudentStatistics",
      components: {
       PieChart
      },
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
                key: "course"
              }
            ],
            courseLogColumnData:[]

          }
      },
      methods:{
        initData(){

          let studentId = this.$store.getters.getUser.id;
          getAllMyCourseOperationHttp(studentId).then(data=>{
            this.courseLogColumnData = data;
          }).catch(err=>{
            this.$Message.error(err);})
        }

      },
      mounted(){
          this.initData()
      }
    }
</script>

<style scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
