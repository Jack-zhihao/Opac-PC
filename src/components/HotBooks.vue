<template>
    <div class="HotBooks">
        <div class="search__box limit__width">
            <img :src="logo__img" alt="">
            <div class="option__div">
                &nbsp;
                <span class="tit">分馆限制 </span>
                <el-select v-model="librarys__key" placeholder="请选择">
                    <el-option
                    v-for="item in librarys"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                &nbsp;
                <span class="tit">文献类型 </span>
                <el-select class="el-select-type" v-model="types__key" placeholder="请选择">
                    <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="classify limit__width" id="classify__pane">
            <span class="title">分类</span>
            <div class="classify__option"  id="classify__box">
                <el-button class="active" type="text">全部 ( 15564 ) </el-button>
                <el-button type="text">文学 ( 15564 ) </el-button>
                <el-button type="text">科技 ( 15564 ) </el-button>
                <el-button type="text">古典 ( 15564 ) </el-button>
                <el-button type="text">农业 ( 15564 ) </el-button>
                <el-button type="text">艺术 ( 15564 ) </el-button>
                <el-button type="text">交通 ( 15564 ) </el-button>
                <el-button type="text">科研 ( 15564 ) </el-button>
                <el-button type="text">航天 ( 15564 ) </el-button>
                <el-button type="text">文学 ( 15564 ) </el-button>
                <el-button type="text">科技 ( 15564 ) </el-button>
                <el-button type="text">古典 ( 15564 ) </el-button>
                <el-button type="text">农业 ( 15564 ) </el-button>
                <el-button type="text">艺术 ( 15564 ) </el-button>
                <el-button type="text">交通 ( 15564 ) </el-button>
                <el-button type="text">科研 ( 15564 ) </el-button>
                <el-button type="text">航天 ( 15564 ) </el-button>
                <el-button type="text">文学 ( 15564 ) </el-button>
                <el-button type="text">科技 ( 15564 ) </el-button>
                <el-button type="text">古典 ( 15564 ) </el-button>
                <el-button type="text">农业 ( 15564 ) </el-button>
                <el-button type="text">艺术 ( 15564 ) </el-button>
                <el-button type="text">交通 ( 15564 ) </el-button>
                <el-button type="text">科研 ( 15564 ) </el-button>
                <el-button type="text">航天 ( 15564 ) </el-button>
                <el-button type="text">文学 ( 15564 ) </el-button>
                <el-button type="text">科技 ( 15564 ) </el-button>
                <el-button type="text">古典 ( 15564 ) </el-button>
                <el-button type="text">农业 ( 15564 ) </el-button>
                <el-button type="text">艺术 ( 15564 ) </el-button>
                <el-button type="text">交通 ( 15564 ) </el-button>
                <el-button type="text">科研 ( 15564 ) </el-button>
                <el-button type="text">航天 ( 15564 ) </el-button>
            </div>
            <el-button class="more more__classify_btn" type="text" @click="moreClassify">更多 <i class="el-icon-arrow-down"></i></el-button>
        </div>
        <div class="NewBookRecom__content limit__width">
            <div class="title">
                <span class="title-txt">新书推荐</span>&nbsp;&nbsp;&nbsp;&nbsp;共 <span>17107</span> 条结果
            </div>
            <div class="book__list">
                    <div class="book">
                    <el-row>
                        <el-col :span="6">
                            <img :src="img_url" alt="">
                        </el-col>
                        <el-col :span="14">
                           <div class="bookInfo">
                                <p class="bookName">红楼梦</p>
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
                        <el-col :span="4">
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
                                            width="100">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szguan"
                                            label="所在馆"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szgcdchi"
                                            label="所在馆藏地址"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            fixed="right"
                                            prop="gcang"
                                            label="在馆/馆藏"
                                            width="80">
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
                                            <el-col :span="20">
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
                   <div class="book">
                    <el-row>
                        <el-col :span="6">
                            <img :src="img_url" alt="">
                        </el-col>
                        <el-col :span="14">
                           <div class="bookInfo">
                                <p class="bookName">红楼梦</p>
                                <p>作者：<span class="author">施耐庵</span></p>
                                <p>出版发行项：<span class="public">广州图书馆</span></p>
                                <p>类型：<span  class="bookType">古典、文学</span></p>
                                <p>索书号：<span  class="sshao">Is4656464656</span></p>
                                <div class="book__tool">
                                    <el-button @click="switchPane('first1');book_details__show.book_details2 = true" type="text">在馆(5)/馆藏(14)</el-button>
                                    <el-button @click="switchPane('second1');book_details__show.book_details2 = true" type="text">图书概览</el-button>
                                    <el-button @click="switchPane('third1');book_details__show.book_details2 = true" type="text">内容简介</el-button> <!--@click="getBookDetails"-->
                                    <el-button  @click="switchPane('fourth1');book_details__show.book_details2 = true" type="text">著者简介</el-button>
                                </div>
                           </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="operat">
                                <el-button type="primary" plain>预借</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <transition name="el-zoom-in-top">
                        <div class="book_details" v-show="book_details__show.book_details2">
                            <el-tabs v-model="booklist.activeName1">
                                <el-tab-pane label="在馆/馆藏" name="first1">
                                    <p class="subhead">馆藏信息</p>
                                    <el-table
                                        :data="book__details__table"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="sshao"
                                            label="索书号"
                                            width="100">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szguan"
                                            label="所在馆"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szgcdchi"
                                            label="所在馆藏地址"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            fixed="right"
                                            prop="gcang"
                                            label="在馆/馆藏"
                                            width="80">
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
                                            <el-col :span="20">
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
                                <el-button type="text" @click="book_details__show.book_details2 = false">关闭</el-button>
                            </div>
                        </div>
                    </transition>
                   </div>
                    <div class="book">
                    <el-row>
                        <el-col :span="6">
                            <img :src="img_url" alt="">
                        </el-col>
                        <el-col :span="14">
                           <div class="bookInfo">
                                <p class="bookName">红楼梦</p>
                                <p>作者：<span class="author">施耐庵</span></p>
                                <p>出版发行项：<span class="public">广州图书馆</span></p>
                                <p>类型：<span  class="bookType">古典、文学</span></p>
                                <p>索书号：<span  class="sshao">Is4656464656</span></p>
                                <div class="book__tool">
                                    <el-button @click="switchPane('first1');book_details__show.book_details3 = true" type="text">在馆(5)/馆藏(14)</el-button>
                                    <el-button @click="switchPane('second1');book_details__show.book_details3 = true" type="text">图书概览</el-button>
                                    <el-button @click="switchPane('third1');book_details__show.book_details3 = true" type="text">内容简介</el-button> <!--@click="getBookDetails"-->
                                    <el-button  @click="switchPane('fourth1');book_details__show.book_details3 = true" type="text">著者简介</el-button>
                                </div>
                           </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="operat">
                                <el-button type="primary" plain>预借</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <transition name="el-zoom-in-top">
                        <div class="book_details" v-show="book_details__show.book_details3">
                            <el-tabs v-model="booklist.activeName1">
                                <el-tab-pane label="在馆/馆藏" name="first1">
                                    <p class="subhead">馆藏信息</p>
                                    <el-table
                                        :data="book__details__table"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="sshao"
                                            label="索书号"
                                            width="100">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szguan"
                                            label="所在馆"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szgcdchi"
                                            label="所在馆藏地址"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            fixed="right"
                                            prop="gcang"
                                            label="在馆/馆藏"
                                            width="80">
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
                                            <el-col :span="20">
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
                                <el-button type="text" @click="book_details__show.book_details3 = false">关闭</el-button>
                            </div>
                        </div>
                    </transition>
                   </div>
                   <div class="book">
                    <el-row>
                        <el-col :span="6">
                            <img :src="img_url" alt="">
                        </el-col>
                        <el-col :span="14">
                           <div class="bookInfo">
                                <p class="bookName">红楼梦</p>
                                <p>作者：<span class="author">施耐庵</span></p>
                                <p>出版发行项：<span class="public">广州图书馆</span></p>
                                <p>类型：<span  class="bookType">古典、文学</span></p>
                                <p>索书号：<span  class="sshao">Is4656464656</span></p>
                                <div class="book__tool">
                                    <el-button @click="switchPane('first1');book_details__show.book_details4 = true" type="text">在馆(5)/馆藏(14)</el-button>
                                    <el-button @click="switchPane('second1');book_details__show.book_details4 = true" type="text">图书概览</el-button>
                                    <el-button @click="switchPane('third1');book_details__show.book_details4 = true" type="text">内容简介</el-button> <!--@click="getBookDetails"-->
                                    <el-button  @click="switchPane('fourth1');book_details__show.book_details4 = true" type="text">著者简介</el-button>
                                </div>
                           </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="operat">
                                <el-button type="primary" plain>预借</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <transition name="el-zoom-in-top">
                        <div class="book_details" v-show="book_details__show.book_details4">
                            <el-tabs v-model="booklist.activeName1">
                                <el-tab-pane label="在馆/馆藏" name="first1">
                                    <p class="subhead">馆藏信息</p>
                                    <el-table
                                        :data="book__details__table"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="sshao"
                                            label="索书号"
                                            width="100">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szguan"
                                            label="所在馆"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="szgcdchi"
                                            label="所在馆藏地址"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            fixed="right"
                                            prop="gcang"
                                            label="在馆/馆藏"
                                            width="80">
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
                                            <el-col :span="20">
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
                                <el-button type="text" @click="book_details__show.book_details4 = false">关闭</el-button>
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
</template>
<script>

import img_url from "@/assets/123.jpg";
import logo__img from "@/assets/logo.png"
const librarys = [
    {label:"广州图书馆",value:"广州图书馆"},
    {label:"广州图书馆2",value:"广州图书馆2"},
    {label:"广州图书馆3",value:"广州图书馆3"},
    {label:"广州图书馆4",value:"广州图书馆4"},
];
const types = [
    {label:"图书",value:"图书"},
    {label:"期刊",value:"期刊"},
    {label:"音像",value:"音像"}
];
const book__details__table=[
    {"sshao":"131213","szguan":"黄埔图书馆","szgcdchi":"香雪馆二楼","gcang":"4/12"},
    {"sshao":"131213","szguan":"黄埔图书馆","szgcdchi":"香雪馆二楼","gcang":"4/12"},
]
export default {
    name:"HotBooks",
    data(){
        return{
            logo__img:logo__img,
            librarys:librarys,
            librarys__key:"广州图书馆",
            types:types,
            types__key:"图书",
            isOpenClassifyPane:false,
            img_url:img_url,
            booklist:{
                activeName1:"first1"
            },
            book__details__table:book__details__table, //单本图书馆藏信息
            book_details__show:{
                book_details1:false,
                book_details2:false,
                book_details3:false,
                book_details4:false
            },
            currentPage:4,
        }
    },
    methods:{
        switchPane(val){ //公共方法，封装图书详情面板
            this.booklist.activeName1 = val;
        },
        moreClassify(){
            let classify__pane =  document.getElementById("classify__pane");
            let classify__box = document.getElementById("classify__box");
            if(this.isOpenClassifyPane){
              classify__pane.style.height = "56px";
              document.getElementsByClassName("more__classify_btn")[0].innerHTML = '更多 <i class="el-icon-arrow-down"></i>'
            }else{
              classify__pane.style.height = classify__box.offsetHeight + 16 + "px";
              document.getElementsByClassName("more__classify_btn")[0].innerHTML = '收起 <i class="el-icon-arrow-up"></i>'
            };
            this.isOpenClassifyPane = !this.isOpenClassifyPane;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    }
}
</script>
<style lang="less">
.HotBooks{
    .search__box{
        background-color: #fff;
        height: 100px;
        line-height: 100px;
        img{
            width: 120px;
            vertical-align: middle;
        }
        .option__div{
            display: inline-block;
            vertical-align: bottom;
            .tit{
                color: #575757;
                margin-left: 10px;
            }
            .el-range-editor.el-input__inner{
                height: 36px;
                line-height: 36px;
                border-radius: 40px;
                width: 320px;
                vertical-align: sub;
            }
            .el-select{
                .el-input__inner{
                     height: 36px;
                    line-height: 36px;
                    border-radius: 40px;
                    width: 240px;
                    vertical-align: baseline;
                }
            }
            .el-select-type{
                .el-input__inner{
                     height: 36px;
                    line-height: 36px;
                    border-radius: 40px;
                    width: 120px;
                }
            }
        }
    }
    .classify{
        height: 56px;
        padding: 8px 60px 8px 40px;
        box-sizing: border-box;
        background-color: #fff;
        margin-top: 10px;
        overflow: hidden;
        position: relative;
        .title{
            position: absolute;
            left: 10px;
            top: 19px;
        }
        .more{
            position: absolute;
            top: 20px;
            right: 10px;
            padding: 0px 10px;
            color: #575757
        }
        .classify__option{
            text-align: left;
            .el-button{
                padding: 2px 8px;
                margin: 10px 6px;
                color: #575757;
                 border-radius: 20px;
            }
            .el-button.active{
                background-color: #0074D9;
                color: #fff;
               
            }
        }
    }
    .NewBookRecom__content{
        margin-top: 10px;
        background-color: #fff;
        text-align: left;
        padding: 20px;
        box-sizing: border-box;
        .title{
            font-size:14px;
                color: #8F8F8F;
            span{
                color: #0074D9
            }
            .title-txt{
                color:#333;
                font-weight: 600;
                font-size: 16px;
            }

        }
        .book__list{
                .book{
                    display: inline-block;
                    width: 50%;
                    position: relative;
                    padding: 10px;
                    box-sizing: border-box;
                    .el-row{
                        padding: 10px 0;
                        .el-col{
                            // padding: 5px;
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
                                    font-size: 16px;
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
                            position: absolute;
                            top: 180px;
                            left: 0;
                            width: 96%;
                            margin: 0 auto;
                            background-color: #fff;
                            z-index: 999;
                            border: 1px solid #eee;
                            box-shadow: 1px 1px 5px #ddd;
                        .el-tabs{
                            .el-tabs__header{
                                display: none;
                            }
                            .el-tabs__content{
                                margin: 0;
                                height: 140px;
                                overflow: auto;
                                padding: 0 1em;
                                box-sizing: border-box;
                                .subhead{
                                    color: #575757;
                                    font-size: 14px;
                                    line-height: 24px;
                                    font-weight: 600;
                                }
                                td,th{
                                    padding: 5px 0;
                                }
                                th{
                                    background-color: #f0f0f0;
                                }
                                .bookInfo{
                                    p{
                                        line-height: 22px;
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
                        .close__pane{
                            .el-button{
                                padding: 8px 0;
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        .page{
                padding: 40px 0;
                text-align: center;
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
</style>
