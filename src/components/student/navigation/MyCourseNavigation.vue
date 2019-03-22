<template>
  <Menu class="student-navigation"  active-name="1-1" :open-names="['1']">

    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-cog" />
        2018-Spring
      </template>
      <!--<MenuItem name="1-1">数据库</MenuItem>-->
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-cog" />
        2018-Autumn
      </template>
      <MenuItem name="2-1">算法</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-cog" />
        2019-Spring
      </template>
      <MenuItem name="3-1">计算机网络</MenuItem>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-cog" />
        2019-Autumn
      </template>
      <MenuItem name="4-1">微积分</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
    export default {
        name: "MycourseNavigation"
    }
</script>

<style scoped>

</style>
