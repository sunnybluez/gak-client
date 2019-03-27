<template>
  <Layout class="main-content">
    <Sider style="width: 260px;min-width:0px;max-width: 1000px;flex:none;padding: 5px" class="main-content-menu" hide-trigger>
      <Menu class="teacher-navigation" :open-names="['1']">

        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-cog" />
            2019-Spring
          </template>
          <router-link   v-for="(value, index) in courseList1" :to="{path:'/teacherHome/courseManage/completeCourseManage',query:{term:'SPRING2019',courseReleaseId:value.id}}" :key="index">
            <MenuItem :name="1-(index+1)">id :{{value.id}} - {{value.name}}</MenuItem>
          </router-link>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-cog" />
            2018-Autumn
          </template>
          <router-link v-for="(value, index) in courseList2" :to="{path:'/teacherHome/courseManage/completeCourseManage',query:{term:'AUTUMN2018',courseReleaseId:value.id}}" :key="index">
            <MenuItem :name="2-(index+1)">id :{{value.id}} - {{value.name}}</MenuItem>
          </router-link>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-cog" />
            2018-Spring
          </template>
          <router-link v-for="(value, index) in courseList3" :to="{path:'/teacherHome/courseManage/completeCourseManage',query:{term:'SPRING2018',courseReleaseId:value.id}}" :key="index">
            <MenuItem :name="3-(index+1)">id :{{value.id}} - {{value.name}}</MenuItem>
          </router-link>
        </Submenu>
      </Menu>
    </Sider>
    <Content class="main-content-con" >
      <router-view name="content"></router-view>
    </Content>
  </Layout>

</template>

<script>
  import {getAllBeginClassHttp} from "../../../axios/teacherRequest";
  export default {
    name: "CourseManage",
    data(){
      return{
        courseList1:{},
        courseList2:{},
        courseList3:{}
      }
    },
    mounted(){
      let studentId = this.$store.getters.getUser.id;
      getAllBeginClassHttp(studentId, "SPRING2019").then(data=>{
        this.courseList1 = data;
      }).catch(err=>{
        this.$Message.error(err);
      })
      getAllBeginClassHttp(studentId, "AUTUMN2018").then(data=>{
        this.courseList2 = data;
      }).catch(err=>{
        this.$Message.error(err);
      })
      getAllBeginClassHttp(studentId, "SPRING2018").then(data=>{
        this.courseList3 = data;
      }).catch(err=>{
        this.$Message.error(err);
      })
    }
  }
</script>

<style scoped>
  .main-content {
    background: blanchedalmond;
    width: 70%;
    margin: 10px auto;
    min-height: 500px;
  }
  .main-content-menu {
    width: 30%;
    text-align: center;
  }
  .main-content-con{
    width: 60%;
    text-align: center;
  }
  .main-content-menu,.main-content-con{
    border: 1px solid #EBEBEB;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(6, 10, 29, 0.04);
    background: #fff;
    margin: 10px 20px;
    /*display: inline;*/
  }

  .teacher-navigation {
    margin: 0 auto;
    width: 80%;
  }
  .teacher-navigation:after {
    content: none;
  }
</style>
