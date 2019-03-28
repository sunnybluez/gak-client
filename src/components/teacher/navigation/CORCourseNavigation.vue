<template>
  <Layout class="main-content">
    <Sider style="width: 260px;min-width:0px;max-width: 1000px;flex:none;padding: 5px" class="main-content-menu" hide-trigger>
      <!--<router-view name="navigation" class="navigation"></router-view>-->
      <Menu  class="navigation" active-name="1-1" :open-names="['1']">

        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-cog" />
            C/R  2019
          </template>
          <router-link to="/teacherHome/corCourse/createCourse">
            <MenuItem name="1-1">创建课程</MenuItem>
            </router-link>
          <router-link to="/teacherHome/corCourse/releaseCourse">
            <MenuItem name="1-2">发布课程</MenuItem>
          </router-link>
          <router-link to="/teacherHome/corCourse/courseStateManage">
            <MenuItem name="1-3">课程状态管理</MenuItem>
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
    export default {
        name: "CORCourseNavigation"
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

  .navigation {
    margin: 0 auto;
    width: 80%;
  }
  .navigation:after {
    content: none;
  }


</style>
