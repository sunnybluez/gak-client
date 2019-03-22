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

              <router-link to="/" style="display: inline-block">
                <MenuItem name="1">
                  <Icon type="ios-book" />
                  <a style="color: black">创建/发布课程</a>
                </MenuItem>
              </router-link>
              <router-link to="/" style="display: inline-block">
                <MenuItem name="2">

                  <Icon type="ios-person" />
                  <a style="color: black">课程管理</a>
                </MenuItem>
              </router-link>
              <router-link to="/e" style="display: inline-block">
                <MenuItem name="3">
                  <Icon type="ios-people" />
                  论坛
                </MenuItem>
              </router-link>
              <router-link to="/" style="display: inline-block">
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
                  <DropdownItem>登出</DropdownItem>

                </DropdownMenu>
              </Dropdown>

            </div>
          </div>


        </Menu>
      </Affix>

    </Header>
    <Layout class="main-content">
      <Sider style="width: 260px;min-width:0px;max-width: 1000px;flex:none;padding: 5px" class="main-content-menu" hide-trigger>
        <router-view name="navigation" class="navigation"></router-view>
      </Sider>
      <Content class="main-content-con" >
        <div>
          sadasd
        </div>
      </Content>
    </Layout>
    <Footer >
      <div class="footer">
        @Developer  ZWZ
      </div>
    </Footer>

  </Layout>
</template>

<script>
    export default {
        name: "TeacherHome"
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
