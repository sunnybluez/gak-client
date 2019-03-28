<template>
<div>
  <Affix>
    <Menu mode="horizontal" :theme="'light'" active-name="2">
      <h1 style="float: left;margin-left: 25px">Gak TSS</h1>
      <!--<MenuItem name="1">-->
      <!--<img src="../../assets/背景.png" style="width: 60px;float:left; margin: 10px 10px">-->

      <!--</MenuItem>-->

      <div class="person-div">
        <div class="person-div-item">
          <router-link to="/managerHome/approve" style="display: inline-block">
            <MenuItem name="2">

              <Icon type="ios-person" />
              <p style="display: inline">课程管理</p>
            </MenuItem>
          </router-link>
          <router-link to="/managerHome/managerStatistics" style="display: inline-block">
            <MenuItem name="3">
              <Icon type="ios-pie" />
              统计信息
            </MenuItem>
          </router-link>

        </div>


        <div class="person-div-item">
          <Dropdown>
            <Avatar size="large">{{name}}</Avatar>
            <DropdownMenu slot="list">

              <DropdownItem >
                <p @click="logOut">登出</p>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

        </div>
      </div>


    </Menu>
  </Affix>
  <router-view name="detail-nav"></router-view>
</div>

</template>

<script>
    export default {
        name: "ManagerHome",
      data(){
          return{
            name:"manager"
          }
      },
      methods:{
        logOut() {
          // console.log(11)
          this.$store.dispatch("setUser", {});
          this.$store.dispatch("setToken", "");
          this.$router.push("/login");
        }
      },
    }
</script>

<style scoped>
  .person-div {
    display: flex;
    float: right;
    margin-right: 30px;
  }
  .person-div-item{
    display: inline;
    margin: 0 15px;
    cursor: default;
  }
  .header-all {
    background: #fff;
    padding: 0px;
    height: auto;
    margin-bottom: 15px;
  }
  .main-body {
    background: #fff;
    text-align: center;

  }
</style>
