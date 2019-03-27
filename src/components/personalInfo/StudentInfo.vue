<template>
  <div class="main-con">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="Id" prop="id" >
        <Input v-model="formValidate.id"  disabled></Input>
      </FormItem>
      <FormItem label="E-mail" prop="email" >
      <Input v-model="formValidate.email" disabled></Input>
      </FormItem>
      <FormItem label="Name" prop="name">
        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
      </FormItem>
      <FormItem label="PhoneNumber" prop="phoneNum">
      <Input v-model="formValidate.phoneNum" placeholder="Enter your PhoneNumber"></Input>
    </FormItem>
      <FormItem label="Age" prop="age">
      <Input v-model="formValidate.age" placeholder="Enter your age"></Input>
    </FormItem>

      <FormItem label="Grade" prop="grade">
        <Select v-model="formValidate.grade" placeholder="Select your grade">
          <Option value="大一">大一</Option>
          <Option value="大二">大二</Option>
          <Option value="大三">大三</Option>
          <Option value="大四">大四</Option>
        </Select>
      </FormItem>
      <FormItem label="Sex" prop="sex">
        <RadioGroup v-model="formValidate.sex">
          <Radio label="男">男</Radio>
          <Radio label="女">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        <Button type="error" @click="modal1=true" style="margin-left: 8px">注销</Button>
      </FormItem>
    </Form>
    <Modal
      v-model="modal1"
      title="您确定要注销吗"
      @on-ok="cancelAccount">
      <p>注销后你还可以重新验证激活原先账号</p>
    </Modal>
  </div>
</template>
<script>
  import {getStudentInfoHttp, updateStudentInfoHttp,cancelAccountHttp} from "../../axios/studentRequest";
  export default {
    name:'StudentInfo',
    data () {
      return {
        modal1:false,
        formValidate: {
          name: '',
          email: '',
          grade: '',
          sex: '',
          id:"",
          phoneNum: "",
          age:""
        },
        ruleValidate: {
          phoneNum: [
            { required: true, message: 'PhoneNumber cannot be empty', trigger: 'blur' },
          ],
          age: [
            { required: true, message: 'age cannot be empty', trigger: 'blur' },
          ],
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          grade: [
            { required: true, message: 'Please select the grade', trigger: 'change' }
          ],
          sex: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ],


        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            updateStudentInfoHttp(this.formValidate.id,this.formValidate.name,this.formValidate.age,this.formValidate.sex,this.formValidate.phoneNum,this.formValidate.grade).then(data=>{
              this.$Message.success(data);
            }).catch(err=>{
              this.$Message.error(err);
            })

          } else {
            this.$Message.error('清将信息补充完整');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      cancelAccount(){
        let studentId = this.$store.getters.getUser.id;
        cancelAccountHttp(studentId).then(data=>{
          this.$Message.success(data);
          this.$router.push("/")
        }).catch(error=>{
          this.$Message.error(error);
        })
      }

    },
    mounted(){
      let studentId = this.$store.getters.getUser.id;
      getStudentInfoHttp(studentId).then(data=>{
        this.formValidate.id = studentId;
        this.formValidate.email = data.email;
        this.formValidate.name = data.name;
        this.formValidate.sex = data.sex;
        this.formValidate.age = data.age;
        this.formValidate.phoneNum = data.phoneNum;
        this.formValidate.grade = data.grade;
        console.log(data.sex)

      }).catch(err=>{
        this.$Message.error(err);
      })
    }
  }
</script>
<style scoped>
  .main-con{
    width: 40%;
    margin: 10px auto;
  }
</style>
