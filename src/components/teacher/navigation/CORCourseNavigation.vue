<template>
  <Menu  active-name="1-1" :open-names="['1']">

    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-cog" />
          C/R
      </template>
      <MenuItem name="1-1">创建课程</MenuItem>
      <MenuItem name="1-2">发布课程</MenuItem>
    </Submenu>

  </Menu>
</template>

<script>
    export default {
        name: "CORCourseNavigation"
    }
</script>

<style scoped>

</style>
