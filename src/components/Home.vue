<template>
    <div class="home limit__width">
        <div class="logo__box">
            <img :src="logo" alt="">
        </div>
        <div class="search__box">
            <div class="search">
                <el-input v-model="search__key" placeholder="请输入内容"></el-input>
                <el-button type="primary" @click="search">搜索</el-button>
            </div>
            <div class="hots__key">
                热词：
               <span>
                    <el-button type="text">红楼梦</el-button>
                    <el-button type="text">西游记</el-button>
                    <el-button type="text">水浒传</el-button>
                    <el-button type="text">三国演义</el-button>
               </span>
            </div>
            <div class="more__options">
                <el-button type="text" @click="showOptions = !showOptions">更多条件</el-button>
                <el-button type="text" @click="showLibrarys = !showLibrarys">分馆选择</el-button>
                <!-- <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="/Home/Options">更多条件</el-menu-item>
                    <el-menu-item index="/Home/Librarys">分管选择</el-menu-item>
                </el-menu> -->
            </div>
        </div>
        <div class="QRcode">
            <p>扫码手机访问</p>
            <img :src="QR" alt="">
        </div>
        <div class="options">
            <transition name="el-zoom-in-top">
                <Options v-show="showOptions"></Options>
            </transition>
            <transition name="el-zoom-in-top">
                <Librarys v-show="showLibrarys"></Librarys>
            </transition>
        </div>
       
    </div>
</template>
<script>
import logo from '@/assets/logo.png';
import QR from '@/assets/qr.jpg';
import Librarys from "@/components/Home/librarys";
import Options from "@/components/Home/options";
export default {
    name:"Home",
    components:{
        Librarys,
        Options
    },
    data(){
        return {
            logo:logo,
            search__key:"",
            QR:QR,
            showOptions:false,
            showLibrarys:false,
        }
    },
    methods: {
        search(){
            console.log(this.search__key);
            this.$router.push({path:"/SearchResult",name: 'SearchResult',params:{ id:'1'}})
        }
    }
}
</script>
<style lang="less">
.home{
    position:relative;
    background-color: #fff;
    .logo__box{
        padding-top: 120px;
        img{
            width: 290px;
            margin: 0 auto;
        }
    }
    .search__box{
        .search{
            display: inline-block;
            width: 800px;
            .el-input{
                width: calc(100% - 80px);
                .el-input__inner{
                    border-top-left-radius: 40px;
                    border-bottom-left-radius: 40px;
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                    border-color: #0074D9;
                    border-width: 2px;
                }
            }
            .el-button{
                border-radius: 0;
                border-top-right-radius: 40px;
                border-bottom-right-radius: 40px;
                height: 40px;
                }
            .el-button--primary{
                background-color: #0074D9;
                border-color: #0074D9;
            }
        }
        .hots__key{
            width: 750px;
            margin: auto;
            text-align: left;
            text-indent: 2em;
            line-height: 40px;
            font-size: 12px;
            .el-button--text{
                font-size: 12px;
                color: #666;
            }
        }
        .more__options{
            .el-button--text{
                font-size: 16px;
            }
        }
    }
    .QRcode{
        position: absolute;
        width: 90px;
        height: 120px;
        top: 20px;
        left: 50%;
        margin-left: 330px;
        font-size: 12px;
        p{
            margin: 0;
        }
        img{
            width: 100%;
        }
    }
    .options{
        width: 750px;
        margin: 0 auto;
        text-align: left;
    }
}
</style>
