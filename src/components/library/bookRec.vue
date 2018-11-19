<template>
  <div class="bookRec">
    <el-tabs type="card">
      <el-tab-pane label="我的荐购">
        <egrid class="egrid"
          stripe
          maxHeight="500"
          :data="tableData"
          :columns="columns">
        </egrid>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: "ISBN",
          prop: "ISBN"
        },
        {
          label: "题名",
          prop: "tm"
        },
        {
          label: "著者",
          prop: "zz"
        },
        {
          label: "出版社",
          prop: "cbs"
        },
        {
          label: "荐购册数",
          prop: "jgcs"
        },
        {
          label: "荐购理由",
          prop: "jgly"
        }
      ],
      tableData: [
        {
          ISBN: "32323232",
          tm: "王小虎1",
          zz: "王小虎1",
          cbs: "王小虎1",
          jgcs: "rwerew",
          jgly: "fsdfsd"
        },
        {
          ISBN: "32323232",
          tm: "王小虎",
          zz: "王小虎",
          cbs: "王小虎",
          jgcs: "rwerew",
          jgly: "fsdfsd"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.bookRec{
        
  .el-tabs--border-card{
    border: none;
  }
  .el-tabs--border-card>.el-tabs__header{
    border-bottom: 1px solid #eee;
  }
  .el-tabs {
    .el-tabs__header{
      border: none;
      .el-tabs__item{
        color: red;
      }
    }
  }
  
  .el-tabs__item.is-active{
    border-right-color: #eee;
    border-left-color: #eee;
  }
  .el-table td, .el-table th.is-leaf{
    border: none;
  } 
}
</style>
