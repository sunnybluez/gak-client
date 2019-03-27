<template>
  <div class="main-con">
    <Table :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
  import expandRow from "./tableExpand/table-expand"
  import {getAllCanReelectCourseHttp, reelectCourseHttp} from "../../../../axios/studentRequest";
  export default {
    name: "ReelectCourse",
    components: { expandRow },
    data () {
      return {
        columns: [
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
        data: [
          // {
          //   name: '数据库',
          //   teacher: "John Smith",
          //   limitNum: 200,
          //   selectNum: 280,
          //   description: '这是一门数据库',
          //   id:1
          // },
        ]
      }
    },
    methods: {
      reelectCourse(index){
        let studentId = this.$store.getters.getUser.id;
        let releaseCourseId = this.data[index].id;

        reelectCourseHttp(studentId,releaseCourseId).then((data)=>{
          this.$Message.success(this.data[index].name+data)
          this.data.splice(index, 1);
          console.log(data);
        }).catch((error)=>{
          this.$Message.error(error);
        })

      }
    },
    mounted() {
      let term = this.$route.query.term;
      let studentId = this.$store.getters.getUser.id;
      getAllCanReelectCourseHttp(studentId,term).then((data)=>{
        this.data = data;
      }).catch((err)=>{
        this.$Message.warning(err);
      })
    },

  }
</script>

<style scoped>

</style>
