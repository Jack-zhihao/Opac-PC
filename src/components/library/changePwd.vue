<template>
    <div class="changePwd">
        <div class="from__box">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="原密码" prop="oldPass">
                    <el-input type="password" v-model="ruleForm2.oldPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass2">
                    <el-input  type="password" v-model="ruleForm2.checkPass2" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="text-align:center;">
                    <el-button type="primary" @click="submitForm('ruleForm2')"><i class="el-icon-upload2"></i> 保存</el-button>
                    <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import util from "@/util/date"
export default {
    name:"changePwd",
     data() {
      var oldPass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('原密码不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          oldPass: '',
          checkPass: '',
          checkPass2: ''
        },
        rules2: {
          oldPass: [
            { validator: oldPass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass2: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
}
</script>

<style lang="less">
.changePwd{
    .from__box{
        width: 400px;
        padding: 40px 10px;
        /deep/ .el-input__inner {
            width: 290px;
            border-radius: 14px;
            padding: 0 25px;
            &:disabled {
            background: #f6f6f6;
            }
        }
        /deep/ .el-input__suffix{
            right: 15px;
        }
        /deep/ .el-button{
            border-radius: 30px;
            background-color: #0074D9;
            color: #fff;
            padding: 10px 22px;
            margin-top: 20px;
        }
    }
}
</style>
