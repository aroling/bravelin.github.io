webpackJsonp([2,1],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){this.path="/"+e.replace(/-/g,"/"),this.name=e,this.component=function(t){i.e(0,function(i){var n=[i(50)("./"+e.replace(/-/g,"/")+".vue")];t.apply(null,n)}.bind(this))}}var r=i(7),a=n(r),c=i(6),o=n(c),l=i(20),u=n(l),d=i(1);a.default.use(o.default),window._g=d.Global;var v=d.Global,p=["home","notes","summary","about","working-project-gztjjweb","learning-css-secrects-1","learning-css-secrects-2","learning-css-secrects-3","learning-css-secrects-4","learning-css-secrects-5","learning-css-secrects-6","working-canvas-turnTableDraw"],f=[];p.forEach(function(e){f.push(new s(e))}),f.push({path:"*",redirect:{name:"home"}});var m=new o.default({linkActiveClass:"active",routes:f});m.beforeEach(function(e,t,i){v.loading=!0,i()}),m.afterEach(function(e){setTimeout(function(){v.loading=!1},500),/^(home|css|canvas|about)$/.test(e.name)&&(v.showArticleNavMenu=!1,v.nextArticle="",v.prevArticle="")}),new a.default({router:m,render:function(e){return e(u.default)}}).$mount("#app")},1:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=i(3),r=n(s);t.Global={loading:!1,tip:null,showArticleNavMenu:!1,prevArticle:"",nextArticle:"",setArticleNavMenu:function(e){var t=this;t.showArticleNavMenu=!0;for(var i=r.default.list,n=0;n<i.length;n++)if(i[n].routerName==e){n>0?t.prevArticle=i[n-1].routerName:t.prevArticle="",n<i.length-1?t.nextArticle=i[n+1].routerName:t.nextArticle="";break}},tipShow:function(e,t){var i=this.tip;i||(i=this.tip=document.querySelector("#app-tip")),i.children[0].innerHTML=e,i.classList.add("active"),setTimeout(function(){i.classList.remove("active")},t||3e3)}}},2:function(e,t,i){e.exports=i.p+"static/img/header.a45dcce.jpg"},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={author:"zhangjialin",list:[{id:"0",type:"工作总结",category:"css",title:"赣州统计信息网前端页面的重构",description:"14年第一次接手网站项目，做的匆忙而粗糙。年初重构了整个网站，记录下重构的过程。",date:"2016/05/15",routerName:"working-project-gztjjweb"},{id:"1",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之一：前言",description:"由W3C CSS工作组特邀专家、CSS语言设计者之一的Lea Verou撰写。被百姓网前段架构师誉之为'十年来最重要的CSS图书，没有之一'的一本进阶书。前言中主要是编程理念，特性检测与CSS编码技巧。",date:"2016/10/30",routerName:"learning-css-secrects-1"},{id:"2",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之二：背景与边框",description:"此书第二章的内容。分别描述了半透明边框、多重边框、背景定位、边框内圆角以及多种多样的条纹背景效果实现技巧。",date:"2016/11/03",routerName:"learning-css-secrects-2"},{id:"3",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之三：形状",description:"此书第三章的内容。主要讲解了自适应椭圆、平行四边形、菱形图片、切角效果、梯形效果及饼图的实现方案。",date:"2016/11/08",routerName:"learning-css-secrects-3"},{id:"4",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之四：视觉效果",description:"此书第四章的内容。",date:"2016/11/20",routerName:"learning-css-secrects-4"},{id:"5",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之五：字体排印",description:"此书第五章的内容。",date:"2016/12/05",routerName:"learning-css-secrects-5"},{id:"6",type:"工作总结",category:"canvas",title:"转盘抽奖的前端实现",description:"介绍转盘抽奖页面实现过程中转盘的绘制、旋转度数的计算方案及前端使用随机数模拟的效果。",date:"2016/12/07",routerName:"working-canvas-turnTableDraw"},{id:"7",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之六：用户体验",description:"此书第六章的内容。",date:"2016/12/20",routerName:"learning-css-secrects-6"}]}},4:function(e,t){},5:function(e,t){},8:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=i(21),r=n(s),a=i(1);e.exports={data:function(){return{global:a.Global,isFixedTop:!1,showSizeMenu:!1}},components:{spinner:r.default},mounted:function(){var e=this;e.$nextTick(function(){e.global.loading=!0,document.querySelector("header").style.opacity=1,document.querySelector("body>footer").style.opacity=1,window.addEventListener("scroll",function(){e.doHandlerScroll()})})},methods:{doHandlerScroll:function(){var e=document.body;this.isFixedTop=e&&e.scrollTop>188},doClickSideMenuWrap:function(e){e.stopPropagation()},doHideSideMenu:function(){this.showSizeMenu=!1},doClickMenuBtn:function(e){this.showSizeMenu=!this.showSizeMenu,e.stopPropagation()}}}},20:function(e,t,i){var n,s;i(5),n=i(8);var r=i(44);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=n},21:function(e,t,i){var n,s;i(4);var r=i(37);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=n},37:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"spinner-wrap"},[i("div",{staticClass:"spinner"},[i("div",{staticClass:"spinner-container container1"},[i("div",{staticClass:"circle1"}),e._v(" "),i("div",{staticClass:"circle2"}),e._v(" "),i("div",{staticClass:"circle3"}),e._v(" "),i("div",{staticClass:"circle4"})]),e._v(" "),i("div",{staticClass:"spinner-container container2"},[i("div",{staticClass:"circle1"}),e._v(" "),i("div",{staticClass:"circle2"}),e._v(" "),i("div",{staticClass:"circle3"}),e._v(" "),i("div",{staticClass:"circle4"})]),e._v(" "),i("div",{staticClass:"spinner-container container3"},[i("div",{staticClass:"circle1"}),e._v(" "),i("div",{staticClass:"circle2"}),e._v(" "),i("div",{staticClass:"circle3"}),e._v(" "),i("div",{staticClass:"circle4"})])])])}]}},44:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{on:{click:function(t){e.doHideSideMenu()}}},[i("header",[e._m(0),e._v(" "),i("nav",{class:{fixedTop:e.isFixedTop}},[i("ul",[i("li",[i("router-link",{attrs:{to:{name:"about"}}},[e._v("About Me")])]),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"summary"}}},[e._v("Summary")])]),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"notes"}}},[e._v("Notes")])]),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"home"}}},[e._v("Home")])])])])]),e._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")]),e._v(" "),i("spinner",{directives:[{name:"show",rawName:"v-show",value:e.global.loading,expression:"global.loading"}]}),e._v(" "),i("div",{staticClass:"side-menu-icon",class:{fixedTop:e.isFixedTop},on:{click:function(t){e.doClickMenuBtn(t)}}}),e._v(" "),i("nav",{staticClass:"side-menu",class:{active:e.showSizeMenu},on:{click:function(t){e.doClickSideMenuWrap(t)}}},[i("ul",[i("li",[i("router-link",{attrs:{to:{name:"home"}}},[e._v("Home")])]),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"notes"}}},[e._v("Notes")])]),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"summary"}}},[e._v("Summary")])]),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"about"}}},[e._v("About Me")])])])]),e._v(" "),i("nav",{directives:[{name:"show",rawName:"v-show",value:e.global.showArticleNavMenu,expression:"global.showArticleNavMenu"}],staticClass:"article-nav-menu"},[e.global.prevArticle?i("router-link",{staticClass:"back",attrs:{title:"前一篇",to:{name:e.global.prevArticle}}}):e._e(),e._v(" "),e.global.nextArticle?i("router-link",{staticClass:"next",attrs:{title:"后一篇",to:{name:e.global.nextArticle}}}):e._e()])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"logo"}),e._v(" "),i("div",{staticClass:"title"},[i("h1",[e._v("linz blog")]),e._v(" "),i("h2",[e._v("生命可以随心所欲，但不能随波逐流")])])])}]}}});