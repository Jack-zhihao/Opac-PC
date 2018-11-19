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
import CancelBtn from "../TableComponent/cell-cancel";

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
          label: "ISBN",
          prop: "ISBN"
        },
        {
          label: "馆藏地点",
          prop: "gcdd"
        },
        {
          label: "预借日期",
          prop: "yjrq"
        },
        {
          label: "图书状态",
          prop: "tszt"
        }
      ],
      tableData: [
        {
          txm: "32323232",
          tm: "上海市普陀区金沙江路 1518 弄",
          ISBN: "王小虎",
          gcdd: "王小虎",
          yjrq: "2016-05-02",
          tszt: "2016-05-02",
          status: 1
        },
        {
          txm: "32323232",
          tm: "上海市普陀区金沙江路 15128 弄",
          ISBN: "王小虎1",
          gcdd: "王小虎1",
          yjrq: "2016-05-02",
          tszt: "2016-05-02",
          status: 0
        }
      ]
    };
  },
  methods: {
    columnsHandler(cols) {
      return cols.concat({
        label: "操作",
        component: CancelBtn,
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
