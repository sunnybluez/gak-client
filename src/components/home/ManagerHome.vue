<template>
  <Affix>
    <Menu mode="horizontal" :theme="'light'" active-name="1">

      <!--<MenuItem name="1">-->
      <!--<img src="../../assets/背景.png" style="width: 60px;float:left; margin: 10px 10px">-->
      <h1 style="float: left;margin-left: 25px">Gak TSS</h1>
      <!--</MenuItem>-->

      <div class="person-div">
        <Submenu name="4" class="menuItem person-div-item" >
          <template slot="title">
            <Icon type="ios-stats"/>
            个人信息
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>

        <div class="person-div-item">
          <Dropdown>
            <Avatar size="large" >M</Avatar>
            <DropdownMenu slot="list">
              <DropdownItem>个人信息</DropdownItem>
              <DropdownItem>登出</DropdownItem>

            </DropdownMenu>
          </Dropdown>

        </div>
      </div>


    </Menu>
  </Affix>

</template>

<script>
    export default {
        name: "ManagerHome"
    }
</script>

<style scoped>

</style>
