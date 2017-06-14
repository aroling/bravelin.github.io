webpackJsonp([0,33],{1:function(t,e){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var e=0;e<t.length;e++)hljs.highlightBlock(t[e])})}}},2:function(t,e,n){var a,r;a=n(1);var i=n(3);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=a},3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},staticRenderFns:[]}},19:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(2),i=a(r);t.exports={extends:i.default,mounted:function(){var t=this;t.$nextTick(function(){t.initLinearGradient(),t.initRadialGradient()})},methods:{initLinearGradient:function(){var t=this,e=t.$refs,n=250,a=250;t.drawLinearGradient(e.c1,{x0:0,y0:0,x1:n,y1:0}),t.drawLinearGradient(e.c2,{x0:0,y0:0,x1:0,y1:a}),t.drawLinearGradient(e.c3,{x0:0,y0:0,x1:n,y1:a}),t.drawLinearGradient(e.c4,{x0:0,y0:0,x1:0,y1:a/2})},drawLinearGradient:function(t,e){var n=t.getContext("2d"),a=n.createLinearGradient(e.x0,e.y0,e.x1,e.y1);a.addColorStop(0,"blue"),a.addColorStop(.25,"white"),a.addColorStop(.5,"purple"),a.addColorStop(.75,"red"),a.addColorStop(1,"yellow"),n.fillStyle=a,n.fillRect(0,0,t.width,t.height)},initRadialGradient:function(){var t=this,e=t.$refs.c5,n=e.getContext("2d"),a=e.width,r=e.height,i=n.createRadialGradient(a/2,r,1,a/2,0,128);i.addColorStop(0,"blue"),i.addColorStop(.25,"white"),i.addColorStop(.5,"purple"),i.addColorStop(.75,"red"),i.addColorStop(1,"yellow"),n.fillStyle=i,n.fillRect(0,0,e.width,e.height)}}}},50:function(t,e,n){e=t.exports=n(8)(),e.push([t.id,".gradient{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:5px!important}.gradient>canvas{width:250px;height:250px;border:1px solid #e0e0e0;margin-bottom:15px}",""])},52:function(t,e,n){var a=n(50);"string"==typeof a&&(a=[[t.id,a,""]]);n(9)(a,{});a.locals&&(t.exports=a.locals)},65:function(t,e,n){var a,r;n(52),a=n(19);var i=n(94);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=a},94:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("Canvas学习笔记之二：绘制")]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("Canvas的绘制模型")]),t._v(" "),n("p",[t._v("浏览器按照如下步骤来绘制图形：")]),t._v(" "),n("p",[t._v("(1)、将图形绘制到一个无限大的透明位图中，在绘制时遵循当前的填充模式、描边模式以及线条样式；")]),t._v(" "),n("p",[t._v("(2)、使用当前绘图环境的阴影设定将图形的阴影绘制到另外的一幅位图中；")]),t._v(" "),n("p",[t._v("(3)、将阴影中的每一个像素的alpha分量乘以绘图环境对象的globalAlpha属性值；")]),t._v(" "),n("p",[t._v("(4)、将绘有阴影的位图与经过剪辑区域剪切过的canvas进行图像合成，使用当前的合成模式参数；")]),t._v(" "),n("p",[t._v("(5)、将图形的每一个像素颜色分量，乘以绘图环境对象的globalAlpha属性值；")]),t._v(" "),n("p",[t._v("(6)、将绘有图形的位图，合成到当前经过剪辑区域剪切过的canvas位图之上，使用当前的合成操作符。")]),t._v(" "),n("p",[t._v("只有在启用阴影时才会执行第2~4步。")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("矩形的绘制")]),t._v(" "),n("p",[t._v("Canvas提供如下3个api，分别用于矩形的清除、描边、填充：")]),t._v(" "),t._m(0),t._v(" "),n("h3",{staticClass:"title"},[t._v("渐变色")]),t._v(" "),n("p",[t._v("Canvas支持线性（linear）渐变与放射（radial）渐变。")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"exp gradient"},[n("canvas",{ref:"c1",attrs:{width:"250",height:"250"}}),t._v(" "),n("canvas",{ref:"c2",attrs:{width:"250",height:"250"}}),t._v(" "),n("canvas",{ref:"c3",attrs:{width:"250",height:"250"}}),t._v(" "),n("canvas",{ref:"c4",attrs:{width:"250",height:"250"}})]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("创建线性渐变，需要使用两个圆，他们表示某个圆锥的起始位置。")]),t._v(" "),n("div",{staticClass:"exp gradient"},[n("canvas",{ref:"c5",attrs:{width:"290",height:"290"}})]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("h3",{staticClass:"title"},[t._v("图案填充")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v('使用createPattern(patternObj, repeatTypeString)方法创建图案，patternObj指的是图案元素，repeatTypeString指的是图案的重复方式："repeat"、"repeat-x"、"repeat-y"以及"no-repeat"4种方式。')]),t._v(" "),n("h3",{staticClass:"title"},[t._v("阴影")]),t._v(" "),n("p",[t._v("阴影效果通过如下4个属性值设置：")]),t._v(" "),t._m(7),t._v(" "),n("h3",{staticClass:"title"},[t._v("路径、描边与填充")]),t._v(" "),t._m(8),t._v(" "),t._m(9)]),t._v(" "),n("footer",[t._v("2016年06月15日")]),t._v(" "),n("comments")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("clearRect(double x, double y, double w, double h)\nstrokeRect(double x, double y, double w, double h)\nfillRect(double x, double y, double w, double h)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("线性渐变通过调用"),n("strong",[t._v("createLinearGradient()")]),t._v("方法创建，需要向该方法传入两个点的坐标，两点之间的连线就是canvas建立线性渐变效果的依据，该方法会返回CanvasGradient实例。可以添加颜色停止点设置渐变色。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("initLinearGradient () {\n    let that = this\n    let refs = that.$refs\n    let w = 250\n    let h = 250\n    that.drawLinearGradient(refs.c1, {x0: 0, y0: 0, x1: w, y1: 0})\n    that.drawLinearGradient(refs.c2, {x0: 0, y0: 0, x1: 0, y1: h})\n    that.drawLinearGradient(refs.c3, {x0: 0, y0: 0, x1: w, y1: h})\n    that.drawLinearGradient(refs.c4, {x0: 0, y0: 0, x1: 0, y1: h / 2})\n}\ndrawLinearGradient (el, pos) {\n    let context = el.getContext('2d')\n    let gradient = context.createLinearGradient(pos.x0, pos.y0, pos.x1, pos.y1)\n    gradient.addColorStop(0, 'blue')\n    gradient.addColorStop(0.25, 'white')\n    gradient.addColorStop(0.5, 'purple')\n    gradient.addColorStop(0.75, 'red')\n    gradient.addColorStop(1, 'yellow')\n    context.fillStyle = gradient\n    context.fillRect(0, 0, el.width, el.height)\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("使用线性渐变填充时，Canvas会使用最后一种颜色来填充非渐变区域。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("let context = el.getContext('2d')\nlet w = el.width\nlet h = el.height\nlet gradient = context.createRadialGradient(w / 2, h, 1, w / 2, 0, 128)\ngradient.addColorStop(0, 'blue')\ngradient.addColorStop(0.25, 'white')\ngradient.addColorStop(0.5, 'purple')\ngradient.addColorStop(0.75, 'red')\ngradient.addColorStop(1, 'yellow')\ncontext.fillStyle = gradient\ncontext.fillRect(0, 0, el.width, el.height)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("放射渐变的填充范围仅局限于两个圆形所定义的圆锥区域，不会使用最后一个渐变色填充剩余区域。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Canavs允许使用图案对图形和文本进行填充，图案元素可以是这3种："),n("strong",[t._v("Image元素、Video元素、canvas元素。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("1、shadowColor：CSS3格式的颜色，默认值：rgba(0,0,0,0)；")]),t._v(" "),n("li",[t._v("2、shadowOffsetX：阴影的水平像素偏移；")]),t._v(" "),n("li",[t._v("3、shadowOffsetY：阴影的垂直像素偏移；")]),t._v(" "),n("li",[t._v("4、shadowBlur：一个与像素无关的值，该值被用于高斯模糊方程之中。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("strokeRect()和fillRect()是Canavs中仅有的两个可以立即绘制图形的方法，其他方法都是基于路径的。"),n("strong",[t._v("不论一个路径是否开放或者封闭，都可以进行填充。")]),t._v("与路径有关的方法：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("1、"),n("strong",[t._v("beginPath()")]),t._v("：将当前路径下的子路径都清除，以此重置当前路径；")]),t._v(" "),n("li",[t._v("2、"),n("strong",[t._v("closePath()")]),t._v("：显式地封闭某段开放路径；")]),t._v(" "),n("li",[t._v("3、"),n("strong",[t._v("fill()")]),t._v("：填充；")]),t._v(" "),n("li",[t._v("4、"),n("strong",[t._v("stroke()")]),t._v("：描边；")])])}]}}});