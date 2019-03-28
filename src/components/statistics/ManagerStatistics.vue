<template>
  <div class="main-con">
    <Divider orientation="left">学生/教师统计</Divider>
    <pie-chart style="width: 45%;display: inline-block" :name="userType" :data="userTypeNum"  title="学生教师比" unique-id="00"></pie-chart>
    <pie-chart style="width: 45%;display: inline-block" :name="studentGradeType" :data="studentGradeTypeNum"  title="学生类型分布" unique-id="01"></pie-chart>

    <Divider orientation="left">MyCourse使用统计</Divider>
    <line-chart style="width: 100%;height: 300px" title="近七日登录情况" :x-data="recentSevenDayX" :seriesName="seriesName" :seriesData="seriesData" unique-id="03"></line-chart>



  </div>
</template>

<script>
  import PieChart from "./charts/PieChart"
  import {getStuAndTeaNumHttp,getStuTypeNumHttp,getStudentLoginDetailHttp,getTeacherLoginDetailHttp} from "../../axios/managerRequest";
  import LineChart from "./charts/LineChart";

  export default {
        name: "ManagerStatistics",
      components:{LineChart, PieChart},
    data(){
          return{
            userType:["学生","老师"],
            userTypeNum:[],

            studentGradeType: ["大一","大二","大三","大四"],
            studentGradeTypeNum:[],

            recentSevenDayX:[],
            seriesName:["学生","老师"],
            seriesData:[]

          }
    },
    methods:{
      init(){
        getStuAndTeaNumHttp().then(data=>{
          this.userTypeNum = data;
        }).catch(err=>{
          this.$Message.error(err);
        })
        getStuTypeNumHttp().then(data=>{
          this.studentGradeTypeNum = data;
        }).catch(err=>{
          this.$Message.error(err);
        })

        this.initDSevenDayX();
        getStudentLoginDetailHttp().then(data=>{
          this.seriesData.push(data)
        }).catch(err=>{
          this.$Message.error(err);
        })
        getTeacherLoginDetailHttp().then(data=>{
          this.seriesData.push(data)
        }).catch(err=>{
          this.$Message.error(err);
        })


      } ,

      initDSevenDayX(){
        for (let i=0;i<7;i++) {
          console.log(this.recentSevenDayX)
          this.recentSevenDayX.push(this.getDay(-i).toString())
        }
      },
      getDay(day){
        let today = new Date();
        let targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        let tYear = today.getFullYear();
        let tMonth = today.getMonth();
        let tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tYear+"-"+tMonth+"-"+tDate;
       },
      doHandleMonth(month){
        let m = month;
        if(month.toString().length == 1){
          m = "0" + month;
        }
        return m;
      }

  },
    created(){
         this.init()
    }
    }
</script>

<style scoped>
  .main-con {
    width: 60%;
    margin: 20px auto;

  }

</style>
