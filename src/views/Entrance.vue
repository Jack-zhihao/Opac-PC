<template>
    <div class="entrance">
        <div class="content">
        <div class="nav">
        <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/AdvancedRetrieval">高级检索</el-menu-item>
            <el-menu-item index="/NewBookRecom">新书推荐</el-menu-item>
            <el-menu-item index="/HotBooks">热门图书</el-menu-item>
            <el-menu-item index="/BorrowingAnalysis">借阅分析</el-menu-item>
            <el-menu-item index="/AcademicSearch">学术搜索</el-menu-item>
            <el-menu-item index="/ReferenceConsultation">参考咨询</el-menu-item>
            <el-menu-item index="/BookRecommendation">图书荐购</el-menu-item>
            <el-menu-item index="/MyLibrary">我的图书馆</el-menu-item>
        </el-menu>
        </div>
            <router-view/>
        </div>
        <div class="footer">
            <p>2018&nbsp;广东拓迪智能科技有限公司&nbsp;版权所有(版本v1.1)&nbsp;|&nbsp;技术支持：广东拓迪智能科技有限公司&nbsp;|&nbsp;服务热线：400-600-8085</p>
        </div>
    </div>
</template>
<script>
const fisrtMenu = ["/","/AdvancedRetrieval","/NewBookRecom","/HotBooks","/BorrowingAnalysis","/AcademicSearch","/ReferenceConsultation","/BookRecommendation","/MyLibrary"];
let formatPath = (path) =>
    {
        return  "/" + path.split("/")[1];
    }
export default {
  name: "entrance",
  data() {
    return {
      activeIndex: formatPath(this.$route.fullPath)
    };
  },
  methods: {
    handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    }
  },
  mounted() {
    const currentPath = window.location.pathname;
    this.activeIndex = currentPath;
  }
};
</script>
<style lang="less">
.entrance{
    height: 100%;
    .content {
        background: #f0f0f0;
        height: calc(100% - 40px);
        overflow: auto;
    .nav{
            min-width: 1200px;
            background: #fff;
        .el-menu{
            width: 850px;
            margin: 0 auto;
        }
        .el-menu.el-menu--horizontal{
            border: none;
        }
        .el-menu-item{
            margin: 0 20px;
            padding: 0;
        }
        .el-menu--horizontal{
            .el-menu-item{
                height: 45px;
            }
        }
    }
  
  }
  .footer {
    height: 40px;
    font-size: 12px;
    color: #666;
    line-height: 40px;
  }
}
</style>
