<template>
  <Row>

  <Col class="demo-spin-col" >
    <Spin fix>
      <Icon type="ios-loading" size=100 class="demo-spin-icon-load"></Icon>
      <div style="font-size: 20px">正在验证...</div>
    </Spin>
  </Col>

  </Row>
</template>

<script>
  import {authenticateHttp} from "../../axios/axiosRequest"

    export default {
        name: "Authentication",
      mounted() {
        authenticateHttp(this.$route.query.token).then(data=>{
          setTimeout(() => {
            this.$Message.success(data);
          }, 500);
          setTimeout(() => {
            this.$router.push("/login")
          }, 2500);

        }).catch(err=>{
          console.log(err);
        })
      }
    }
</script>

<style scoped>
  .demo-spin-icon-load {
    margin-top: 400px;

    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    /*border: 1px solid #eee;*/
  }
</style>
