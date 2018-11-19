<template>
  <div>
    <egrid class="egrid"
      stripe
      maxHeight="500"
      :data="tableData"
      :columns-handler="columnsHandler"
      :columns="columns">
    </egrid>
  </div>
</template>

<script>
import Btn from "../TableComponent/cell-btn";
export default {
  data() {
    return {
      columns: [
        {
          label: "条形码",
          prop: "txm"
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
          label: "馆藏地点",
          prop: "gcdd"
        },
        {
          label: "状态",
          prop: "zt"
        },
        {
          label: "借出时间",
          prop: "jcsj"
        },
        {
          label: "应还时间",
          prop: "yhsj"
        }
      ],
      tableData: [
        {
          txm: "32323232",
          zz: "王小虎",
          gcdd: "王小虎",
          zt: "王小虎",
          jcsj: "2016-05-02",
          yhsj: "2016-05-02",
          tm: "上海市普陀区金沙江路 1518 弄",
          status: 1
        },
        {
          txm: "fsdfds45",
          zz: "王小虎",
          gcdd: "王小虎",
          zt: "王小虎",
          jcsj: "2016-05-02",
          yhsj: "2016-05-02",
          tm: "上海市普陀区金沙江路 1518 弄",
          status: 0
        }
      ]
    };
  },
  methods: {
    columnsHandler(cols) {
      return cols.concat({
        label: "操作",
        component: Btn,
        // listeners 可用于监听自定义组件内部 $emit 出的事件
        listeners: {
          "handle-click"(row) {
            console.log("row-edit", row);
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
