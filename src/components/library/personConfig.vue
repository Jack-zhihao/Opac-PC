<template>
  <div class="p-config">
    <el-form ref="form" :inline="true" :model="form" label-width="120px">
      <section class="form__basic">
        <p class="title">基本资料</p>
        <el-form-item label="姓名：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="读者证号：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="证件类型：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="开户馆：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="证件号：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item class="basic__date" label="有限期：">
          <el-input v-model="form.name" disabled></el-input>
          <span style="padding:10px;">-</span>
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="状态：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="民族：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="押金：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="籍贯：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="是否馆际读者：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
      </section>
      
      <el-form-item>
        <div class="button"><i class="el-icon-edit"></i> 保存</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    };
  }
};
</script>

<style lang="less" scoped>
.p-config {
  .title {
    font-size: 16px;
    color: #333;
    margin-top: 9px;
    margin-bottom: 19px;
    text-indent: 20px;
  }
  /deep/ .el-input__inner {
    width: 290px;
    border-radius: 14px;
    &:disabled {
      background: #f6f6f6;
    }
  }
  /deep/ .basic__date {
    .el-input {
      width: 132px;
    }
    .el-input__inner {
      width: 100%;
    }
  }
  /deep/ .el-form-item {
    margin-bottom: 10px;
  }
  .form__basic {
    color: #8f8f8f;
    font-size: 14px;
    /deep/ .el-form-item {
      width: 50%;
      margin-right: 0;
    }
  }
  .pass {
    /deep/ .el-form-item {
      width: 100%;
      margin-right: 0;
    }
  }
  .button {
    width: 100px;
    margin-left: 210px;
    margin-top: 44px;
    display: inline-block;
    background-color: #0074d9;
    border-radius: 18px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 36px;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
