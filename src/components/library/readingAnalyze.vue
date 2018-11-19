<template>
  <div >
    <el-tabs type="card">
      <el-tab-pane label="借阅分析">
       <div>
          
       </div>
      </el-tab-pane>
    </el-tabs>
    <ve-ring ref="chart"  :resize="true"  :title="title" height="600px" :legend="chartLegend" :data="chartData" :settings="chartSettings"></ve-ring>
  </div>
</template>

<script>
import "echarts/lib/component/title";
export default {
  props: {
    resize: {
      type: Boolean
    }
  },
  data() {
    this.chartSettings = {
      roseType: "radius",
      radius: [30, "60%"],
      offsetY: "50%",
      dataType: function(v) {
        return v + "册";
      }
    };
    this.chartLegend = {
      bottom: 0,
      width: "500px",
      itemGap: 20
    };
    return {
      title: {
        text: "2018年总借阅册数：36册",
        left: "center",
        textStyle: {
          fontWeight: "bold",
          fontSize: 20
        }
      },
      chartSeries: [
        {
          type: "pie",
          radius: [0, "75%"]
        }
      ],
      chartData: {
        columns: ["类型", "册数"],
        rows: [
          { 类型: "马、列、毛、邓", 册数: 1393 },
          { 类型: "经济", 册数: 3530 },
          { 类型: "政治法律", 册数: 2923 },
          { 类型: "自然科学总论", 册数: 1723 },
          { 类型: "医药卫生", 册数: 3792 },
          { 类型: "数理科学和化学", 册数: 4593 }
        ]
      }
    };
  },
  watch: {
    resize() {
      if (this.resize === true) {
        this.$refs["chart"].echarts.resize();
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
