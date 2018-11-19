import Vue from 'vue'
import Router from 'vue-router'


import Entrance from "@/views/Entrance"
import Home from "@/components/Home" //首页
import AdvancedRetrieval from "@/components/AdvancedRetrieval" //高级检索
import NewBookRecom from "@/components/NewBookRecom" //新书推荐
import HotBooks from "@/components/HotBooks" //热门图书
import BorrowingAnalysis from "@/components/BorrowingAnalysis" //借阅分析
import AcademicSearch from "@/components/AcademicSearch" //学术搜索
import ReferenceConsultation from "@/components/ReferenceConsultation" //参考咨询
import BookRecommendation from "@/components/BookRecommendation" //图书荐购
import MyLibrary from "@/components/MyLibrary" //我的图书馆
import Login from "@/components/Login" //登录页
import SearchResult from '@/components/SearchResult' //搜索结果
import BookDetails from "@/components/BookDetails" //书目详情

import BorrowInfo from "@/components/library/borrowInfo" //我的图书馆-借阅信息
import UserInfo from "@/components/library/userInfo" //我的图书馆-用户中心
import BookRec from "@/components/library/bookRec" //我的图书馆-图书荐购
import ReadingAnalyze from "@/components/library/readingAnalyze" //我的图书馆-借阅分析
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {path:"/",component:Entrance , name:"Entrance",children:[
          {path:"/",component:Home , name:"Home"},
          {path:"/SearchResult",component:SearchResult , name:"SearchResult"},
          {path:"/AdvancedRetrieval",component:AdvancedRetrieval , name:"AdvancedRetrieval"},
          {path:"/NewBookRecom",component:NewBookRecom , name:"NewBookRecom"},
          {path:"/HotBooks",component:HotBooks , name:"HotBooks"},
          {path:"/BorrowingAnalysis",component:BorrowingAnalysis , name:"BorrowingAnalysis"},
          {path:"/AcademicSearch",component:AcademicSearch , name:"AcademicSearch"},
          {path:"/ReferenceConsultation",component:ReferenceConsultation , name:"ReferenceConsultation"},
          {path:"/BookRecommendation",component:BookRecommendation , name:"BookRecommendation"},
          {path:"/BookDetails",component:BookDetails , name:"BookDetails"},
          {path:"/MyLibrary",component:MyLibrary , name:"MyLibrary",children:[
              {path:"/MyLibrary/BorrowInfo",component:BorrowInfo , name:"BorrowInfo"},
              {path:"/MyLibrary/UserInfo",component:UserInfo , name:"UserInfo"},
              {path:"/MyLibrary/BookRec",component:BookRec , name:"BookRec"},
              {path:"/MyLibrary/ReadingAnalyze",component:ReadingAnalyze , name:"ReadingAnalyze"},

          ]},
      ]},
      {path:"/login",component:Login,name:"Login"}
  ]
})
