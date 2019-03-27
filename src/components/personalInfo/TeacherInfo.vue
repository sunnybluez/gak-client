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
      <FormItem label="Sex" prop="sex">
        <RadioGroup v-model="formValidate.sex">
          <Radio label="男">男</Radio>
          <Radio label="女">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {getTeacherInfoHttp, updateTeacherInfoHttp} from "../../axios/teacherRequest";
  export default {
    name:'StudentInfo',
    data () {
      return {
        formValidate: {
          name: '',
          email: '',
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
            updateTeacherInfoHttp(this.formValidate.id,this.formValidate.name,this.formValidate.age,this.formValidate.sex,this.formValidate.phoneNum).then(data=>{
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

    },
    mounted(){
      let teacherId = this.$store.getters.getUser.id;
      getTeacherInfoHttp(teacherId).then(data=>{
        this.formValidate.id = teacherId;
        this.formValidate.email = data.email;
        this.formValidate.name = data.name;
        this.formValidate.sex = data.sex;
        this.formValidate.age = data.age;
        this.formValidate.phoneNum = data.phoneNum;
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
