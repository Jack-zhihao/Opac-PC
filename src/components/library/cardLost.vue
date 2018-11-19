<template>
  <div class="lost">
    <div class="tips">
      <p>提醒： *证件挂失后将不能再使用，请谨慎操作。</p>
      <p style="text-indent: 3em;">&nbsp;*如您需要解挂，请带齐身份证、读者证在工作时间内到图书馆进行解挂。</p>
    </div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="读者证号：">
        <el-input disabled v-model="form.id" placeholder="读者证号"></el-input>
      </el-form-item>
      <el-form-item label="证件密码：">
        <el-input v-model="form.pass" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn__lost" @click="onSubmit"><i class="el-icon-edit"></i> 挂失</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: 123,
        pass: ""
      }
    }
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style lang="less" scoped>
.tips {
  font-size: 16px;
  color: #575757;
  font-weight: bold;

  p {
    margin-bottom: 20px;
    line-height: 1;
  }
}
/deep/ .el-form {
  margin-top: 50px;
  width: 390px;
  .el-input__inner {
    border-radius: 14px;
  }
}
.btn__lost {
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-size: 16px;
  margin-top: 50px;
  margin-left: 80px;
  background: #e05858;
  border-radius: 18px;
  width: 100px;
}
</style>
