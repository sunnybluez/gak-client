<template>
  <Menu mode="horizontal" :theme="'light'" active-name="1">

    <!--<MenuItem name="1">-->
      <!--<img src="../../assets/背景.png" style="width: 60px;float:left; margin: 10px 10px">-->
      <h1 style="float: left;margin-left: 10px">Gak TSS</h1>
    <!--</MenuItem>-->

    <Submenu name="4" class="menuItem">
      <template slot="title">
        <Icon type="ios-stats" />
        个人信息
      </template>
      <MenuGroup title="使用" >
        <MenuItem name="3-1">新增和启动</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>

  </Menu>
</template>

<script>
  import {updateStudentInfoHttp} from "../../axios/axiosRequest";
    export default {
        name: "StudentHome",
      data() {
          return{

          }
      },
      methods:{

      },
      mounted(){
        updateStudentInfoHttp();
      }
    }
</script>

<style scoped>
  .menuItem{
    float: right;
  }
</style>
