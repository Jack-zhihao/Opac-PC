<template>
    <div class="borrowInfo">
        <el-tabs type="card" v-model="activeName" @tab-click="activePane">
            <el-tab-pane name="/MyLibrary/BorrowInfo?id=1" label="当前借阅"><borrow-list/></el-tab-pane>
            <el-tab-pane name="/MyLibrary/BorrowInfo?id=2" label="历史借阅"><history-list/></el-tab-pane>
            <el-tab-pane name="/MyLibrary/BorrowInfo?id=3" label="图书预借"><reserve-list/></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import BorrowList from "./borrowList";
import HistoryList from "./historyList";
import ReserveList from "./reserveList";
export default {
    name:"borrowInfo",
    components:{
        BorrowList,
        HistoryList,
        ReserveList,
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
.borrowInfo{
    .el-tabs--card{
            border: none;
        }
    .el-tabs{
        
        .el-tabs__nav-scroll{
            // background-color: #F6F6F6;
            // .el-tabs__item{
            //     height: 50px;
            //     line-height: 50px;
            // }
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
