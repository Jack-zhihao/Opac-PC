<template>
     <div class="options">
       <p><span></span> 更多条件</p>
       <span>文献类型 </span>
       <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 10px 0;"></div>
        <el-checkbox-group v-model="checkedTypes" @change="handleCheckedTypesChange">
            <el-checkbox v-for="type in types" :label="type" :key="type">{{type}}</el-checkbox>
        </el-checkbox-group>
        <el-row>
            <el-col :span="12"><div class="grid-content">
                检索条件&nbsp;&nbsp;
                <el-select v-model="condition__key"  placeholder="请选择">
                    <el-option
                    v-for="item in searchCondition"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>    
            </div></el-col>
            <el-col :span="12"><div class="grid-content">
                匹配方式&nbsp;&nbsp;
                <el-select v-model="fitSystem__key"  placeholder="请选择">
                    <el-option
                    v-for="item in fitSystem"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> 
            </div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content">
                排序选项&nbsp;&nbsp;
                <el-select v-model="sortOptions__key"  placeholder="请选择">
                    <el-option
                    v-for="item in sortOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>    
            </div></el-col>
            <el-col :span="12"><div class="grid-content">
                排序方式&nbsp;&nbsp; 
                <el-select v-model="sortOrder__key"  placeholder="请选择">
                    <el-option
                    v-for="item in sortOrder"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> 
            </div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content">
                语种选择&nbsp;&nbsp;    
                 <el-radio v-model="language" label="cn">中文</el-radio>
                 <el-radio v-model="language" label="en">西文</el-radio>
                 <el-radio v-model="language" label="all">全部</el-radio>
            </div></el-col>
            <el-col :span="12"><div class="grid-content">
               
            </div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content">
                每页显示&nbsp;&nbsp;  
                <el-select v-model="page__key"  placeholder="请选择">
                    <el-option
                    v-for="item in page"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>    
            </div></el-col>
            <el-col :span="12"><div class="grid-content">
               <el-checkbox style="line-height:36px;" v-model="collectLog">只输出馆藏记录</el-checkbox>
            </div></el-col>
        </el-row>
    </div>
</template>
<script>
 const typesOptions = ['图书', '期刊', '古籍', '非书资料'];
 const fitSystemArr = [
     {label:"前方一致",value:"前方一致"},
     {label:"后方一致",value:"后方一致"},
     {label:"包含",value:"包含"},
     {label:"完全等于",value:"完全等于"}
 ]
 const sortOrder = [
     {label:"降序",value:"降序"},
     {label:"升序",value:"升序"}
 ]
 const sortOptions =[
     {label:"前方一致",value:"前方一致"}
 ]
 const searchCondition = [
     {
          value: '题名',
          label: '题名'
        }, {
          value: '作者',
          label: '作者'
        }, {
          value: 'ISBN',
          label: 'ISBN'
        }, {
          value: 'ISSN',
          label: 'ISSN'
        }, {
          value: '分类号',
          label: '分类号'
        }, {
          value: '主题词',
          label: '主题词'
        }, {
          value: '索书号',
          label: '索书号'
        }, {
          value: '分辑名',
          label: '分辑名'
        }, {
          value: '副题名',
          label: '副题名'
        }, {
          value: '摘要',
          label: '摘要'
        }, {
          value: '附注',
          label: '附注'
        }, {
          value: '任意词',
          label: '任意词'
        }
 ]
 const page = [
     {label:"每页10条",value:"10"},
     {label:"每页15条",value:"15"},
     {label:"每页20条",value:"20"},
 ]
export default {
    name:"options",
    data(){
        return {
            checkAll: false,
            checkedTypes: ['上海', '北京'],
            types: typesOptions,
            isIndeterminate: true,
            searchCondition:searchCondition,
            condition__key:"选项1",
            fitSystem:fitSystemArr,
            fitSystem__key:"选项1",
            sortOptions:searchCondition,
            sortOptions__key:"选项1",
            sortOrder:sortOrder,
            sortOrder__key:"选项1",
            page:page,
            page__key:"选项1",
            language:"cn",
            collectLog:true

        }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedTypes = val ? typesOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedTypesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.types.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.types.length;
      }
    }
    
}
</script>
<style lang="less">
.options{
        margin-top: 20px;
    p{
         font-size: 16px;
        line-height: 32px;
        span{
            display: inline-block;
            width: 3px;
            height: 14px;
            background-color:#0074D9;
            vertical-align: text-bottom;
           
        }
    }
    .el-select{
        .el-input__inner{
            line-height: 36px;
            height: 36px;
            border-radius: 40px;
            width: 200px;
        }
    }
    .grid-content{
        margin: 10px 0;
        .el-radio+.el-radio{
            margin-left: 10px;
        }
    }
}
</style>
