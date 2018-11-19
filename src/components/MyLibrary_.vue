<template>
  <div class="limit__width p-personCenter">
    <div class="user">
      <div class="avator" :style="{'background-image': `url(http://placekitten.com/g/200/300)`}"></div>
      <div class="user__info">
        <div class="user__name">张某某</div>
        <div class="user__card">123456789</div>
        <div class="user__status">正常</div>
      </div>
    </div>
    <div class="detail">
      <div class="detail__item detail__borrow">
        <p class="value">2</p>
        <p class="label">已借</p>
      </div>
      <div class="detail__item detail__ava">
        <p class="value">5</p>
        <p class="label">可借</p>
      </div>
      <div class="detail__item detail__debt">
        <p class="value warn">5.0</p>
        <p class="label">欠费</p>
      </div>
    </div>
    <div class="tabs">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane name="borrow" label="当前借阅"><borrow-list/></el-tab-pane>
        <el-tab-pane name="history" label="历史借阅"><history-list/></el-tab-pane>
        <el-tab-pane name="reserve" label="图书预借"><reserve-list/></el-tab-pane>
        <el-tab-pane name="lost" label="证件挂失"><card-lost/></el-tab-pane>
        <el-tab-pane name="config" label="个人资料"><person-config/></el-tab-pane>
        <el-tab-pane name="rec" label="我的荐购"><book-rec/></el-tab-pane>
        <el-tab-pane name="analyze" label="阅读分析">
          <reading-analyze :resize="tabResize"></reading-analyze>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import BorrowList from "./library/borrowList";
import HistoryList from "./library/historyList";
import ReserveList from "./library/reserveList";
import CardLost from "./library/cardLost";
import PersonConfig from "./library/personConfig";
import BookRec from "./library/bookRec";
import ReadingAnalyze from "./library/readingAnalyze";
export default {
  name: "MyLibrary",
  components: {
    BorrowList,
    HistoryList,
    ReserveList,
    CardLost,
    PersonConfig,
    BookRec,
    ReadingAnalyze
  },
  data() {
    return {
      activeName: "borrow",
      tabResize: false
    };
  },
  watch: {
    activeName() {
      this.tabResize = this.activeName === "analyze";
    }
  }
};
</script>

<style lang="less" scoped>
.p-personCenter {
  min-height: 600px;
  margin: 70px auto 20px;
  border-radius: 10px;
  background: #fff;
  line-height: 1;
  text-align: left;
  .user {
    position: relative;
    padding-left: 200px;
    .user__info {
      overflow: hidden;
    }
    .avator {
      position: absolute;
      left: 20px;
      top: -50px;
      width: 160px;
      height: 160px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
    }
    .user__name {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
      color: rgba(87, 87, 87, 1);
    }
    .user__card {
      margin-bottom: 10px;
      color: #575757;
    }
    .user__status {
      display: inline-block;
      margin-bottom: 12px;
      color: #fff;
      padding: 7px 12px;
      background: rgba(0, 116, 217, 1);
      border-radius: 13px;
      &.deactived {
        background: #e05858;
      }
    }
  }
  .detail {
    margin-top: 13px;
    margin-left: 20px;
    font-size: 0;
    border-bottom: 1px solid #f0f0f0;
    .detail__item {
      display: inline-block;
      padding: 0 12px;
      border-right: 1px solid #f0f0f0;
      &:last-child {
        border-right: none;
      }
    }
    .value {
      text-align: center;
      margin-bottom: 9px;
      font-size: 18px;
      color: #575757;
      &.warn {
        color: #e05858;
      }
    }
    .label {
      font-size: 14px;
      margin-bottom: 6px;
      color: #8f8f8f;
    }
  }
  .tabs {
    padding: 20px;
  }
}
</style>

<style lang="less">
.p-personCenter {
  .el-tabs {
    box-shadow: none;
    border: none;
    border-top: 1px solid #e9e9e9;
    .el-tabs__nav-scroll {
      border-right: 1px solid #e9e9e9;
      border-left: 1px solid #e9e9e9;
    }
  }
  .el-tabs--border-card {
    > .el-tabs__header {
      background-color: #f6f6f6;
      .el-tabs__item {
        color: #8f8f8f;
        &.is-active {
          color: #0074d9;
        }
      }
    }
    .el-tabs__content {
      padding: 20px 0;
      min-height: 720px;
    }
  }
}
</style>
