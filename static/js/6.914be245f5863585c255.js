webpackJsonp([6,17],{36:function(t,e){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var e=0;e<t.length;e++)hljs.highlightBlock(t[e])})}}},58:function(t,e,n){var s,a;s=n(36);var i=n(77);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},77:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("《CSS 揭秘》笔记之八：过渡与动画")]),t._v(" "),t._m(0),t._v(" "),n("footer",[t._v("2017年01月22日")]),t._v(" "),n("comments")])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("缓动效果")]),t._v(" "),n("p",[t._v("缓动曲线指定了动画过程在整段时间中是如何推进的。默认并不是匀速效果，而是ease。内置的调速函数有："),n("strong",[t._v("ease-in、ease-out、ease-in-out、linear")])]),t._v(" "),n("p",[n("strong",[t._v("弹跳动画")]),t._v("的关键是在小球下落的过程中是加速的（ease-in），弹起转变方向是速度是减速的（ease-out）：")]),t._v(" "),n("div",{staticClass:"exp bounce"},[n("div",{staticClass:"ball"})]),t._v(" "),n("pre",[n("code",[t._v(".ball{\n  animation: bounce 3s ease-in infinite;\n}\n@keyframes bounce {\n  60%, 80%, to { transform: translateY(300px); animation-timing-function: ease-out; }\n  70%{ transform: translateY(200px); }\n  90%{ transform: translateY(250px); }\n}")])]),t._v(" "),n("p",[n("strong",[t._v("cubic-bezier(x1, y1, x2, y2)")]),t._v("允许我们自定义调速函数。四个参数代表两个控制锚点的坐标值。曲线的两个端点分别固定在(0,0)和(1,1)")])])}]}}});