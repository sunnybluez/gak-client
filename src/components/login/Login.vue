<template>
  <div >
    <div class="outer-wrap">
      <Tabs>
        <TabPane label="登录" icon="md-contact">
          <div class="login-panel">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" >
              <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username Email">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="identity">
                <RadioGroup v-model="formInline.identity">
                  <Radio label="teacher">Teacher</Radio>
                  <Radio label="student">Student</Radio>
                  <Radio label="manager">Manager</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleLogin('formInline')">Signin</Button>
              </FormItem>
            </Form>
          </div>
        </TabPane>
        <TabPane label="注册" icon="md-add-circle">
          <div class="register-panel">
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" >
              <FormItem prop="user">
                <Input type="text" v-model="formCustom.user" placeholder="Username Email">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formCustom.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="passwordCheck">
              <Input type="password" v-model="formCustom.passwordCheck" placeholder="Confirm Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
              <FormItem prop="identity">
                <RadioGroup v-model="formCustom.identity">
                  <Radio label="teacher">Teacher</Radio>
                  <Radio label="student">Student</Radio>
                </RadioGroup>
              </FormItem>
              <!--<FormItem label="Password" prop="password">-->
                <!--<Input type="password" v-model="formCustom.password"></Input>-->
              <!--</FormItem>-->
              <!--<FormItem label="Confirm" prop="passwordCheck">-->
                <!--<Input type="password" v-model="formCustom.passwordCheck"></Input>-->
              <!--</FormItem>-->
              <FormItem>
                <Button type="primary" @click="handleRegister('formCustom')">Register</Button>
                <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
              </FormItem>
            </Form>
          </div>
        </TabPane>
      </Tabs>


    </div>
  </div>


</template>

<script>
  import {loginHttp,registerHttp} from "../../axios/axiosRequest";

  export default {

  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.formCustom.passwordCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwordCheck');
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.formCustom.password) {
        callback(new Error('The two input passwords do not match!'));
      } else {
        callback();
      }
    };
    return {

      //登录数据
      formInline: {
        user: '',
        password: '',
        identity:''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ],
        identity: [
          { required: true, message: 'Please select identity', trigger: 'change' }
        ],
      },

      //注册数据
      formCustom: {
        user: '',
        password: '',
        passwordCheck: '',
        identity: ''
      },
      ruleCustom: {
        user: [
          { required: true, message: 'Please fill in the user', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ],
        passwordCheck: [
          { validator: validatePassCheck, trigger: 'blur' },
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ],
        identity: [
          { required: true, message: 'Please select identity', trigger: 'change' }
        ],
      }


    }
  },
  methods: {

    //登陆方法
    handleLogin(name) {

      this.$refs[name].validate((valid) => {
        if (valid) {
          loginHttp(this.formInline, this, this.storeVuex, this.setRouter);
        } else {
          this.$Message.warning("请补充完整信息");
        }
      })
      // this.$router.push("/home")

    },

    // //注册方法
    handleRegister (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          registerHttp(this.formCustom, this);
        } else {
          this.$Message.warning("请补充完整信息");
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    storeVuex(token,user){
      // console.log(1,user);
      this.$store.dispatch("setToken",token);
      this.$store.dispatch("setUser", user);
    },
    setRouter() {
      let identity = this.$store.getters.getUser.identity;
      console.log(identity);
      if (identity == "STUDENT") {
        this.$router.push("/studentHome")
      } else if (identity == "TEACHER") {
        this.$router.push("/teacherHome")
      } else if (identity == "MANAGER") {
        this.$router.push("/managerHome")
      }
    },



  },
  mounted(){
    // get('/user?ID=12345')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // console.log(window.sessionStorage)
    console.log(this.$store.getters.getToken);
    console.log(this.$store.getters.getUser);
    if (this.$store.getters.getToken) {

      // this.$router.push("/" + this.$store.getters.getUser.identity.toLowerCase() + "Home");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .outer-wrap {
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    box-shadow: 0 0 4px rgba(6, 10, 29, 0.04);
    padding: 16px;
    width: 400px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: white;
  }
  .login-panel{
    padding: 16px;
  }
  .register-panel{
    padding: 16px;
  }


</style>
