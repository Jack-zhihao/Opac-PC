<template>
  <div class="p-book-rec limit__width">
    <h2 class="title">请填写荐购书目明细</h2>
    <el-form class="rec__form" ref="form" :rules="rules" :model="form" label-width="120px" label-position="left">
      <el-form-item label="题名" prop="bookname">
        <el-input v-model="form.bookname" placeholder="请填写题名"></el-input>
      </el-form-item>
      <el-form-item label="语种" prop="language">
        <el-select v-model="form.language">
          <el-option label="中文" value="cn"></el-option>
          <el-option label="英文" value="en"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="著者" prop="author">
        <el-input v-model="form.author" placeholder="请填写著者"></el-input>
      </el-form-item>
      <el-form-item label="出版社" prop="publisher">
        <el-input v-model="form.publisher" placeholder="请填写出版社"></el-input>
      </el-form-item>
      <el-form-item label="出版年" prop="publish_year">
        <el-input v-model="form.publish_year" placeholder="请填写出版年"></el-input>
      </el-form-item>
      <el-form-item label="ISBN/ISSN" prop="isbn">
        <el-input v-model="form.isbn" placeholder="为了能准确地帮您订购此书，请尽量填写ISBN或ISSN"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="form.price" placeholder="请填写价格"></el-input>
      </el-form-item>
      <el-form-item label="推荐册数" prop="numbers">
        <el-select v-model="form.numbers">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="4" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="推荐理由" prop="reason">
        <el-input type="textarea" v-model="form.reason" placeholder="请填写推荐理由"></el-input>
      </el-form-item>
      <el-form-item label="读者ID或条码" prop="id">
        <el-input v-model="form.id" placeholder="请填写您的读者证号"></el-input>
      </el-form-item>
      <el-form-item class="form__btns">
        <div class="form__btn form__btn_submit" @click="submitForm('form')"><i class="el-icon-edit"></i> 提交</div>
        <div class="form__btn form__btn_reset" @click="resetForm('form')"><i class="el-icon-refresh"></i> 重置</div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "BookRecommendation",
  data() {
    return {
      form: {
        bookname: "",
        language: "cn",
        author: "",
        publish_year: "",
        isbn: "",
        price: "",
        numbers: 1,
        reason: "",
        id: ""
      },
      rules: {
        bookname: [{ required: true, message: "请填写题名", trigger: "blur" }],
        author: [{ required: true, message: "请填写著者", trigger: "blur" }],
        id: [{ required: true, message: "请填写您的读者证号", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.p-book-rec {
  line-height: 1;
  background: #fff;
  border-radius: 10px;

  .title {
    text-align: left;
    font-size: 16px;
    margin-left: 20px;
    padding: 20px 20px 20px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .rec__form {
    overflow: hidden;
    margin: auto;
    width: 580px;
    .form__btns {
      margin: 50px auto;
      .form__btn {
        display: inline-block;
        margin: 0 25px;
        width: 100px;
        border-radius: 18px;
        text-align: center;
        line-height: 36px;
        font-size: 16px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      .form__btn_submit {
        color: #fff;
        background: #0074d9;
        border: 1px solid #0074d9;
      }
      .form__btn_reset {
        color: #e05858;
        border: 1px solid #e05858;
      }
    }
  }
  /deep/ .el-form-item__label {
    line-height: 36px;
  }
  /deep/ .el-form-item__content {
    line-height: 36px;
  }
  /deep/ .el-input__inner {
    width: 460px;
    height: 36px;
    border-radius: 14px;
    &::placeholder {
      color: #8f8f8f;
    }
  }
  /deep/ .el-textarea__inner {
    width: 460px;
    border-radius: 14px;
    &::placeholder {
      color: #8f8f8f;
    }
  }
  /deep/ .el-form-item {
    margin-bottom: 20px;
  }
}
</style>
