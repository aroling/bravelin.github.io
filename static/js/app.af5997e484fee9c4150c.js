webpackJsonp([2,1],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){this.path="/"+e.replace(/-/g,"/"),this.name=e,this.component=function(t){r.e(0,function(r){var n=[r(77)("./"+e.replace(/-/g,"/")+".vue")];t.apply(null,n)}.bind(this))}}var i=r(5),a=n(i),s=r(10),c=n(s),l=r(9),d=n(l),u=r(33),p=n(u),v=r(1);a.default.use(c.default),a.default.use(d.default),a.default.http.options.emulateJSON=!0,a.default.http.headers.common["X-APICloud-AppId"]="A6931492233958";var f=r(34);a.default.component("comments",f);var m=r(13);a.default.filter("timeFormatter",m),window._g=v.Global;var h=v.Global,g=["articles","topics","comments","about","topicArticles","404","working-project-gztjjweb","learning-css-secrects-1","learning-css-secrects-2","learning-css-secrects-3","learning-css-secrects-4","learning-css-secrects-5","learning-css-secrects-6","learning-css-secrects-7","learning-css-secrects-8","working-canvas-turnTableDraw","poetry-1"],y=[];g.forEach(function(e){y.push(new o(e))}),y.push({path:"/",redirect:{name:"articles"}}),y.push({path:"*",redirect:{name:"404"}});var _=new c.default({linkActiveClass:"active",routes:y});_.beforeEach(function(e,t,r){h.loading=!0,h.currPage=e.name,h.currPageParams=e.query,r()}),_.afterEach(function(e){setTimeout(function(){h.loading=!1},500),/^(home|css|canvas|about)$/.test(e.name)&&(h.showArticleNavMenu=!1,h.nextArticle="",h.prevArticle="")}),new a.default({router:_,render:function(e){return e(p.default)}}).$mount("#app")},1:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(3),i=n(o),a=r(4);t.Global={loading:!1,tip:null,showArticleNavMenu:!1,prevArticle:"",nextArticle:"",currArticleId:"",currArticleName:"",currPage:"",currPageParams:"",appKey:"A6931492233958UZ861E0A3C-95CD-E681-E0CA-E70127FFECE7UZ",setArticleNavMenu:function(e){var t=this;t.showArticleNavMenu=!0;for(var r=i.default.list,n=0;n<r.length;n++)if(r[n].routerName==e){t.currArticleId=r[n].id,t.currArticleName=r[n].title,n>0?t.prevArticle=r[n-1].routerName:t.prevArticle="",n<r.length-1?t.nextArticle=r[n+1].routerName:t.nextArticle="";break}a.eventHub.$emit("refresh-comments")},tipShow:function(e,t){var r=this.tip;r||(r=this.tip=document.querySelector("#app-tip")),r.children[0].innerHTML=e,r.classList.add("active"),setTimeout(function(){r.classList.remove("active")},t||3e3)},sha:function(e){function t(e,t){var r=e<<t|e>>>32-t;return r}function r(e){var t,r,n="";for(t=7;t>=0;t--)r=e>>>4*t&15,n+=r.toString(16);return n}function n(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}var o,i,a,s,c,l,d,u,p,v=new Array(80),f=1732584193,m=4023233417,h=2562383102,g=271733878,y=3285377520;e=n(e);var _=e.length,C=new Array;for(i=0;i<_-3;i+=4)a=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),C.push(a);switch(_%4){case 0:i=2147483648;break;case 1:i=e.charCodeAt(_-1)<<24|8388608;break;case 2:i=e.charCodeAt(_-2)<<24|e.charCodeAt(_-1)<<16|32768;break;case 3:i=e.charCodeAt(_-3)<<24|e.charCodeAt(_-2)<<16|e.charCodeAt(_-1)<<8|128}for(C.push(i);C.length%16!=14;)C.push(0);for(C.push(_>>>29),C.push(_<<3&4294967295),o=0;o<C.length;o+=16){for(i=0;i<16;i++)v[i]=C[o+i];for(i=16;i<=79;i++)v[i]=t(v[i-3]^v[i-8]^v[i-14]^v[i-16],1);for(s=f,c=m,l=h,d=g,u=y,i=0;i<=19;i++)p=t(s,5)+(c&l|~c&d)+u+v[i]+1518500249&4294967295,u=d,d=l,l=t(c,30),c=s,s=p;for(i=20;i<=39;i++)p=t(s,5)+(c^l^d)+u+v[i]+1859775393&4294967295,u=d,d=l,l=t(c,30),c=s,s=p;for(i=40;i<=59;i++)p=t(s,5)+(c&l|c&d|l&d)+u+v[i]+2400959708&4294967295,u=d,d=l,l=t(c,30),c=s,s=p;for(i=60;i<=79;i++)p=t(s,5)+(c^l^d)+u+v[i]+3395469782&4294967295,u=d,d=l,l=t(c,30),c=s,s=p;f=f+s&4294967295,m=m+c&4294967295,h=h+l&4294967295,g=g+d&4294967295,y=y+u&4294967295}return p=r(f)+r(m)+r(h)+r(g)+r(y),p.toLowerCase()}}},2:function(e,t,r){e.exports=r.p+"static/img/header.a45dcce.jpg"},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={author:"zhangjialin",list:[{id:"0",type:"工作总结",category:"css",title:"赣州统计信息网前端页面的重构",description:"14年第一次接手网站项目，做的匆忙而粗糙。年初重构了整个网站，记录下重构的过程。",date:"2016/05/15",routerName:"working-project-gztjjweb"},{id:"1",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之一：前言",description:"由W3C CSS工作组特邀专家、CSS语言设计者之一的Lea Verou撰写。被百姓网前段架构师誉之为'十年来最重要的CSS图书，没有之一'的一本进阶书。前言中主要是编程理念，特性检测与CSS编码技巧。",date:"2016/10/30",routerName:"learning-css-secrects-1",topicId:"0"},{id:"2",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之二：背景与边框",description:"此书第二章的内容。分别描述了半透明边框、多重边框、背景定位、边框内圆角以及多种多样的条纹背景效果实现技巧。",date:"2016/11/03",routerName:"learning-css-secrects-2",topicId:"0"},{id:"3",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之三：形状",description:"此书第三章的内容。主要讲解了自适应椭圆、平行四边形、菱形图片、切角效果、梯形效果及饼图的实现方案。",date:"2016/11/08",routerName:"learning-css-secrects-3",topicId:"0"},{id:"4",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之四：视觉效果",description:"此书第四章的内容。",date:"2016/11/20",routerName:"learning-css-secrects-4",topicId:"0"},{id:"5",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之五：字体排印",description:"此书第五章的内容。",date:"2016/12/05",routerName:"learning-css-secrects-5",topicId:"0"},{id:"6",type:"工作总结",category:"canvas",title:"转盘抽奖的前端实现",description:"介绍转盘抽奖页面实现过程中转盘的绘制、旋转度数的计算方案及前端使用随机数模拟的效果。",date:"2016/12/07",routerName:"working-canvas-turnTableDraw"},{id:"7",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之六：用户体验",description:"此书第六章的内容。",date:"2016/12/20",routerName:"learning-css-secrects-6",topicId:"0"},{id:"8",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之七：结构与布局",description:"此书第七章的内容。",date:"2017/01/10",routerName:"learning-css-secrects-7",topicId:"0"},{id:"9",type:"工作总结",category:"js",title:"JavaScript中浮点数计算的问题",description:"",date:"2017/01/14",routerName:""},{id:"10",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之八：过渡与动画",description:"此书第八章的内容。",date:"2017/01/22",routerName:"learning-css-secrects-8",topicId:"0"},{id:"11",type:"诗词集",category:"poetry",title:"春江花月夜",description:"唐朝诗人张若虚的名作。",date:"2016/11/05",routerName:"poetry-1",topicId:"1"}]}},4:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(5),i=n(o);t.eventHub=new i.default},7:function(e,t){},8:function(e,t){},13:function(e,t){"use strict";e.exports=function(e,t){var r=new Date(e);t=t||"yyyy/MM/dd hh:mm:ss";var n={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t}},14:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(35),i=n(o),a=r(1),s=r(4);e.exports={data:function(){return{global:a.Global,isFixedTop:!1,showSizeMenu:!1,noteName:"",noteContent:"",isReply:!1,replyName:"",replyId:""}},components:{spinner:i.default},mounted:function(){var e=this;e.$nextTick(function(){e.global.loading=!0,document.querySelector("header").style.opacity=1,document.querySelector("body>footer").style.opacity=1,window.addEventListener("scroll",function(){e.doHandlerScroll()})}),s.eventHub.$on("pop-reply-modal",e.doPopReplyModal)},beforeDestroy:function(){s.eventHub.$off("pop-reply-modal",this.doPopReplyModal)},methods:{doPopReplyModal:function(e){var t=this;t.isReply=!0,t.replyName=e.name,t.replyId=e.id,t.doShowNoteModal()},doClickNoteBtn:function(){var e=this;e.isReply=!1,e.doShowNoteModal()},doSubmitNoteContent:function(){var e=this,t=a.Global,r=e.noteName.trim(),n=e.noteContent.trim(),o=e.$refs.noteWrap;if(0==r.length&&!e.isReply)return void e.$refs.noteNameEl.focus();if(0==n.length)return void e.$refs.noteContentEl.focus();e.noteName=r,e.noteContent=n,o.classList.add("loading");var i=+new Date,c=a.Global.sha(a.Global.appKey+i)+"."+i;e.$http.post("https://d.apicloud.com/mcm/api/comments",{articleId:e.isReply?"":t.currArticleId,userName:e.isReply?"linz":r,commentContent:n,articleName:e.isReply?"":t.currArticleName,pageRouter:e.isReply?"":t.currPage,replyId:e.isReply?e.replyId:""},{headers:{"X-APICloud-AppKey":c}}).then(function(r){o.classList.remove("loading"),200==r.status?(s.eventHub.$emit("refresh-comments"),t.tipShow("提交成功！"),e.doCloseNoteModal()):t.tipShow("提交失败！请稍后再试！")},function(){o.classList.remove("loading"),t.tipShow("提交失败！请稍后再试！")})},doShowNoteModal:function(){var e=this,t=this.$refs.noteWrap;e.noteName="",e.noteContent="",t.style.display="block",setTimeout(function(){t.classList.add("active")},200)},doCloseNoteModal:function(){var e=this.$refs.noteWrap;e.classList.remove("active"),setTimeout(function(){e.style.display="none"},600)},doHandlerScroll:function(){var e=document.body;this.isFixedTop=e&&e.scrollTop>188},doClickSideMenuWrap:function(e){e.stopPropagation()},doHideSideMenu:function(){this.showSizeMenu=!1},doClickMenuBtn:function(e){this.showSizeMenu=!this.showSizeMenu,e.stopPropagation()}}}},15:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(32),i=n(o),a=r(1),s=r(4);t.default={data:function(){return{dataList:[],timer:null,hasStarted:!1,showDelBtn:!1,showReplyBtn:!1}},props:{queryArticle:{type:Boolean,required:!1,default:!0}},created:function(){var e=this,t=a.Global.currPageParams;"true"==t.del&&(e.showDelBtn=!0),"true"==t.reply&&(e.showReplyBtn=!0),console.log("showReplyBtn："+e.showReplyBtn),e.queryArticle||e.refresh(),s.eventHub.$on("refresh-comments",e.refresh)},beforeDestroy:function(){var e=this;s.eventHub.$off("refresh-comments",e.refresh),e.timer&&clearTimeout(e.timer)},methods:{doTimerRefresh:function(){var e=this;e.timer=setTimeout(function(){e.refresh(),e.doTimerRefresh()},2e4)},doReply:function(e,t){s.eventHub.$emit("pop-reply-modal",{id:e,name:t})},doDelete:function(e){s.eventHub.$emit("pop-confirm-del-modal",e)},refresh:function(){var e=this,t=+new Date,r=a.Global,n=r.sha(r.appKey+t)+"."+t,o={order:"createdAt DESC"};e.queryArticle&&(o.where={articleId:r.currArticleId}),e.$http.get("https://d.apicloud.com/mcm/api/comments",{headers:{"X-APICloud-AppKey":n},params:{filter:(0,i.default)(o)}}).then(function(t){if(200==t.status){var r,n,o,i=t.body||[],a=[],s={};for(r=i.length-1;r>=0;r--)n=i[r],n.replyId?(o=a[s[n.replyId]],o&&(o.reply=n)):(s[n.id]=a.length,a.push(n));a=a.reverse(),e.dataList=a,e.hasStarted||(e.hasStarted=!0)}})}}}},33:function(e,t,r){var n,o;r(8),n=r(14);var i=r(70);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=n},34:function(e,t,r){var n,o;n=r(15);var i=r(69);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=n},35:function(e,t,r){var n,o;r(7);var i=r(58);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=n},58:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner-wrap"},[r("div",{staticClass:"spinner"},[r("div",{staticClass:"spinner-container container1"},[r("div",{staticClass:"circle1"}),e._v(" "),r("div",{staticClass:"circle2"}),e._v(" "),r("div",{staticClass:"circle3"}),e._v(" "),r("div",{staticClass:"circle4"})]),e._v(" "),r("div",{staticClass:"spinner-container container2"},[r("div",{staticClass:"circle1"}),e._v(" "),r("div",{staticClass:"circle2"}),e._v(" "),r("div",{staticClass:"circle3"}),e._v(" "),r("div",{staticClass:"circle4"})]),e._v(" "),r("div",{staticClass:"spinner-container container3"},[r("div",{staticClass:"circle1"}),e._v(" "),r("div",{staticClass:"circle2"}),e._v(" "),r("div",{staticClass:"circle3"}),e._v(" "),r("div",{staticClass:"circle4"})])])])}]}},69:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{directives:[{name:"show",rawName:"v-show",value:e.dataList.length>0,expression:"dataList.length>0"}],staticClass:"comments"},e._l(e.dataList,function(t){return r("li",{key:t.id},[r("div",[r("span",[e._v(e._s(e._f("timeFormatter")(t.createdAt)))]),e._v(e._s(t.userName)+"\n      "),e.showDelBtn?r("a",{on:{click:function(r){e.doDelete(t.id)}}},[e._v("删除")]):e._e(),e._v(" "),e.showReplyBtn&&!t.reply?r("a",{staticClass:"reply",on:{click:function(r){e.doReply(t.id,t.userName)}}},[e._v("回复")]):e._e()]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.queryArticle&&t.articleName&&t.pageRouter,expression:"!queryArticle && item.articleName && item.pageRouter"}]},[e._v('在文章"'),r("router-link",{attrs:{to:{name:t.pageRouter}}},[e._v(e._s(t.articleName))]),e._v('"处留言：')]),e._v(" "),r("div",[e._v(e._s(t.commentContent))]),e._v(" "),t.reply?[r("div",[e._v(e._s(e._f("timeFormatter")(t.reply.createdAt))+" linz回复 @"+e._s(t.userName))]),e._v(" "),r("div",[e._v(e._s(t.reply.commentContent))])]:e._e()],!0)}))},staticRenderFns:[]}},70:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{on:{click:function(t){e.doHideSideMenu()}}},[r("header",[e._m(0),e._v(" "),r("nav",{class:{fixedTop:e.isFixedTop}},[r("ul",[r("li",[r("router-link",{attrs:{to:{name:"about"}}},[e._v("About Me")])]),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"comments"}}},[e._v("Comments")])]),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"topics"}}},[e._v("Topics")])]),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"articles"}}},[e._v("Articles")])]),e._v(" ")])])]),e._v(" "),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")]),e._v(" "),r("spinner",{directives:[{name:"show",rawName:"v-show",value:e.global.loading,expression:"global.loading"}]}),e._v(" "),r("div",{staticClass:"side-menu-icon",class:{fixedTop:e.isFixedTop},on:{click:function(t){e.doClickMenuBtn(t)}}}),e._v(" "),r("nav",{staticClass:"side-menu",class:{active:e.showSizeMenu},on:{click:function(t){e.doClickSideMenuWrap(t)}}},[r("ul",[r("li",[r("router-link",{attrs:{to:{name:"articles"}}},[e._v("Articles")])]),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"topics"}}},[e._v("Topics")])]),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"comments"}}},[e._v("Comments")])]),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"about"}}},[e._v("About Me")])])])]),e._v(" "),r("nav",{directives:[{name:"show",rawName:"v-show",value:e.global.showArticleNavMenu,expression:"global.showArticleNavMenu"}],staticClass:"article-nav-menu"},[e.global.prevArticle?r("router-link",{staticClass:"back",attrs:{title:"前一篇",to:{name:e.global.prevArticle}}}):e._e(),e._v(" "),e.global.nextArticle?r("router-link",{staticClass:"next",attrs:{title:"后一篇",to:{name:e.global.nextArticle}}}):e._e(),e._v(" "),r("a",{staticClass:"note",attrs:{title:"留言"},on:{click:function(t){e.doClickNoteBtn()}}})]),e._v(" "),r("div",{ref:"noteWrap",staticClass:"note-wrap modal"},[r("div",[r("h3",[e._v(e._s(e.isReply?"回复@"+e.replyName:"留言")),r("span",{on:{click:function(t){e.doCloseNoteModal()}}},[e._v("X")])]),e._v(" "),r("div",{staticClass:"content"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isReply,expression:"!isReply"}],staticClass:"clear-fix"},[r("label",[e._v("您的称呼：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.noteName,expression:"noteName"}],ref:"noteNameEl",attrs:{type:"text",placeholder:"your name",maxlength:"20"},domProps:{value:e._s(e.noteName)},on:{input:function(t){t.target.composing||(e.noteName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"clear-fix"},[r("label",[e._v(e._s(e.isReply?"回复的话":"您想说的话")+"：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.noteContent,expression:"noteContent"}],ref:"noteContentEl",attrs:{placeholder:"message content",maxlength:"2000"},domProps:{value:e._s(e.noteContent)},on:{input:function(t){t.target.composing||(e.noteContent=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"footer"},[r("a",{staticClass:"ok",on:{click:function(t){e.doSubmitNoteContent()}}},[e._v("提交")]),e._v(" "),r("a",{staticClass:"cancel",on:{click:function(t){e.doCloseNoteModal()}}},[e._v("取消")])]),e._v(" "),e._m(1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"logo"}),e._v(" "),r("div",{staticClass:"title"},[r("h1",[e._v("linz blog")]),e._v(" "),r("h2",[e._v("你只管努力，剩下的交给时光。")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-mask"},[r("div",[r("i"),r("i"),r("i"),r("i"),r("i")])])}]}},78:function(e,t){}});