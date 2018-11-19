<template>
<div class="BorrowingAnalysis">
  <div class="img__box limit__width">
            <img :src="logo2" alt="">
      </div>
  <div class="p-borrow-analysis limit__width">
     
    <div class="chart__total">
      <ve-bar style="width:90%;margin:auto;" :grid="grid" :xAxis="xAxis" :tooltip="tooltip" :colors="['#94BEE3']"
        height="750px" :title="title" :data="chartData" :settings="chartSettings" :legend-visible="false"></ve-bar>
    </div>
    <div class="chart__book_top">
      <h2>图书借阅排行 TOP30</h2>
      <el-table
      stripe
      :data="topBookData"
      style="width: 90%;margin:auto;">
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="50">
          <template slot-scope="scope"><span class="rank__item" :class="`rank__item_${scope.$index}`">{{ scope.$index + 1 }}</span></template>
        </el-table-column>
        <el-table-column
          prop="tm"
          label="题名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="zz"
          label="著者">
        </el-table-column>
        <el-table-column
          prop="cbfhx"
          label="出版发行项">
        </el-table-column>
        <el-table-column
          prop="jycs"
          label="借阅次数">
        </el-table-column>
      </el-table>
    </div>
    <div class="chart__reader_top">
      <h2>读者借阅排行 TOP20</h2>
      <el-table
      stripe
      :data="topReadData"
      style="width: 90%;margin:auto;">
        <el-table-column
          align="center"
          type="index"
          label="排行"
          width="50">
          <template slot-scope="scope"><span class="rank__item" :class="`rank__item_${scope.$index}`">{{ scope.$index + 1 }}</span></template>
        </el-table-column>
        <el-table-column
          prop="dzzh"
          label="读者证号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="xm"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="dw"
          label="单位">
        </el-table-column>
        <el-table-column
          prop="jycs"
          label="借阅次数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</div>
</template>
<script>
import logo2 from "@/assets/logo.png";
export default {
  name: "BorrowingAnalysis",
  data() {
    this.chartSettings = {
      metrics: ["借阅数"]
    };
    this.xAxis = {
      name: "万册",
      nameLocation: "end"
    };
    this.grid = {
      right: "5%"
    };
    this.title = {
      text: "各类图书累计借阅量",
      left: "center",
      textStyle: {
        fontWeight: "bold",
        fontSize: 20
      }
    };
    return {
      logo2:logo2,
      tooltip: {
        formatter: "{b}<br/>2018年累计借阅 {c} 万册",
        textStyle: {
          align: "left"
        }
      },
      chartData: {
        columns: ["类别"],
        rows: [
          {
            类别: "艺术",
            借阅数: 1393
          },
          {
            类别: "哲学、宗教",
            借阅数: 2923
          },
          {
            类别: "社会科学",
            借阅数: 1723
          },
          {
            类别: "政治法律",
            借阅数: 3792
          },
          {
            类别: "军事",
            借阅数: 3530
          },
          {
            类别: "经济",
            借阅数: 4593
          },
          {
            类别: "社会科学",
            借阅数: 1723
          },
          {
            类别: "政治法律",
            借阅数: 3792
          },
          {
            类别: "军事",
            借阅数: 3530
          },
          {
            类别: "经济",
            借阅数: 4593
          }
        ]
      },
      topBookData: [
        {
          tm: "上海市普陀区金沙江路 1518 弄",
          zz: "王小虎",
          cbfhx: "王小虎1",
          jycs: "32"
        },
        {
          tm: "上海市普陀区金沙江路 1518 弄",
          zz: "王小虎",
          cbfhx: "王小虎1",
          jycs: "32"
        },
        {
          tm: "上海市普陀区金沙江路 1518 弄",
          zz: "王小虎",
          cbfhx: "王小虎1",
          jycs: "32"
        }
      ],
      topReadData: [
        {
          dzzh: "432423445",
          xm: "王小虎",
          dw: "王小虎1",
          jycs: "32"
        },
        {
          dzzh: "432423445",
          xm: "王小虎",
          dw: "王小虎1",
          jycs: "32"
        },
        {
          dzzh: "432423445",
          xm: "王小虎",
          dw: "王小虎1",
          jycs: "32"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.BorrowingAnalysis{
  .img__box{
        background-color: #fff;
        height: 100px;
        line-height: 140px;
        img{
            width: 160px;
        }
    }
.p-borrow-analysis {
  overflow: hidden;
  line-height: 1;
  background: #fff;
  border-radius: 10px;
  margin: 20px auto;
  .title {
    text-align: left;
    font-size: 16px;
    margin-left: 20px;
    padding: 20px 20px 20px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  h2 {
    color: #333;
    margin-top: 96px;
    margin-bottom: 30px;
    font-size: 20px;
  }

  .chart__total {
    margin-top: 37px;
  }
  .chart__book_top,
  .chart__reader_top {
    margin-bottom: 96px;
  }
  /deep/ .el-table td {
    border-bottom: none;
  }
  /deep/ .el-table th {
    border-bottom: none;
  }
  /deep/ .el-table::before {
    content: none;
  }
  /deep/ .el-table thead th {
    background: #F6F6F6;
  }
  .rank__item {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    color: #fff;
    border-radius: 2px;
    background: #63829E;
    &.rank__item_0 {
      background: #E05858;
    }
    &.rank__item_1 {
      background: #FB892C;
    }
    &.rank__item_2 {
      background: #F7AF25;
    }
  }
}
}
</style>
