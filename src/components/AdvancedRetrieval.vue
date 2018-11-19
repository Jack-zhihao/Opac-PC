<template>
    <div class="advancedRetrieval">
        <div class="img__box limit__width">
            <img :src="logo2" alt="">
        </div>
        <div class="advancedRetrieval__content limit__width">
            <h3>高级检索</h3>
            <div class="search_content">
                 <el-row class="">
                    <el-col :span="3"><div class="grid-content bg-purple-dark placeholder__label">&nbsp;</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-dark placeholder__label">查找内容</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple-dark placeholder__label">匹配方式</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark placeholder__label">组配方式</div></el-col>
                 </el-row>
                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple-dark search__label">关键词1</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-dark select_1">
                       <el-input placeholder="请输入内容" v-model="search__key1" class="input-with-select">
                            <el-select v-model="select__key1" slot="prepend" placeholder="请选择">
                            <el-option label="题名" value="1"></el-option>
                            <el-option label="作者" value="2"></el-option>
                            <el-option label="出版社" value="3"></el-option>
                            </el-select>
                        </el-input>
                    </div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple-dark select_2">
                        <el-select v-model="fitSystem__key1" placeholder="请选择">
                            <el-option
                            v-for="item in fitSystems1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark select_3">
                        <el-select v-model="grounpNexus__key1" placeholder="请选择">
                            <el-option
                            v-for="item in grounpNexus1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>    
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple-dark search__label">关键词2</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-dark select_1">
                       <el-input placeholder="请输入内容" v-model="search__key2" class="input-with-select">
                            <el-select v-model="select__key2" slot="prepend" placeholder="请选择">
                            <el-option label="题名" value="1"></el-option>
                            <el-option label="作者" value="2"></el-option>
                            <el-option label="出版社" value="3"></el-option>
                            </el-select>
                        </el-input>
                    </div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple-dark select_2">
                        <el-select v-model="fitSystem__key2" placeholder="请选择">
                            <el-option
                            v-for="item in fitSystems2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark select_3">
                        <el-select v-model="grounpNexus__key3" placeholder="请选择">
                            <el-option
                            v-for="item in grounpNexus2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>    
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple-dark search__label">关键词3</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-dark select_1">
                       <el-input placeholder="请输入内容" v-model="search__key3" class="input-with-select">
                            <el-select v-model="select__key3" slot="prepend" placeholder="请选择">
                            <el-option label="题名" value="1"></el-option>
                            <el-option label="作者" value="2"></el-option>
                            <el-option label="出版社" value="3"></el-option>
                            </el-select>
                        </el-input>
                    </div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple-dark select_2">
                        <el-select v-model="fitSystem__key3" placeholder="请选择">
                            <el-option
                            v-for="item in fitSystems3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark select_3">
                        <el-select v-model="grounpNexus__key3" placeholder="请选择">
                            <el-option
                            v-for="item in grounpNexus3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>    
                    </div></el-col>
                </el-row>
               
            </div>
            <div class="btn__tool">
                <el-button type="primary" round>检索</el-button>
                <el-button type="danger" plain>重置</el-button>
            </div>
            <div style="clear:both"></div>
        <div class="options">
        <!-- <p><span></span> 更多条件</p> -->
        <span>文献类型 </span>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 10px 0;"></div>
            <el-checkbox-group v-model="checkedTypes" @change="handleCheckedTypesChange">
                <el-checkbox v-for="type in types" :label="type" :key="type">{{type}}</el-checkbox>
            </el-checkbox-group>
            
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
        <div class="librarys">
            <span class="tip"></span> 分馆选择&nbsp;&nbsp;
            <el-checkbox :indeterminate="lib__isIndeterminate" v-model="checkLibAll" @change="handleCheckAllLibsChange">全选</el-checkbox>
                <div style="margin: 5px 0;"></div>
                <el-checkbox-group v-model="checkedLibs" @change="handleCheckedLibsChange">
                    <el-checkbox v-for="lib in libs" :label="lib" :key="lib">{{lib}}</el-checkbox>
                </el-checkbox-group>
        </div>
    </div>

</div>
</template>
<script>
import logo2 from "@/assets/logo.png";
const fitSystems = [
     {label:"前方一致",value:"前方一致"},
     {label:"后方一致",value:"后方一致"},
     {label:"包含",value:"包含"},
     {label:"完全等于",value:"完全等于"}
]
const grounpNexus = [
    {label:"and",value:"and"},
    {label:"or",value:"or"},
]

//文献类型
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
     {label:"10条/页",value:"10"},
     {label:"15条/页",value:"15"},
     {label:"20条/页",value:"20"},
 ];
 const libOptions = ['科贸学院', '广州图书馆', '天河区人民第一中学', '广科北大','科贸学院2', '广州图书馆2', '天河区人民第一中学2', '广科北大2','科贸学院3', '广州图书馆3', '天河区人民第一中学3', '广科北大3'];

export default {
    name:"AdvancedRetrieval",
    data(){
        return {
            logo2:logo2,
            //关键字1
            search__key1: '',
            select__key1: '题名',
            fitSystem__key1:"题名",
            fitSystems1:fitSystems,
            grounpNexus__key1:"and",
            grounpNexus1:grounpNexus,
            //关键字2
             search__key2: '',
            select__key2: '题名',
            fitSystem__key2:"题名",
            fitSystems2:fitSystems,
            grounpNexus__key2:"and",
            grounpNexus2:grounpNexus,
            //关键字3
             search__key3: '',
            select__key3: '题名',
            fitSystem__key3:"题名",
            fitSystems3:fitSystems,
            grounpNexus__key3:"and",
            grounpNexus3:grounpNexus,
            //文献类型
            checkAll: false,
            checkedTypes: ['上海', '北京'],
            types: typesOptions,
            isIndeterminate: true,
            
            fitSystem:fitSystemArr,
            fitSystem__key:"选项1",
            sortOptions:searchCondition,
            sortOptions__key:"选项1",
            sortOrder:sortOrder,
            sortOrder__key:"选项1",
            page:page,
            page__key:"选项1",
            language:"cn",
            collectLog:true,
            //分馆名称
            checkLibAll: false,
            checkedLibs: ['科贸学院', '广州图书馆'],
            libs: libOptions,
            lib__isIndeterminate: true,
        }
    },
    methods: {
        //图书类型
      handleCheckAllChange(val) {
        this.checkedTypes = val ? typesOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedTypesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.types.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.types.length;
      },
      //分馆名称
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
.advancedRetrieval{
    height: 100%;
    background-color: #f0f0f0;
    
    .img__box{
        background-color: #fff;
        height: 100px;
        line-height: 140px;
        img{
            width: 160px;
        }
    }
    .advancedRetrieval__content{
        text-align: left;
        background-color: #fff;
        margin-top: 10px;
        h3{
            text-indent: 1em;
            line-height: 40px;
        }
        .search_content{
            float: left;
            width: 60%;
            .grid-content{
                text-align: center;
                padding: 0 10px;
                box-sizing: border-box;
            }
            .placeholder__label{
                text-align: left;
                text-indent: 1em;
                line-height: 36px;
            }
            .search__label{
                line-height: 40px;
                text-align: center;
            }
            .el-input__inner{
                height: 36px;
                line-height: 36px;
            }
            .select_1 .el-select .el-input {
                width: 90px;
            }
            //  .select_2 .el-select .el-input{
            //     width: 120px;
            //  }
            .select_2 .el-select .el-input .el-input__inner{
                border-radius: 40px;
            }
            // .select_3 .el-select .el-input{
            //     width: 80px;
            // }
            .select_3 .el-select .el-input .el-input__inner{
                border-radius: 40px;
            }
            .el-input-group__prepend{
                border-top-left-radius: 40px;
                border-bottom-left-radius: 40px;
            }
            .el-input-group--prepend .el-input__inner{
                border-top-right-radius: 40px;
                border-bottom-right-radius: 40px;
            }
        }
        .btn__tool{
            float: left;
            width: 40%;
            height: 156px;
            position: relative;
            .el-button--primary{
                background-color: #0074D9;
                border-color: #0074D9;
                width: 100px;
                height: 36px;
                position: absolute;
                top: 10px;
                right: 20px;
            }
            .el-button--danger.is-plain{
                color: #E05858;
                background: #fef0f0;
                border-color: #E05858;
                 width: 100px;
                height: 36px;
                border-radius: 30px;
                position: absolute;
                top: 60px;
                right: 20px;
            }
            
        }
    }

    .options{
        margin-top: 15px;
        padding: 0 20px;
        box-sizing: border-box;
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
     .librarys{
        margin-top: 15px;
        padding: 0 20px;
        box-sizing: border-box;
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
}
</style>
