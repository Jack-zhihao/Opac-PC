<template>
    <div class="MyLibrary limit__width clearfix">
        <div class="menu__nav">
            <el-row class="user__info">
                <el-col :span="6">
                    <div class="userface" :style="{'background-image': `url(http://placekitten.com/g/200/300)`}"></div>
                </el-col>
                <el-col :span="14">
                    <p class="userName">张天宝</p>
                    <p class="userNumber">3213131322</p>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                </el-col>
            </el-row>
            <el-row class="borrow__info">
                <el-col :span="8">
                    <p class="borrow__val">--</p>
                    <p class="borrow__key">可借</p>
                </el-col>
                <el-col :span="8">
                    <p class="borrow__val">--</p>
                    <p class="borrow__key">已借</p>
                </el-col>
                <el-col :span="8">
                    <p class="borrow__val">--</p>
                    <p class="borrow__key">欠费</p>
                </el-col>
            </el-row>
            <div class="menu__list">
                 <el-menu
                    :default-active="$route.fullPath"
                    router
                    v-model="activePath"
                    class="el-menu-vertical-demo"
                    @select="selectPath"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>借阅信息</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="/MyLibrary/BorrowInfo?id=1"><i class="el-icon-location"></i>当前借阅</el-menu-item>
                        <el-menu-item index="/MyLibrary/BorrowInfo?id=2"><i class="el-icon-location"></i>历史借阅</el-menu-item>
                        <el-menu-item index="/MyLibrary/BorrowInfo?id=3"><i class="el-icon-location"></i>图书预借</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>个人中心</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="/MyLibrary/UserInfo?id=1"><i class="el-icon-location"></i>基本资料</el-menu-item>
                        <el-menu-item index="/MyLibrary/UserInfo?id=2"><i class="el-icon-location"></i>修改密码</el-menu-item>
                        <el-menu-item index="/MyLibrary/UserInfo?id=3"><i class="el-icon-location"></i>电子读者证</el-menu-item>
                        <el-menu-item index="/MyLibrary/UserInfo?id=4"><i class="el-icon-location"></i>证件挂失</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    
                    <el-menu-item index="/MyLibrary/BookRec" class="second-menu">
                        <i class="el-icon-document"></i>
                        <span slot="title">我的荐购</span>
                    </el-menu-item>
                    <el-menu-item index="/MyLibrary/ReadingAnalyze" class="second-menu">
                        <i class="el-icon-setting"></i>
                        <span slot="title">阅读分析</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    name:"MyLibrary",
    data(){
        return {
           activePath:this.$route.fullPath,
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      selectPath(index,indexPath){
          this.activePath = index;
      }
    },
    mounted(){
        this.$router.push({ path: '/MyLibrary/BorrowInfo?', query: { id: '1' }});
    },
    watch:{
        "$route.fullPath" (newVal,oldVal){
            if(newVal == "/MyLibrary"){
                if(oldVal.indexOf("/MyLibrary") != -1){
                     this.$router.push({ path: oldVal});
                }
            }
        }
    }
}
</script>
<style lang="less">
.MyLibrary{ text-align: left;
            margin-top: 10px;
            height: calc(100% - 60px);
    .menu__nav{ float: left;
                width: 230px;
                background-color: #fff;
                height: calc(100% - 20px);
        .user__info{padding: 10px;
                    box-sizing: border-box;
            .userface{  width: 50px;
                        height: 50px;
                        border-radius: 50px;
            }
            .userName{  font-size: 18px;
                        color: #333;
                        line-height: 32px;
                        text-indent: 0.5em;
                        font-weight: 600;
            }
            .userNumber{font-size: 16px;
                        color: #333;
                        line-height: 26px;
                        text-indent: 0.5em
            }
            .el-button.is-circle{padding: 6px;
                                color: #E05858;
                                background-color: #FFEFEF;
                                border-color: #FFEFEF;
            }
        }
        .borrow__info{ padding-top: 10px;
            p{text-align: center;
            }
            .borrow__val{font-size: 16px;
                         color: #333;
            }
            .borrow__key{font-size: 14px;
                        color: #8F8F8F;
            }
        }
        .menu__list{
            margin-top: 20px;
            .el-menu{
                .el-submenu__title{
                    i{
                         color: #0074d9;
                    }
                }
                .el-menu-item{
                    color: #575757;
                    
                    i{
                        margin-left: 5px;
                    }
                }
                .el-menu-item.is-active{
                    color: #0074d9;
                    border-right: 5px solid #0074d9;
                }
                .second-menu{
                    i{
                        color: #0074d9;
                    }
                }
            }
        }
    }
    .content{
        float: left;
        width: 960px;
        height: calc(100% - 20px);
        background: #fff;
        margin-left: 10px;
    }
}
</style>
