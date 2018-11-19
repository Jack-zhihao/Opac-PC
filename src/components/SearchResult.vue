<template>
    <div class="searchResult">
        <div class="search__box limit__width">
            <img :src="logo" alt="">
            <div class="search">
                <el-input v-model="search__key" placeholder="请输入内容"></el-input>
                <el-button type="primary" @click="search">搜索</el-button>
            </div>
        </div>
        <div class="classify limit__width">
            
            <div class="classify__pane" id="classify__pane">
                <span class="tip">分类&nbsp;&nbsp;</span>
                <div class="classify__box" id="classify__box">
                    <el-button type="text">全部（64654）</el-button>
                    <el-button type="text">马,列,毛,邓（5147）</el-button>
                    <el-button type="text">文学,宗教（6554）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                    <el-button type="text">社会科学（1321）</el-button>
                </div>
                 <el-button class="more__classify_btn" type="text" @click="moreClassify">更多 <i class="el-icon-arrow-down"></i></el-button>
            </div>
           <div class="trend__pane" id="trend__pane">
               <span class="tip">趋势&nbsp;&nbsp;</span>
               <div class="trand__box" id="trand__box">
               </div>
               <span class="title" id="title" style="display:none;">书目数量--<i>132654654</i></span>
               <el-button class="openTrand_btn" type="text" @click="openTrandMap">展开 <i class="el-icon-arrow-down"></i></el-button>
           </div>
        </div>
        <div class="searchResult__content limit__width">
            <div class="sidebar">
                <div class="hasChiose">
                     <p>已选</p>
                    <el-button type="text">全馆&nbsp;<i class="el-icon-close"></i></el-button>
                     <el-button type="text">全馆&nbsp;<i class="el-icon-close"></i></el-button>
                      <el-button type="text">全馆&nbsp;<i class="el-icon-close"></i></el-button>
                </div>
                <div class=" classify__option">
                    <p>分馆</p>
                    <div class=" option__pane" id="library__pane">
                        <div class=" option__content" id="library__content">
                           
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">4568</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18"><el-button type="text">广州第二十三中学</el-button></el-col>
                                <el-col :span="6" class="fontRight">88</el-col>
                            </el-row>
                          
                         
                        </div>
                    </div>
                    <el-button id="showLibBtn" type="text" @click="openLibrary" class="shouMore">显示更多...</el-button>
                </div>
                <div class=" classify__option">
                    <p>主题</p>
                    <div class=" option__pane" id="theme__pane">
                        <div class=" option__content" id="theme__content">
                             <el-row>
                                <el-col :span="18">中国</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">古典小说</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">清代</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">章回小说</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">长篇小说</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">红楼梦</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">文学研究</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">《红楼梦》研究</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">现代</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">连环画</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">科学</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                        </div>
                    </div>
                    <el-button id="showThemeBtn" type="text" @click="openTheme" class="shouMore">显示更多...</el-button>
                </div>
                <div class="classify__option">
                     <p>著者</p>
                    <div class=" option__pane"  style="height:auto;">
                        <div class=" option__content" >
                            <el-row>
                                <el-col :span="18">曹雪芹</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">高鹗</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">冯其庸</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">李希凡</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">周汝昌</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            
                        </div>
                    </div>
                </div>
                <div class="classify__option">
                     <p>文献类型</p>
                    <div class=" option__pane" id="type__pane" style="height:auto;">
                        <div class=" option__content" id="type__content">
                            <el-row>
                                <el-col :span="18">图书</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">音像资料</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">外文图书</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">期刊</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">非书资料</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">古籍</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <div class=" classify__option">
                    <p>出版日期</p>
                    <div class=" option__pane" id="publicDate__pane">
                        <div class=" option__content" id="publicDate__content">
                             <el-row>
                                <el-col :span="18">2018</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2017</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2016</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2015</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2014</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2013</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2012</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2011</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2010</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2009</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">2008</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                        </div>
                    </div>
                    <el-button id="showPublicDateBtn" type="text" @click="openPublicDate" class="shouMore">显示更多...</el-button>
                </div>
                <div class=" classify__option">
                    <p>语言种类</p>
                    <div class=" option__pane" id="langage__pane">
                        <div class=" option__content" id="langage__content">
                             <el-row>
                                <el-col :span="18">汉语</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">英语</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">日语</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">法语</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">俄语</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">德育</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">西班牙语</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">世界语</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">esp</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">jap</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="18">其他语言</el-col>
                                <el-col :span="6" class="fontRight">54</el-col>
                            </el-row>
                        </div>
                    </div>
                    <el-button id="showLangageBtn" type="text" @click="openLangage" class="shouMore">显示更多...</el-button>
                </div>
            </div>
            <div class="content">
                <div class="sreach__result">
                    <el-row>
                        <el-col :span="14">
                            <span class="title">检索结果</span>
                            &nbsp;&nbsp;&nbsp;
                            <span style="color:#0074D9;">红楼梦</span>
                            <span>共</span>
                            <span  style="color:#0074D9;">17247</span>
                            <span>条结果</span>
                            &nbsp;&nbsp;
                            <span>共耗时0.069秒</span>
                        </el-col>
                        <el-col :span="10">
                            <div style="height:40px;line-height:40px;padding-left:20px;">
                                排序选项&nbsp;
                                <el-select v-model="sort__key" placeholder="请选择">
                                    <el-option
                                    v-for="item in sort"
                                    :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>&nbsp;
                                排序方式&nbsp;
                                <el-select class="el-select_" v-model="sortWay__key" placeholder="请选择">
                                    <el-option
                                    v-for="item in sortWay"
                                    :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="book__list">
                    <div class="book">
                    <el-row>
                        <el-col :span="4">
                            <img :src="img_url" alt="">
                        </el-col>
                        <el-col :span="10">
                           <div class="bookInfo">
                                <p class="bookName" @click="getBookDetails">红楼梦</p>
                                <p>作者：<span class="author">施耐庵</span></p>
                                <p>出版发行项：<span class="public">广州图书馆</span></p>
                                <p>类型：<span  class="bookType">古典、文学</span></p>
                                <p>索书号：<span  class="sshao">Is4656464656</span></p>
                                <div class="book__tool">
                                    <el-button @click="switchPane('first1');book_details__show.book_details1 = true" type="text">在馆(5)/馆藏(14)</el-button>
                                    <el-button @click="switchPane('second1');book_details__show.book_details1 = true" type="text">图书概览</el-button>
                                    <el-button @click="switchPane('third1');book_details__show.book_details1 = true" type="text">内容简介</el-button> <!--@click="getBookDetails"-->
                                    <el-button  @click="switchPane('fourth1');book_details__show.book_details1 = true" type="text">著者简介</el-button>
                                </div>
                           </div>
                        </el-col>
                        <el-col :span="10">
                            <div class="operat">
                                <el-button type="primary" plain>预借</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <transition name="el-zoom-in-top">
                        <div class="book_details" v-show="book_details__show.book_details1">
                            <el-tabs v-model="booklist.activeName1">
                                <el-tab-pane label="在馆/馆藏" name="first1">
                                    <p class="subhead">馆藏信息</p>
                                    <el-table
                                        :data="book__details__table"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="sshao"
                                            label="索书号"
                                            width="220">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szguan"
                                            label="所在馆"
                                            width="220">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szgcdchi"
                                            label="所在馆藏地址"
                                            width="280">
                                        </el-table-column>
                                        <el-table-column
                                            fixed="right"
                                            prop="gcang"
                                            label="在馆/馆藏"
                                            width="100">
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="图书概览" name="second1">
                                    <p class="subhead">图书概览</p>
                                    <div class="bookInfo">
                                        <el-row>
                                            <el-col :span="4" class="bookInfo__title">
                                                <p>题名/索书号</p>
                                                <p>ISBN/价格</p>
                                                <p>主要著者</p>
                                                <p>出版发行</p>
                                                <p>载体形态</p>
                                            </el-col>
                                            <el-col :span="10">
                                                <p>红楼梦</p>
                                                <p>987-6454-542121 / CNY38.9</p>
                                                <p>( 清 ) 曹雪芹</p>
                                                <p>长春 吉林出版集团有限责任公司</p>
                                                <p>704页&nbsp;26cm</p>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="内容简介" name="third1">
                                    <p class="subhead">内容简介</p>
                                    <div class="content__introduce">曹雪芹的《红楼梦》是我国古代四大名著之一，也是世界文学经典巨著之一。《红楼梦》以贾、史、王、薛四大家族为背景，以贾宝玉、林黛玉爱情悲剧为主线，着重描写荣、宁两府由盛到衰的过程。全面地描写封建社会末期的人性世态及种种无法调和的矛盾。</div>
                                </el-tab-pane>
                                <el-tab-pane label="著者简介" name="fourth1">
                                    <p class="subhead">著者简介</p>
                                    <div class="author__introduce">
                                        曹雪芹（约1715年5月28日-约1763年2月12日） [1] ，名沾，字梦阮，号雪芹，又号芹溪、芹圃，中国古典名著《红楼梦》作者，关外祖籍辽宁铁岭，生于江宁（今南京），曹雪芹出身清代内务府正白旗包衣世家，他是江宁织造曹寅之孙 [1] ，曹顒之子（一说曹頫之子） [2] 。
                                        曹雪芹早年在南京江宁织造府亲历了一段锦衣纨绔、富贵风流的生活 [3] 。曾祖父曹玺任江宁织造；曾祖母孙氏做过康熙帝的保姆；祖父曹寅做过康熙帝的伴读和御前侍卫，后任江宁织造，兼任两淮巡盐监察御使，极受康熙宠信。雍正六年（1728年），曹家因亏空获罪被抄家，曹雪芹随家人迁回北京老宅。后又移居北京西郊，靠卖字画和朋友救济为生 [1] 。曹家从此一蹶不振，日渐衰微。经历了生活中的重大转折，曹雪芹深感世态炎凉，对封建社会有了更清醒、更深刻的认识。他蔑视权贵，远离官场，过着贫困如洗的艰难日子。曹雪芹素性放达，爱好广泛，对金石、诗书、绘画、园林、中医、织补、工艺、饮食等均有所研究。他以坚韧不拔的毅力，历经多年艰辛，终于创作出极具思想性、艺术性的伟大作品——《红楼梦》。晚年，曹雪芹移居北京西郊。生活更加穷苦，“满径蓬蒿”，“举家食粥酒常赊”。
                                        乾隆二十七年（1762年），幼子夭亡，他陷于过度的忧伤和悲痛，卧床不起。乾隆二十八年（1763年）除夕（2月12日），因贫病无医而逝。关于曹雪芹逝世的年份，另有乾隆二十九年除夕（1764年2月1日）、甲申（1764年）初春之说。
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                            <div class="close__pane" style="text-align:right">
                                <el-button type="text" @click="book_details__show.book_details1 = false">关闭</el-button>
                            </div>
                        </div>
                    </transition>
                   </div>
                </div>
                <div class="page">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import logo from "@/assets/logo.png";
import img_url from "@/assets/123.jpg";
const sort = [
    {label:"匹配度",value:"匹配度"},
    {label:"匹配度1",value:"匹配度1"},
    {label:"匹配度2",value:"匹配度2"}
    ]
const sortWay=[
    {label:"降序",value:"降序"},
    {label:"升序",value:"升序"},
]
const book__details__table=[
    {"sshao":"131213","szguan":"黄埔图书馆","szgcdchi":"香雪馆二楼","gcang":"4/12"},
    {"sshao":"131213","szguan":"黄埔图书馆","szgcdchi":"香雪馆二楼","gcang":"4/12"},
]
export default {
    name:"searchResult",
    data(){
        return {
            logo:logo,
            isOpenClassifyPane:false,
            search__key:"",
            isOpenTrandPane:false,

            isOpenLibrary:false, //打开library标识
            isOpenTheme:false,//打开theme标识
            isOpenPublicDate:false,//打开publicDate标识
            isOpenLangage:false,//打开langage_标识
            sort:sort,
            sort__key:"",
            sortWay:sortWay,
            sortWay__key:"降序",

            img_url:img_url, //图书列表
            booklist:{
                activeName1:"first1"
            },
            book__details__table:book__details__table, //单本图书馆藏信息
            book_details__show:{
                book_details1:false,
            },

            currentPage:4 //分页
        }
    },
    methods:{
        search(){
            console.log(this.search__key);
        },
        moreClassify(){
            let classify__pane =  document.getElementById("classify__pane");
            let classify__box = document.getElementById("classify__box");
            if(this.isOpenClassifyPane){
              classify__pane.style.height = "40px";
              document.getElementsByClassName("more__classify_btn")[0].innerHTML = '更多 <i class="el-icon-arrow-down"></i>'
            }else{
              classify__pane.style.height = classify__box.offsetHeight + "px";
              document.getElementsByClassName("more__classify_btn")[0].innerHTML = '收起 <i class="el-icon-arrow-up"></i>'
            };
            this.isOpenClassifyPane = !this.isOpenClassifyPane;
        },
        openTrandMap(){
            let trend__pane =  document.getElementById("trend__pane");
            let trand__box = document.getElementById("trand__box");
            let title = document.getElementById("title");
            if(this.isOpenTrandPane){
                trend__pane.style.height = "40px";
                document.getElementsByClassName("openTrand_btn")[0].innerHTML = '展开 <i class="el-icon-arrow-down"></i>';
                title.style.display = "none";
            }else{
                trend__pane.style.height = trand__box.offsetHeight + "px";
                document.getElementsByClassName("openTrand_btn")[0].innerHTML = '收起 <i class="el-icon-arrow-up"></i>';
                title.style.display = "block";
            };
                this.isOpenTrandPane = !this.isOpenTrandPane;
        },
        openLibrary(){
            this.sideBarFold({
                'obj1':document.getElementById('library__pane'),
                'obj2':document.getElementById('library__content'),
                'tip':this.isOpenLibrary,
                'minHeight':'340px',
                'btn':document.getElementById('showLibBtn')
                })
            this.isOpenLibrary = !this.isOpenLibrary;
        },
        openTheme(){
            this.sideBarFold({
                'obj1':document.getElementById('theme__pane'),
                'obj2':document.getElementById('theme__content'),
                'tip':this.isOpenTheme,
                'minHeight':'340px',
                'btn':document.getElementById('showThemeBtn')
                })
            this.isOpenTheme = !this.isOpenTheme;
        },
        openPublicDate(){
            this.sideBarFold({
                'obj1':document.getElementById('publicDate__pane'),
                'obj2':document.getElementById('publicDate__content'),
                'tip':this.isOpenPublicDate,
                'minHeight':'340px',
                'btn':document.getElementById('showPublicDateBtn')
                })
            this.isOpenPublicDate = !this.isOpenPublicDate;
        },
        openLangage(){
            this.sideBarFold({
                'obj1':document.getElementById('langage__pane'),
                'obj2':document.getElementById('langage__content'),
                'tip':this.isOpenLangage,
                'minHeight':'340px',
                'btn':document.getElementById('showLangageBtn')
                })
            this.isOpenLangage = !this.isOpenLangage;
        },
        sideBarFold(param){ //封装显示更多效果方法 obj1:变换高度dom,obj2：固定高度dom,tip:标识折叠状态，minHeight:最小高度,btn:按钮对象
             if(param.tip){
                param.obj1.style.height = param.minHeight;
                param.btn.innerHTML = '显示更多...';
            }else{
                param.obj1.style.height = param.obj2.offsetHeight + "px";
                param.btn.innerHTML = '收起 <i class="el-icon-arrow-up"></i>';
            };
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        getBookDetails(){
             this.$router.push({path:"/BookDetails",name: 'BookDetails',params:{ id:'2'}})
        },
        switchPane(val){ //公共方法，封装图书详情面板
            this.booklist.activeName1 = val;
        }
    },
    mounted(){
        
        let this_ = this;
        let year = [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
        let data = [1254,1365,3147,3547,5678,6547,8742,6578,4646,1254,1365,3147,3547,5678,6547,6842,6578,4646,2656,9873]
        let myChart = this_.$echarts.init(document.getElementById('trand__box'));
        let option = {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow' 
                    }
                },
                grid: {
                    top: '28%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : year,
                        axisTick: {
                            alignWithLabel: true
                        },
                        splitLine:{
                            show:false
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '60%',
                        data:data
                    }
                ]
            };
        // myChart.setOption(option);
    }
}
</script>
<style lang="less">
.searchResult{
    height: 100%;
    background-color: #f0f0f0;
    .search__box{
        height: 100px;
        line-height: 100px;
         background-color: #fff;
        img{
            vertical-align: middle;
            width: 120px;
        }
         .search{
            display: inline-block;
            vertical-align: bottom;
            width: 780px;
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
    }
    .classify{
        // height: 112px;
        background-color: #fff;
        margin-top: 10px;
        .classify__pane{
            text-align: left;
            padding: 0 90px 0 50px;
            box-sizing: border-box;
            height: 40px;
            overflow: hidden;
            position: relative;
            .tip{
                position: absolute;
                top: 10px;
                left: 10px;
            }
            .el-button--text{
                color: #575757;
            }
            .more__classify_btn{
                position: absolute;
                top: 10px;
                right: 28px;
                padding: 0;
            }
            .el-button--text{
                color: #575757;
            }
        }
        .trend__pane{
            text-align: left;
            padding: 0 90px 0 50px;
            box-sizing: border-box;
            height: 40px;
            overflow: hidden;
            position: relative;
            .tip{
                position: absolute;
                top: 10px;
                left: 10px;
            }
            .openTrand_btn{
                position: absolute;
                top: 10px;
                right: 28px;
                padding: 0;
            }
            .title{
                position: absolute;
                top: 10px;
                left: 20%;
            }
            .trand__box{
                height: 180px;
            }
        }
    }
    .searchResult__content{
        margin-top: 10px;
        background-color: #fff;
        .sidebar{
            width: 24%;
            float: left;
            background: #fff;;
            text-align: left;
            padding: 0 1em;
            box-sizing: border-box;
            /deep/ .el-button{
                padding: 6px 0;
                color: #575757;
            }
            .hasChiose{
                height: 76px;
                p{
                    margin:0;
                    line-height: 36px;
                    font-weight: 600;
                }
                .el-button{
                    padding: 4px 12px;
                }
                .el-button--text{
                    background-color: #F0F0F0;
                    color: #575757;
                    padding: 4px 12px;
                }
            }
            .classify__option{
                p{
                    margin:0;
                    line-height: 36px;
                    font-weight: 600;
                }
                .option__pane{
                    height: 340px;
                    overflow: hidden;
                    .option__content{
                        // max-height: 680px;
                        // overflow: auto;
                        .el-row{
                            line-height: 34px;
                            color: #575757;
                            .el-col{
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            .fontRight{
                                text-align: right
                            }
                        }
                    } 
                }
            }
        
        
    }
        .content{
            width: 74.5%;
            margin-left: 1.5%;
            float: left;
            background: #fff;
            color: #575757;
            .sreach__result{
                height: 40px;
                text-align: left;
                span{
                    line-height: 40px;
                    color: #575757;
                }
                .title{
                    font-weight: 600;
                    margin-left: 1em;
                }
                .el-select{
                    .el-input{
                        width: 120px;
                        .el-input__inner{
                            border-radius: 30px;
                            height: 32px;
                            line-height: 32px;
                        }
                    }
                }
                .el-select_{
                     .el-input{
                        width: 80px;
                    }
                }
            }
            .book__list{
                .book{
                    position: relative;
                    .el-row{
                        padding: 10px 0;
                        .el-col{
                            padding: 5px;
                            img{
                                width: 110px;
                                height: 146px;
                            }
                            .bookInfo{
                                text-align: left;
                                p{
                                    line-height: 24px;
                                    color: #575757;
                                };
                                .bookName{
                                    font-weight: 600;
                                    cursor: pointer;
                                }
                                .book__tool{
                                    .el-button--text{
                                        color:#0074D9;
                                        padding: 5px 0px;
                                    }
                                }
                            }
                            .operat{
                                position: relative;
                                .el-button{
                                    position: absolute;
                                    top:5px;
                                    right: 20px;
                                    border-radius: 35px;
                                    padding: 10px 25px;
                                }
                            }
                        }
                    }
                    .book_details{
                          text-align: left;
                        .el-tabs{
                            .el-tabs__header{
                                display: none;
                            }
                            .el-tabs__content{
                                margin: 0;
                                height: 200px;
                                overflow: auto;
                                padding: 0 1em;
                                box-sizing: border-box;
                                .subhead{
                                    color: #575757;
                                    font-size: 14px;
                                    line-height: 40px;
                                  
                                    font-weight: 600;
                                }
                                td{
                                    padding: 5px 0;
                                }
                                .bookInfo{
                                   
                                    p{
                                        line-height: 26px;
                                        color:#575757
                                    };
                                     .bookInfo__title{
                                        p{
                                            color: #8f8f8f;
                                        }
                                    }
                                }
                                .content__introduce{
                                    line-height: 26px;
                                    color: #8E8E8E;
                                }
                                .author__introduce{
                                    color: #8E8E8E;
                                    line-height: 26px;
                                }
                            }
                        }
                    }
                }
            }
            .page{
                padding: 40px 0;
                .el-pagination{
                    .el-pager{
                        .number{
                            // border: 1px solid #0074D9;
                            border-radius: 4px;
                            font-size: 14px;
                            min-width: 33px;
                            height: 36px;
                            line-height: 36px;
                            color:#575757;
                            border: 1px solid #fff;
                            margin: 0 5px;
                        }
                        .number:hover{
                            border-color: #0074D9;
                            color: #0074D9;
                        }
                        .active{
                            border-color: #0074D9;
                            background: #0074D9;
                            color: #fff;
                        }
                        .active:hover{
                            border-color: #0074D9;
                            color: #fff;
                        }
                    
                    }
                    button{
                        min-width: 33px;
                        height: 36px;
                        line-height: 36px;
                    }
                    .el-pagination__jump{
                        height: 36px;
                        line-height: 36px;
                    }
                }
            }
        }
    }
}
</style>

