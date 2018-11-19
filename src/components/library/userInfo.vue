<template>
    <div class="userInfo">
        <div class="tabs">
        <el-tabs type="card" v-model="activeName" @tab-click="activePane">
            <el-tab-pane name="/MyLibrary/UserInfo?id=1" label="个人资料"><person-config/></el-tab-pane>
            <el-tab-pane name="/MyLibrary/UserInfo?id=2" label="修改密码"><change-pwd/></el-tab-pane>
            <el-tab-pane name="/MyLibrary/UserInfo?id=3" label="电子读者证"><e-card/></el-tab-pane>
            <el-tab-pane name="/MyLibrary/UserInfo?id=4" label="证件挂失"><card-lost/></el-tab-pane>
        </el-tabs>
    </div>
    </div>
</template>
<script>

import PersonConfig from "./personConfig";
import ChangePwd from "./changePwd";
import ECard from "./eCard";
import CardLost from "./cardLost";
export default {
    name:"userInfo",
    components:{
        CardLost,
        ChangePwd,
        ECard,
        PersonConfig,
    },
    data(){
        return {
            activeName:this.$route.fullPath,
        }
    },
    methods:{
        activePane(){
            // this.$store.state.library.path = this.activeName;
            this.$router.push({ path: this.activeName});
        }
    },
     watch:{
        "$route.fullPath" (newVal,oldVal){
            this.activeName = newVal;
        }
    }
}
</script>
<style lang="less">
.userInfo{
    .el-tabs--card{
        border:noe;
    }
    .el-tabs{
        border: none;
        .el-tabs__nav-scroll{
            // background-color: #F6F6F6;
            
            // .el-tabs__item.is-active{
            //     border-right-color: #eee;
            //     border-left-color: #eee;
            // }
            // .el-table td, .el-table th.is-leaf{
            //     border: none;
            // }
        }
    }
}
</style>
