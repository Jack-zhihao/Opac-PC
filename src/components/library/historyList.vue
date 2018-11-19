<template>
  <div>
    <egrid class="egrid"
      stripe
      maxHeight="500"
      :data="tableData"
      :columns="columns">
    </egrid>
  </div>
</template>

<script>
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
          label: "借出时间",
          prop: "jcsj"
        },
        {
          label: "归还时间",
          prop: "ghsj"
        },
        {
          label: "状态",
          prop: "zt"
        }
      ],
      tableData: [
        {
          txm: "32323232",
          zz: "王小虎",
          gcdd: "王小虎",
          zt: "王小虎",
          jcsj: "2016-05-02",
          ghsj: "2016-05-02",
          tm: "上海市普陀区金沙江路 1518 弄",
          status: 1
        },
        {
          txm: "fsdfds45",
          zz: "王小虎",
          gcdd: "王小虎",
          zt: "王小虎",
          jcsj: "2016-05-02",
          ghsj: "2016-05-02",
          tm: "上海市普陀区金沙江路 1518 弄",
          status: 0
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>
