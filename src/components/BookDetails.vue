<template>
    <div class="bookDetails limit__width">
        <div class="book__pane">
            <p class="title">图书详情</p>
            <div class="book__info">
                <el-row>
                    <el-col :span="4">
                        <div class="book__img">
                            <img :src="img_url" alt="">
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <p class="bookName">节俭的力量:超越时限富足一生的生活方式</p>
                        <p>著者：<span class="author">(英)慕斯尔.斯悗尔斯</span></p>
                        <p>出版发行项：<span>北京 北京电邮大学出版社 2009   版次 5</span></p>
                        <p>ISBN(ISSN)/价格：<span>978-7-5635-1995-2 / CNY28.00</span></p>
                        <p>类型：<span>图书 / 艰苦朴素</span></p>
                        <p>中图分类：<span>B825-49</span></p>
                        <p  class="hiddenText">图书简介：<span id="briefIntroduct">{{brief}}</span> (&nbsp;<el-button type="text" id="showBriefBtn" @click="isShowBriefTxt">展开</el-button>&nbsp;)</p>
                        <p class="hiddenText">著者简介：<span id="authorIntroduct">{{author}}</span> (&nbsp;<el-button type="text" id="showAuthorBtn"  @click="isShowAuthorTxt">展开</el-button>&nbsp;)</p>
                    </el-col>
                    <el-col :span="4">
                        <div class="tool">
                            <el-popover
                                    placement="bottom"
                                    width="110"
                                    trigger="click" style="min-width:50px;">
                                    <span style="color:#999999">分享到...</span><br/>
                                    <el-button class="el-button-share" @click="shareToXl('http://placekitten.com/g/200/300');" style="color:#575757" type="text"><i class="el-icon-share_" style="width:14px;vertical-align: middle;"><img style="width:100%" src="../assets/icon_xl.png" alt=""></i>&nbsp;&nbsp;新浪微博</el-button><br/>
                                    <el-button class="el-button-share" @click="shareToDouban('红楼梦','http://placekitten.com/g/200/300')" style="color:#575757" type="text"><i class="el-icon-share_" style="width:14px;vertical-align: middle;"><img style="width:100%" src="../assets/icon_db.png" alt=""></i>&nbsp;&nbsp;豆瓣</el-button><br/>
                                    <el-button class="el-button-share" @click="shareToQq('红楼梦','http://placekitten.com/g/200/300')" style="color:#575757" type="text"><i class="el-icon-share_" style="width:14px;vertical-align: middle;"><img style="width:100%" src="../assets/icon_kj.png" alt=""></i>&nbsp;&nbsp;Qzone</el-button>
                                    <el-button slot="reference" round style="color:#333"><i class="el-icon-share" style="color:#1b80dc"></i>&nbsp;分享</el-button>
                            </el-popover>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="tabs">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="图书目录" name="first">
                        <div class="catalog pane">
                            {{catalog__message}}
                           <div>
                               <p class="book__title">中文序：萧条时代，有一种力量</p>
                               <p class="title__font">前言：你要学会节俭</p>
                               <div >
                                   <p class="chapter">第一章&nbsp;&nbsp;&nbsp;节俭，就是管好你手中的钱</p>
                                   <el-row>
                                       <el-col :span="6">
                                          <p> 工作，积累财富的管道<br/>工资不多的人也能节俭吗</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 只有金钱并不代表富有<br/>真正的富人什么样</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 财富，是积累而成的<br/>节俭是重要责任</p>
                                       </el-col>
                                       <el-col :span="6">
                                            <p>留足你过冬的粮食<br/>节俭的家庭是和睦的</p>
                                       </el-col>
                                   </el-row>
                               </div>
                               <div >
                                   <p class="chapter">第一章&nbsp;&nbsp;&nbsp;节俭，就是管好你手中的钱</p>
                                   <el-row>
                                       <el-col :span="6">
                                          <p> 工作，积累财富的管道<br/>工资不多的人也能节俭吗</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 只有金钱并不代表富有<br/>真正的富人什么样</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 财富，是积累而成的<br/>节俭是重要责任</p>
                                       </el-col>
                                       <el-col :span="6">
                                            <p>留足你过冬的粮食<br/>节俭的家庭是和睦的</p>
                                       </el-col>
                                   </el-row>
                               </div>
                               <div >
                                   <p class="chapter">第一章&nbsp;&nbsp;&nbsp;节俭，就是管好你手中的钱</p>
                                   <el-row>
                                       <el-col :span="6">
                                          <p> 工作，积累财富的管道<br/>工资不多的人也能节俭吗</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 只有金钱并不代表富有<br/>真正的富人什么样</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 财富，是积累而成的<br/>节俭是重要责任</p>
                                       </el-col>
                                       <el-col :span="6">
                                            <p>留足你过冬的粮食<br/>节俭的家庭是和睦的</p>
                                       </el-col>
                                   </el-row>
                               </div>
                               <div >
                                   <p class="chapter">第一章&nbsp;&nbsp;&nbsp;节俭，就是管好你手中的钱</p>
                                   <el-row>
                                       <el-col :span="6">
                                          <p> 工作，积累财富的管道<br/>工资不多的人也能节俭吗</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 只有金钱并不代表富有<br/>真正的富人什么样</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 财富，是积累而成的<br/>节俭是重要责任</p>
                                       </el-col>
                                       <el-col :span="6">
                                            <p>留足你过冬的粮食<br/>节俭的家庭是和睦的</p>
                                       </el-col>
                                   </el-row>
                               </div>
                               <div >
                                   <p class="chapter">第一章&nbsp;&nbsp;&nbsp;节俭，就是管好你手中的钱</p>
                                   <el-row>
                                       <el-col :span="6">
                                          <p> 工作，积累财富的管道<br/>工资不多的人也能节俭吗</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 只有金钱并不代表富有<br/>真正的富人什么样</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 财富，是积累而成的<br/>节俭是重要责任</p>
                                       </el-col>
                                       <el-col :span="6">
                                            <p>留足你过冬的粮食<br/>节俭的家庭是和睦的</p>
                                       </el-col>
                                   </el-row>
                               </div>
                               <div >
                                   <p class="chapter">第一章&nbsp;&nbsp;&nbsp;节俭，就是管好你手中的钱</p>
                                   <el-row>
                                       <el-col :span="6">
                                          <p> 工作，积累财富的管道<br/>工资不多的人也能节俭吗</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 只有金钱并不代表富有<br/>真正的富人什么样</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 财富，是积累而成的<br/>节俭是重要责任</p>
                                       </el-col>
                                       <el-col :span="6">
                                            <p>留足你过冬的粮食<br/>节俭的家庭是和睦的</p>
                                       </el-col>
                                   </el-row>
                               </div>
                               <div >
                                   <p class="chapter">第一章&nbsp;&nbsp;&nbsp;节俭，就是管好你手中的钱</p>
                                   <el-row>
                                       <el-col :span="6">
                                          <p> 工作，积累财富的管道<br/>工资不多的人也能节俭吗</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 只有金钱并不代表富有<br/>真正的富人什么样</p>
                                       </el-col>
                                       <el-col :span="6">
                                           <p> 财富，是积累而成的<br/>节俭是重要责任</p>
                                       </el-col>
                                       <el-col :span="6">
                                            <p>留足你过冬的粮食<br/>节俭的家庭是和睦的</p>
                                       </el-col>
                                   </el-row>
                               </div>
                           </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="馆藏信息" name="second">
                        <div class="collect pane">
                            {{collect__message}}
                            <div>
                                 <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%">
                                    <el-table-column
                                    fixed
                                    prop="txma"
                                    label="条形码"
                                    width="150">
                                    </el-table-column>
                                    <el-table-column
                                    prop="sshao"
                                    label="索书号"
                                    width="150">
                                    </el-table-column>
                                    <el-table-column
                                    prop="jqsming"
                                    label="卷期说明"
                                    width="200">
                                    </el-table-column>
                                    <el-table-column
                                    prop="xzguan"
                                    label="现在馆"
                                    width="200">
                                    </el-table-column>
                                    <el-table-column
                                    prop="cchi"
                                    label="藏址"
                                    width="250">
                                    </el-table-column>
                                    <el-table-column
                                    prop="ztai"
                                    label="状态"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    fixed="cjbiao"
                                    label="层架标"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="100">
                                    <template slot-scope="scope">
                                        <el-button @click="handleCollectClick(scope.row)" type="text" size="small">预借</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table>
                             
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="豆瓣书评" name="third">
                        <div class="grade pane">
                            {{grade__message}}
                           <div>
                               <el-row>
                                   <el-col :span="2">
                                       <div  class="user_face">
                                           <img :src="user_img" alt="">
                                       </div>
                                   </el-col>
                                   <el-col :span="12">
                                       <div><span class="userName">karmen</span>&nbsp;<span class="classes"></span>&nbsp;<span class="date">2018-11-09</span></div>
                                       <p class="gradeTxt">读书的快乐 生活中,有一种收获,让人一生受益,那就是读书的收获;人生中,有一种经历,让人难以忘怀,那就是读书的经历.是读书,让我朦胧的世界中,学会...</p>
                                   </el-col>
                                   <el-col :span="10">

                                   </el-col>
                               </el-row>
                           </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import XL__LOGO from "@/assets/icon_xl.png";
import DB__LOGO from "@/assets/icon_db.png"
import KJ__LOGO from "@/assets/icon_kj.png"
import img_url from "@/assets/123.jpg";
const brief = "(英)塞谬尔·斯迈尔斯出版发行项：北京 北京邮电大学出版社 2009 版次：5ISBN(ISSN)/价格: 978-7-5635-1955-2 / CNY28.00类型：图书 / 艰苦朴素中图分类：B825-49图书简介：《节俭的力量》在倡导节俭、健康生活方式的同时，给节俭以全新的诠释：节俭不仅是一种理财方式，更是一种生活方式。它不是让人守着金";
const author = "(英)塞谬尔·斯迈尔斯出版发行项：北京 北京邮电大学出版社 2009 版次：5ISBN(ISSN)/价格: 978-7-5635-1955-2 / CNY28.00类型：图书 / 艰苦朴素中图分类：B825-49图书简介：《节俭的力量》在倡导节俭、健康生活方式的同时，给节俭以全新的诠释：节俭不仅是一种理财方式，更是一种生活方式。它不是让人守着金";
const tableData = [
    {
        "txma":99900068,
        "sshao":"F0-49/1",
        "jqsming":"",
        "xzguan":"拓迪书吧",
        "cchi":"拓迪智能科技二楼",
        "ztai":"在馆",
        "cjbiao":"无层架标",
    },
    {
        "txma":99900068,
        "sshao":"F0-49/1",
        "jqsming":"",
        "xzguan":"拓迪书吧",
        "cchi":"拓迪智能科技二楼",
        "ztai":"在馆",
        "cjbiao":"无层架标",
    }
]
import user_img from "@/assets/user.jpg"
export default {
    name:"bookDetails",
    data(){
        return {
            img_url:img_url,
            brief:brief,
            isShowBrief:false, //是否打开图书简介全部文字
            briefTxt:"",
            author:author,
            isShowAuthor:false,//是否打开作者简介全部文字
            authorTxt:"",

            activeName:"first", //tabs

            catalog__message:"",//catalog
            collect__message:"",//collect
            grade__message:"",//grade
            tableData:tableData,//馆藏列表

            user_img:user_img
        }
    },
    methods:{
        isShowBriefTxt(){
          let isShowBtn = document.querySelectorAll("#showBriefBtn")[0];
          let txtDom = document.querySelectorAll("#briefIntroduct")[0];
            if(this.isShowBrief){
                this.brief =this.briefTxt;
                isShowBtn.innerText = "收起";
            }else{
                if(this.briefTxt.length > 120){
                    this.brief =this.briefTxt.replace(/\s+/g, "").substr(0, 120) + "...";
                     isShowBtn.innerText = "展开";
                }
            }
           this.isShowBrief = !this.isShowBrief;
        },
        isShowAuthorTxt(){
            let isShowBtn = document.querySelectorAll("#showAuthorBtn")[0];
            let txtDom = document.querySelectorAll("#authorIntroduct")[0];
            if(this.isShowAuthor){
                this.author =this.authorTxt;
                isShowBtn.innerText = "收起";
            }else{
                if(this.authorTxt.length > 120){
                    this.author =this.authorTxt.replace(/\s+/g, "").substr(0, 120) + "...";
                    isShowBtn.innerText = "展开";
                }
            }
           this.isShowAuthor = !this.isShowAuthor;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleCollectClick(row){
             console.log(row);
        },
        //分享
        shareToXl(picurl){
            const title = "这本书非常不错，我推荐一下给大家看看。";
            const url= window.location.href;
            const  sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
           
             window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
        },
        
        //分享到qq空间
        shareToQq(bookname,picurl){
            let url = "http://www.baidu.com";
            const sharesinastring = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+url+"&title=好书推荐《"+bookname+"》&summary=读书之法，在循序而渐进，熟读而精思。 —— 朱熹&site={{100 * 100}}&pics="+picurl
            window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100'); 
        },
        //分享到豆瓣
        shareToDouban(bookname,picurl){
            event.preventDefault();
            var _shareUrl = 'http://shuo.douban.com/!service/share?';
                _shareUrl += 'href=' + encodeURIComponent("https://www.baodu.com");    //分享的链接
                _shareUrl += '&name=' + encodeURIComponent("好书推荐《"+bookname+"》");    //分享的标题
                _shareUrl += '&image=' + encodeURIComponent(picurl||'');    //分享的图片
                window.open(_shareUrl,'newwindow','height=400,width=400,top=100,left=100');
        }
    },
    mounted(){
        this.briefTxt = document.querySelectorAll("#briefIntroduct")[0].innerText;
        this.authorTxt = document.querySelectorAll("#authorIntroduct")[0].innerText;
        this.isShowBriefTxt();
        this.isShowAuthorTxt();
    }
}
</script>
<style lang="less">
.bookDetails{
    background-color: #fff;
    margin-top: 10px;
    text-align: left;
    padding: 1em;
    box-sizing: border-box;
    .book__pane{
        .title{
            font-weight: 600;
            line-height: 40px;
            height: 40px;
            font-size: 16px;
            color: #333;
        }
        .book__info{
            .book__img{
                padding: 5px;
                box-sizing: border-box;
                img{
                    width: 174px;
                    height: 254px;
                } 
            }
            .bookName{
                font-weight: 600;    
            }
            p{
                line-height: 26px;
                font-size: 14px;
            }
            .hiddenText{
                 .el-button{
                    padding: 4px 0px;
                }
            }
            .tool{
                text-align:right;
                margin-right: 40px;
                .el-button{
                    padding: 5px 7px;
                    border: none;
                } 
            }
        }
        .tabs{
            margin-top: 20px;
             color: #575757;
            .el-tabs{
                .el-tabs__header{
                    border: 1px solid #dedede;
                    background-color: #f1f1f1;
                    .el-tabs__nav{
                        margin-left: 10px;
                    }
                    .el-tabs__nav-wrap::after{
                        height: 0px; 
                        background-color: transparent; 
                        background-color:#fff;
                    }

                    .el-tabs__active-bar{
                        background-color:#fff;
                    }
                    .el-tabs__item.is-active{
                            background: #fff;
                            border-left: 1px solid #dedede;
                            border-right:1px solid #dedede;
                    }
                    .el-tabs__item{
                        padding: 0 20px !important;
                       
                    }
                    // .el-tabs--top .el-tabs__item.is-top:nth-child(1){
                    //     padding-left:20px;;
                    // }
                    //  .el-tabs--top .el-tabs__item.is-top:last-child {
                    //      padding-right:20px;;
                    //  }
                }
            }
            .pane{
                min-height: 200px;
                font-size: 14px;
            }
            .catalog{
                p{
                     line-height: 24px;
                }
                .book__title,.title__font,.chapter{
                   
                    font-weight: 600;
                };
                .title__font{
                    line-height: 40px;
                }
                .chapter{
                    padding: 20px 0 5px;;
                }
            }
            .collect{
                .el-table{
                    border: none;
                    td,th{
                        padding: 4px 0; 
                        border: none;
                     }
                     .el-button--small{
                         padding: 4px 10px;
                         background-color: #0074D9;
                         border-radius: 20px;
                         color: #fff;
                     }
                }
            }
            .grade{
                .user_face{
                    text-align: center;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                }
                .userName{
                    color:#3377AA
                }
                .date{
                    color: #666666;
                }
                .gradeTxt{
                    margin-top: 4px;
                    color: #111;
                    line-height: 22px;
                }
            }
        }
    }
}
 
 
 #el-popover-6955{
    min-width: 50px;
    
    .el-button-share{
         padding: 4px 6px;
    } 
  }
</style>

