<template>
<div class="main-con">
  <!--<Row :gutter="16">-->

    <div style="width: 80%">     <p>创建的课程</p> <Table :columns="columnCreateWaiting" :data="dataCreateWaiting" class="table"></Table>
    </div>
    <div style="width: 80%" >  <p>发布的课程</p> <Table :columns="columnReleaseWaiting" :data="dataReleaseWaiting" ></Table>
    </div>
  <!--</Row>-->

  <div style="width: 80%">      <p>通选中的课程</p>
    <Table :columns="columnCourseGeneral" :data="dataCourseGeneral"></Table>
  </div>
  <div style="width: 80%;">
    <p>补选中的课程</p>
    <Table :columns="columnCourseReelect" :data="dataCourseReelect"></Table>
  </div>
<div style="width: 80%">
  <p>正式进行的课程</p>
  <Table :columns="columnCourseBegin" :data="dataCourseBegin"></Table>
</div>

</div>
</template>

<script>
  import {getAllApprovingCCHttp,getAllApprovingCRHttp,getAllGeneralCRHttp,getAllReelectCRHttp,getAllBeginCRHttp,beginClassHttp,officialBeginClassHttp} from "../../../../axios/teacherRequest";
    export default {
        name: "CourseStateManage",
      data () {
        return {
          columnCreateWaiting: [
            {
              title:'课程Id',
              key:"id"
            },
            {
              title: '课程名',
              key: 'name'
            },
            {
              title: '审批状态',
              key: 'approveState'
            }
          ],
          dataCreateWaiting: [
            // {
            //   name: '数据库',
            //   id:1,
            //   approveState:"WAITING"
            // },
          ],

          columnReleaseWaiting: [
            {
              title:'课程Id',
              key:"id"
            },
            {
              title: '课程名',
              key: 'name'
            },
            {
              title: '审批状态',
              key: 'approveState'
            }
          ],
          dataReleaseWaiting: [
            // {
            //   name: '数据库',
            //   id:1,
            //   approveState:"WAITING"
            // },
          ],

          columnCourseGeneral: [
            {
              title:'课程Id',
              key:"id"
            },
            {
              title: '课程名',
              key: 'name'
            },
            {
              title: '限选',
              key: 'limitNum'
            },
            {
              title: '已选',
              key: 'selectNum'
            },
            {
              title: '操作',
              key: 'action',
              width: 140,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small',

                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        // console.log(event);
                        this.beginClass(params.index)
                      }
                    }
                  }, '结束初选')
                ]);
              }
            }
          ],
          dataCourseGeneral: [
            // {
            //   name: '数据库',
            //   id:1,
            //   limitNum:0,
            //   selectNum:0
            // },
          ],

          columnCourseReelect: [
            {
              title:'课程Id',
              key:"id"
            },
            {
              title: '课程名',
              key: 'name'
            },
            {
              title: '限选',
              key: 'limitNum'
            },
            {
              title: '已选',
              key: 'selectNum'
            },
            {
              title: '操作',
              key: 'action',
              width: 140,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small',

                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        // console.log(event);
                        this.officialBeginClass(params.index)
                      }
                    }
                  }, '结束补选')
                ]);
              }
            }
          ],
          dataCourseReelect: [
            // {
            //   name: '数据库',
            //   id:1,
            //   limitNum:0,
            //   selectNum:0
            // },
          ],
          columnCourseBegin: [
            {
              title:'课程Id',
              key:"id"
            },
            {
              title: '课程名',
              key: 'name'
            },
            {
              title: '选课人数',
              key: 'selectNum'
            }
          ],
          dataCourseBegin: [
            // {
            //   name: '数据库',
            //   id:1,
            //   selectNum:"100"
            // },
          ]
        }
      },
      mounted(){
        let teacherId = this.$store.getters.getUser.id;
        getAllApprovingCCHttp(teacherId).then(data=>{
          this.dataCreateWaiting = data;
        }).catch(err=>{
          this.$Message.error(err);
        })
        getAllApprovingCRHttp(teacherId).then(data=>{
          this.dataReleaseWaiting = data;
        }).catch(err=>{
          this.$Message.error(err);
        })
        getAllGeneralCRHttp(teacherId).then(data=>{
          this.dataCourseGeneral = data;
        }).catch(err=>{
          this.$Message.error(err);
        })
        getAllReelectCRHttp(teacherId).then(data=>{
          this.dataCourseReelect = data;
        }).catch(err=>{
          this.$Message.error(err);
        })
        getAllBeginCRHttp(teacherId).then(data=>{
          this.dataCourseBegin = data;
        }).catch(err=>{
          this.$Message.error(err);
        })

      },
      methods:{
        beginClass(index) {
          let releaseCourseId = this.dataCourseGeneral[index].id;
          beginClassHttp(releaseCourseId).then(data=>{
            this.$Message.success(data);
            let general = this.dataCourseGeneral.splice(index,1)
            this.dataCourseReelect.push(general[0]);
          }).catch(err=>{
            this.$Message.error(err);
          })
        },
        officialBeginClass(index) {
          let releaseCourseId = this.dataCourseReelect[index].id;
          officialBeginClassHttp(releaseCourseId).then(data=>{
            this.$Message.success(data);
            let begin = this.dataCourseReelect.splice(index,1)
            this.dataCourseBegin.push(begin[0]);
          }).catch(err=>{
            this.$Message.error(err);
          })

        }
      }
    }
</script>

<style scoped>
  .main-con {
    width: 98%;
    margin: 20px auto;
  }
  .main-con>div{
    margin:25px auto;
  }



</style>
