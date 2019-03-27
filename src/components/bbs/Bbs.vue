<template>
    <div>
      <Divider orientation="left">论坛</Divider>
      <Button type="primary" @click="modal1=true" style="width: 40%">发帖</Button>
      <div class="post-div" >
        <div class="post-single" v-for="(value,index) in postList" :key="index" @click="openPost(value)">
          <Card >
            <p style="text-align: initial" slot="title">{{value.title}}</p>
            <p style="text-align: initial;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{{value.content}}</p>
            <p style="font-size: 5px;float: right">{{value.date}}</p>
          </Card>
        </div>

      </div>
      <Modal
        v-model="modal1"
        title="新建帖子"
        @on-ok="addPost"
        >
        <Input  style="" v-model="newPostTitle" placeholder="标题..." style="margin-bottom: 10px;width: 50%" />
        <Input v-model="newPostContent" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="正文..." />

      </Modal>
      <Modal v-model="modal11" fullscreen :title="currentPost.title">
        <div style="width: 50%;margin: 0 auto">
          <Divider>{{currentPost.title}}</Divider>

          <p style="font-size: 19px">{{currentPost.content}}</p>
          <p style="float: right;font-size: 15px">author: {{currentPost.authorEmail}}    {{currentPost.date}}</p>

          <Divider />
          <Divider />
          <Divider orientation="left">Reply</Divider>
          <div v-for="(value,index) in currentReplyList" :key="index">
            <p style="font-size: 19px">{{value.content}}</p>
            <p style="float: right;font-size: 15px">author: {{value.authorEmail}}    {{value.date}}</p>
            <Divider />
            <Divider />
          </div>
          <Affix :offset-bottom="50">
            <div style="background-color: whitesmoke;padding: 5px">
              <Input v-model="currentReplyEdit" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
              <Button type="primary" @click="addReply" style="width: 100%;margin: 20px auto;">回帖</Button>
            </div>
          </Affix>
        </div>
      </Modal>
    </div>
</template>

<script>
  import {getCourseCreateId,getPostListByCCIdHttp,getReplyListByPostIdHttp,addPostHttp,addReplyHttp} from "../../axios/publicResourceRequest";

  export default {
        name: "bbs",
      props:["courseId"],
      data(){
          return{
            courseCreateId:"",
            email: "",
            postList:[],

            newPostTitle: "",
            newPostContent: "",
            modal1: false,

            modal11:false,
            currentPost:{},
            currentReplyList:[],
            currentReplyEdit:""


          }

      },
      methods:{
        init(){
          // console.log(this.courseId);
          this.email = this.$store.getters.getUser.email;
          // this.initCourseCreateId();
          getCourseCreateId(this.courseId).then(data=>{
            this.courseCreateId = data;
            console.log("ccid",data)
            return getPostListByCCIdHttp(data);
          }).then(data=>{
            console.log("postList", data);
            this.postList = data;
          })


          this.newPostTitle = "";
          this.newPostContent = "";
          this.modal1 = false;
        },
        addPost () {
          if(this.newPostTitle !=""&&this.newPostContent!=""){
            addPostHttp(this.courseCreateId, this.email, this.newPostTitle, this.newPostContent).then(data=>{
              this.$Message.success(data);
            }).catch(er=>{
              this.$Message.error(er);
            }).finally(()=>{
              this.init();
            })

          }else {
            this.$Message.warning("请填写完整信息")
          }
        },

        openPost(post){
          this.currentPost = post;
          this.modal11 = true;
          getReplyListByPostIdHttp(post.id).then(data=>{
            this.currentReplyList = data;
            console.log(this.currentReplyList)
          }).catch(err=>{
            this.$Message.error(err);
          })
        },
        addReply(){
          let email = this.$store.getters.getUser.email;
          addReplyHttp(this.currentPost.id, email, this.currentReplyEdit).then(data=>{
            this.$Message.success(data);
            this.openPost(this.currentPost);
          })
        }

      },
      mounted(){
        this.init();
      },
      watch:{
        "$route":function () {
          this.init();
        }
      }

    }
</script>

<style scoped>
.post-single {
  width: 40%;
  margin: 10px auto;
  cursor: pointer;
}
</style>
