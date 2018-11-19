<template>
    <div class="librarys">
       <span class="tip"></span> 分馆选择&nbsp;&nbsp;
       <el-checkbox :indeterminate="lib__isIndeterminate" v-model="checkLibAll" @change="handleCheckAllLibsChange">全选</el-checkbox>
        <div style="margin: 5px 0;"></div>
        <el-checkbox-group v-model="checkedLibs" @change="handleCheckedLibsChange">
            <el-checkbox v-for="lib in libs" :label="lib" :key="lib">{{lib}}</el-checkbox>
        </el-checkbox-group>
    </div>
    
</template>
<script>
  const libOptions = ['科贸学院', '广州图书馆', '天河区人民第一中学', '广科北大','科贸学院2', '广州图书馆2', '天河区人民第一中学2', '广科北大2','科贸学院3', '广州图书馆3', '天河区人民第一中学3', '广科北大3'];
export default {
    name:"librarys",
    data(){
        return {
            checkLibAll: false,
            checkedLibs: ['科贸学院', '广州图书馆'],
            libs: libOptions,
            lib__isIndeterminate: true
        }
    },
     methods: {
      handleCheckAllLibsChange(val) {
        this.checkedLibs = val ? libOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedLibsChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.libs.length;
        this.lib__isIndeterminate = checkedCount > 0 && checkedCount < this.libs.length;
      }
    }
}
</script>
<style lang="less">
    .librarys{
        margin-top: 36px;
        .tip{
            display: inline-block;
            width: 3px;
            height: 14px;
            background-color:#0074D9;
            vertical-align: text-bottom;
           
        }
        .el-checkbox-group{
            .el-checkbox+.el-checkbox{
                margin: 0;
                line-height: 28px;
            }
            .el-checkbox{
                width: 33%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }  
    }
</style>

