<template>
    <div class="main-con">

      <div class="content-item">
        <p>等待开课</p>
        <Table :columns="columnsSelected" :data="dataSelected"></Table>
      </div>
      <div class="content-item">
        <p>落选课程</p>
        <Table :columns="columnsFailed" :data="dataFailed" ></Table>
      </div>

      <div class="content-item">
        <p>选中课程</p>
        <Table :columns="columnsOngoing" :data="dataOngoing"></Table>
      </div>




    </div>

</template>

<script>
  import expandRow from './tableExpand/table-expand.vue';
  import {getAllSelectedCourseHttp,getAllFailedCourseHttp,getAllOngoingCourseHttp} from '../../../../axios/studentRequest';
  import {reelectCourseHttp,dropCourseHttp} from "../../../../axios/studentRequest";
    export default {
        name: "MySelectionAndResult",
      components: { expandRow },
      data(){
          return{
            columnsSelected: [
              {
                type: 'expand',
                width: 50,
                render: (h, params) => {
                  return h(expandRow, {
                    props: {
                      row: params.row
                    }
                  })
                }
              },
              {
                title: '课程名',
                key: 'name'
              },
              {
                title: '教师',
                key: 'teacher'
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
                        type: 'warning',
                        size: 'small',

                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          // console.log(event);
                          this.dropSelectCourse(params.index)
                        }
                      }
                    }, '退选')
                  ]);
                }
              }
            ],
            dataSelected: [
              {
                // name: '数据库',
                // teacher: "John Smith",
                // limitNum: 200,
                // selectNum: 280,
                // description: '这是一门数据库',
                // id:1
              },
            ],
            columnsFailed: [
              {
                type: 'expand',
                width: 50,
                render: (h, params) => {
                  return h(expandRow, {
                    props: {
                      row: params.row
                    }
                  })
                }
              },
              {
                title: '课程名',
                key: 'name'
              },
              {
                title: '教师',
                key: 'teacher'
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
                          this.reelectCourse(params.index)
                        }
                      }
                    }, '补选')
                  ]);
                }
              }
            ],
            dataFailed: [
              {
                // name: '数据库',
                // teacher: "John Smith",
                // limitNum: 200,
                // selectNum: 280,
                // description: '这是一门数据库1',
                // id:1
              },
            ],
            columnsOngoing: [
              {
                type: 'expand',
                width: 50,
                render: (h, params) => {
                  return h(expandRow, {
                    props: {
                      row: params.row
                    }
                  })
                }
              },
              {
                title: '课程名',
                key: 'name'
              },
              {
                title: '教师',
                key: 'teacher'
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
                        type: 'warning',
                        size: 'small',

                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          // console.log(event);
                          this.dropOngoingCourse(params.index)
                        }
                      }
                    }, '退课')
                  ]);
                }
              }
            ],
            dataOngoing: [
              {
                // name: '数据库',
                // teacher: "John Smith",
                // limitNum: 200,
                // selectNum: 280,
                // description: '这是一门数据库2',
                // id:1
              },
            ],
          }
      },
      mounted(){
        let term = this.$route.query.term;
        let studentId = this.$store.getters.getUser.id;
        getAllSelectedCourseHttp(studentId, term).then(data => {
          this.dataSelected = data;
        }).catch(err => {        this.$Message.warning(err);});
        getAllFailedCourseHttp(studentId, term).then(data => {
          this.dataFailed = data;
        }).catch(err => {        this.$Message.warning(err);});
        getAllOngoingCourseHttp(studentId, term).then(data => {
          this.dataOngoing = data;
        }).catch(err => {        this.$Message.warning(err);});
      },
      methods:{
        dropSelectCourse(index) {
          let studentId = this.$store.getters.getUser.id;
          let releaseCourseId = this.dataSelected[index].id;
          dropCourseHttp(studentId,releaseCourseId).then((data)=>{
            this.$Message.success(this.dataSelected[index].name+data)
            this.dataSelected.splice(index, 1);
            console.log(data);
          }).catch((error)=>{
            this.$Message.error(error);
          })
        },
        reelectCourse(index) {
          let studentId = this.$store.getters.getUser.id;
          let releaseCourseId = this.dataFailed[index].id;
          reelectCourseHttp(studentId,releaseCourseId).then((data)=>{
            this.$Message.success(this.dataFailed[index].name+data)
            let reelect = this.dataFailed.splice(index, 1);
            this.dataOngoing.push(reelect[0]);
            console.log(data);
          }).catch((error)=>{
            this.$Message.error(error);
          })
        },
        dropOngoingCourse(index) {
          let studentId = this.$store.getters.getUser.id;
          let releaseCourseId = this.dataOngoing[index].id;
          dropCourseHttp(studentId,releaseCourseId).then((data)=>{
            this.$Message.success(this.dataOngoing[index].name+data)
            this.dataOngoing.splice(index, 1);
            console.log(data);
          }).catch((error)=>{
            this.$Message.error(error);
          })
        }


      }

    }
</script>

<style scoped>
  /*.main-con{*/
    /*width: 90%;*/
  /*}*/
.content-item{
  margin-top: 25px;
}
</style>
