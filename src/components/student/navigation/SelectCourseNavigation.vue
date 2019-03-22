<template>
  <Menu class="student-navigation"  active-name="1-1" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-book" />
        学期选课
      </template>
      <MenuItem name="1-1">2018-Spring</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-book" />
        初选结果
      </template>
      <MenuItem name="2-1">2018-Spring</MenuItem>
    </Submenu>
  </Menu>

</template>

<script>
    export default {
        name: "StudentNavigation"
    }
</script>

<style scoped>

</style>
