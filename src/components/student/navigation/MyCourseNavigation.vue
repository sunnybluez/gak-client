<template>
  <Layout class="main-content">
    <Sider style="width: 260px;min-width:0px;max-width: 1000px;flex:none;padding: 5px" class="main-content-menu" hide-trigger>
      <Menu class="student-navigation"  :open-names="['1']">

        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-cog" />
            2019-Spring
          </template>
          <MenuItem v-for="(value, key, index) in courseList1"
                    :name="1-(index+1)"
                    :key="index">{{key}} - {{value}}</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-cog" />
            2018-Autumn
          </template>
          <MenuItem v-for="(value, key, index) in courseList2"
                    :name="2-(index+1)"  :key="index">
            {{key}} - {{value}}
          </MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-cog" />
            2018-Spring
          </template>
          <MenuItem v-for="(value, key, index) in courseList3"
                    :name="3-(index+1)"  :key="index">
            {{key}} - {{value}}

          </MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Content class="main-content-con" >
      <router-view name="content"></router-view>
    </Content>
  </Layout>

</template>

<script>
  import {getAllMyOnCourseByTerm} from "../../../axios/studentRequest";
    export default {
        name: "MycourseNavigation",
      data(){
        return{
          courseList1:{},
          courseList2:{},
          courseList3:{}

        }
      },
      mounted(){
        getAllMyOnCourseByTerm(this.$store.getters.getUser.id, "SPRING2019").then(data=>{
          this.courseList1 = data;
        }).catch(err=>{this.$Message.warning(err);});
        getAllMyOnCourseByTerm(this.$store.getters.getUser.id, "AUTUMN2018").then(data=>{
          this.courseList2 = data;
        }).catch(err=>{this.$Message.warning(err);});
        getAllMyOnCourseByTerm(this.$store.getters.getUser.id, "SPRING2018").then(data=>{
          this.courseList3 = data;
        }).catch(err=>{this.$Message.warning(err);});
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

  .student-navigation {
    margin: 0 auto;
    width: 80%;
  }
  .student-navigation:after {
    content: none;
  }
</style>
