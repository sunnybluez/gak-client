<template>
  <Layout class="main-content">
    <Sider style="width: 260px;min-width:0px;max-width: 1000px;flex:none;padding: 5px" class="main-content-menu" hide-trigger>
      <Menu class="teacher-navigation" :open-names="['1']">

        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-book" />
            通选列表
          </template>
          <router-link :to="{path:'/studentHome/selectCourse/select',query:{term:'SPRING2019'}}"><MenuItem name="1-1"><p>2019-Spring</p></MenuItem></router-link>
          <!--<MenuItem name="1-2"><p>2018-Autumn</p></MenuItem>-->
          <!--<MenuItem name="1-3"><p>2018-Spring</p></MenuItem>-->

        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-book" />
            补选列表
          </template>
          <router-link :to="{path:'/studentHome/selectCourse/reelect',query:{term:'SPRING2019'}}"><MenuItem name="2-1"><p>2019-Spring</p></MenuItem></router-link>
          <!--<MenuItem name="2-2"><p>2018-Autumn</p></MenuItem>-->
          <!--<MenuItem name="2-3"><p>2018-Spring</p></MenuItem>-->
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-book" />
            选课结果/退课
          </template>
          <router-link :to="{path:'/studentHome/selectCourse/result',query:{term:'SPRING2019'}}"><MenuItem name="3-1"><p>2019-Spring</p></MenuItem></router-link>
          <!--<MenuItem name="3-2"><p>2018-Autumn</p></MenuItem>-->
          <!--<MenuItem name="3-3"><p>2018-Spring</p></MenuItem>-->
        </Submenu>
      </Menu>
    </Sider>
    <Content class="main-content-con" >
      <router-view name="content" class="main-con"></router-view>
    </Content>
  </Layout>

</template>

<script>
    export default {
        name: "SeOReCourseNavgation"
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
  .main-con{
    width: 90%;
    margin:15px auto;
  }
</style>
