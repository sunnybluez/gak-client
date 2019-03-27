<template>
    <div>
      <Tabs v-model="currentTab">
        <TabPane label="课件" name="courseWare" icon="ios-book">
          <Divider orientation="left">以往课件</Divider>
          <div   style="width: 80%;margin: 25px auto">

            <a style="display: block;margin: 5px auto" v-for="(value,index) in courseWareList" :key="index"  :href="'http://localhost:8080/'+ value.path" target="_blank">{{value.name}}</a>
          </div>
        </TabPane>
        <TabPane label="论坛" name="bbs" icon="ios-people"><Bbs :courseId="this.$route.query.courseReleaseId"></Bbs></TabPane>
      </Tabs>
    </div>
</template>

<script>
  import  {getCourseWareListHttp} from  "../../../../axios/publicResourceRequest"
  import Bbs from "../../../bbs/Bbs";

  export default {
        name: "partialCourse",
    components: {Bbs},
    data(){
        return{
          courseReleaseId: 0,
          courseInfo:{},
          currentTab:"courseWare",
          courseWareList:[]
        }
      },
      methods:{
        initCourseInfo(){
          this.courseReleaseId = this.$route.query.courseReleaseId;
          this.currentTab = "courseWare";
          this.courseInfo = {};
          this.initCourseWare();
        },
        initCourseWare(){

          getCourseWareListHttp(this.courseReleaseId).then(data=>{
            this.courseWareList = data;
          }).catch(err=>{
            this.$Message.error(err);
          });

        },
      },
      mounted(){
        this.initCourseInfo();
      },
      watch:{
        "$route":function () {
          this.initCourseInfo();
        }
      }
    }
</script>

<style scoped>

</style>
