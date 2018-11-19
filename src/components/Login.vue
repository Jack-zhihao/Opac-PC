<template>
    <div class="Login">
        <div class="container limit__width">
            <div class="pane">
                <el-row>
                    <el-col :span="14">
                        <div class="Website__info">
                            <div class="img__box">
                                <img :src="logo__img" alt="">
                            </div>
                            <div class="text__box">
                                <p class="new__book">新书推荐</p>
                                <p>看看有没有你想看的书</p>
                                <p class="hots__book">热门图书</p>
                                <p>排行榜上最热门图书的情况</p>
                            </div>
                            <div class="tips">
                                当你知道迷惑时，并不可怜，当你不知道迷惑时，才是最可怜
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="login__pane">
                            <h1>读者登录</h1>
                            <div class="login__box">
                                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
                                    <el-form-item label="" prop="account">
                                        <el-input type="text" v-model="ruleForm2.account" placeholder="请输入读者证号" autocomplete="on">
                                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="" prop="pass">
                                        <el-input type="password" v-model="ruleForm2.pass" placeholder="请输入密码" autocomplete="on">
                                            <i slot="prefix" class="el-input__icon el-icon-password"></i>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <div class="forgetPwss">
                                            <el-button type="text">忘记密码</el-button>
                                        </div>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                                        <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="login__tips">
                                <p>支持读者证号和证件号码登录</p>
                                <p>初始密码为123456，请及时设置新密码！</p>
                                <p>忘记密码请咨询管理员！</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
    
</template>
<script>
import logo__img from "@/assets/logo_login.png";
let validate = require("../util/validate.js");
export default {
    name:"Login",
    data(){
        var validateAccount = (rule, value, callback) => {
        if (!validate.CheckName(value)) {
            callback(new Error('请输入读者证号 ( 2-18字符，允许中文、英文字母 )'));
        } else {
          
          callback();
        }
      };
    var validatePass = (rule, value, callback) => {
        if (!validate.CheckPassNumberLetter8(value)) {
          callback(new Error('请输入密码 ( 允许4-16字符 数字+字母 )'));
        } else {
          
          callback();
        }
      };
        return {
            logo__img:logo__img,
             ruleForm2: {
                account: '',
                pass: '',
            },
            rules2: {
                account: [
                    { validator: validateAccount, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
         submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$message({
                    message:"登录成功",
                    type: 'success'
                })
                setTimeout(()=>{
                    this.$router.push({path:"/",name: 'Home',params:{ id:'Home'}})
                },1000)
                
            } else {
             console.log('error submit!!');
                return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    mounted(){
        this.$fetch("/InterfSubsy/v1/getNewBook",
        {
                limit: 6,
                offset: 0
            }
        )
        .then(res=>{
            console.log(res);
        })
    }
}
</script>
<style lang="less">
.Login{
    height: 100%;
    background-color: #0074D9;
    .container{
        text-align: center;
        height: 100%;
        position: relative;
        .pane{
            position: absolute;
            width:980px;
            height:570px;
            background:rgba(255,255,255,1);
            top: 50%;
            left: 50%;
            margin-left: -490px;
            margin-top: -285px;
            padding: 60px 10px 60px 20px;
            box-sizing: border-box;
            .Website__info{
                padding-right: 30px;
                box-sizing: border-box;
                border-right: 2px solid #CBD7E1;
                .img__box{
                    img{
                        width: 500px;
                    }
                }
                .text__box{
                    p{
                        font-size: 16px;
                        color: #666;
                        line-height: 36px;
                    }
                    .new__book{
                        color: #0074D9;
                        font-size: 24px;
                        margin-top: 20px;
                    }
                    .hots__book{
                        margin-top: 26px;
                        color:#e05858;
                        font-size: 24px;
                    }
                    
                }
                .tips{
                        color: #949494;
                        font-size: 14px;
                        height: 64px;
                        border: 1px dashed #ccc;
                        border-radius: 4px;
                        line-height: 64px;
                        margin-top: 40px;
                    }
            }
            .login__pane{
                padding: 0 30px;
                box-sizing: border-box;
                h1{
                    font-size: 30px;
                    color: #0F1214;
                }
                .login__box{
                    .el-form{
                        .el-input__inner{
                            border-radius: 40px;
                            height: 44px;
                            line-height: 44px;
                        }
                        .el-button--primary{
                            width: 100%;
                            margin-top: 20px;
                            background-color: #0074D9;
                            padding: 12px 20px;
                            border-radius: 40px;
                            font-size: 18px;
                        }
                        .forgetPwss{
                            position: relative;
                            .el-button{
                                position: absolute;
                                top: -12px;
                                right: 5px;
                                padding: 0;
                                color: #0074D9;
                            }
                        }
                        .el-icon-user, .el-icon-password{
                            width: 20px;
                            height: 20px;
                            background-size:contain; 
                            background-repeat: no-repeat;
                            margin-left: 3px;
                            vertical-align: middle;
                        }
                        .el-icon-user{
                            background-image: url("../assets/icon-user.png")
                        }
                        .el-icon-password{
                            background-image: url("../assets/icon-pass.png")
                        }
                      
                    }
                }
                .login__tips{
                    margin-top: 50px;
                    p{
                        color: #8F8F8F;
                        font-size: 18px;
                        text-align: left;
                        line-height: 36px;
                        
                    }
                }
            }
        }
    }
}
</style>

