<template>
  <div id="app">

    <router-view name="authenticationPage"></router-view>
    <router-view name="homePage"></router-view>
    <router-view name="introduction" class="left"></router-view>
    <router-view name="login" class="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.left {
  float: left;
  margin-left: 10%;
  width: 40%;
}
.right{
  float: left;
  width: 40%;
}
  /*body{*/
    /*background: url("./assets/背景.png") no-repeat  left bottom;*/
  /*}*/
</style>
