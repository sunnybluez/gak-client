<template>

    <Layout class="main-body">
      <Header class="header-all">
        <Affix>
          <Menu mode="horizontal" :theme="'light'" active-name="2">
            <h1 style="float: left;margin-left: 25px">Gak TSS</h1>
            <!--<MenuItem name="1">-->
            <!--<img src="../../assets/背景.png" style="width: 60px;float:left; margin: 10px 10px">-->

            <!--</MenuItem>-->

            <div class="person-div">
              <div class="person-div-item">

                <router-link to="/studentHome/selectCourse" style="display: inline-block">
                  <MenuItem name="1">
                    <Icon type="ios-book" />
                    <p style="display: inline">通补选/退课</p>
                  </MenuItem>
                </router-link>
                <router-link to="/studentHome/myCourse" style="display: inline-block">
                  <MenuItem name="2">

                    <Icon type="ios-person" />
                    <p style="display: inline">我的课程</p>
                  </MenuItem>
                </router-link>
                <router-link to="/studentHome/selectCourse" style="display: inline-block">
                  <MenuItem name="3">
                    <Icon type="ios-people" />
                    论坛
                  </MenuItem>
                </router-link>
                <router-link to="/studentHome/selectCourse" style="display: inline-block">
                  <MenuItem name="4">
                    <Icon type="ios-pie" />
                    统计信息
                  </MenuItem>
                </router-link>

              </div>


              <div class="person-div-item">
                <Dropdown>
                  <Avatar size="large">S</Avatar>
                  <DropdownMenu slot="list">
                    <DropdownItem>个人信息</DropdownItem>
                    <DropdownItem >
                      <p @click="logOut">登出</p>
                    </DropdownItem>

                  </DropdownMenu>
                </Dropdown>

              </div>
            </div>


          </Menu>
        </Affix>

      </Header>
      <router-view name="student-all-nav" ></router-view>
      <Footer >
        <div class="footer">
          @Developer  ZWZ
        </div>
      </Footer>

    </Layout>

</template>

<script>

    export default {
        name: "StudentHome",

      data() {
          return{

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
      mounted(){
          console.log(this.$store.getters.getUser.email)
          console.log(this.$store.getters.getUser.id)
      }
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
