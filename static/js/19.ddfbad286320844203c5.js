webpackJsonp([19,29],{1:function(t,e){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var e=0;e<t.length;e++)hljs.highlightBlock(t[e])})}}},2:function(t,e,v){var n,a;n=v(1);var o=v(3);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div")},staticRenderFns:[]}},16:function(t,e,v){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=v(2),o=n(a);t.exports={extends:o.default}},57:function(t,e,v){var n,a;n=v(16);var o=v(82);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},82:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"page article"},[v("h2",{staticClass:"title"},[t._v("Canvas学习笔记之一：基础知识")]),t._v(" "),t._m(0),t._v(" "),v("footer",[t._v("2016年06月08日")]),t._v(" "),v("comments")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[v("h3",{staticClass:"title"},[t._v("Canvas元素")]),t._v(" "),v("p",[t._v("在设置Canvas的宽度与高度属性时，不能使用px后缀，并且只能是非负整数。")]),t._v(" "),v("p",[t._v("默认情况下，浏览器创建的Canvas元素是300*150的尺寸。Canvas元素有两套尺寸，一是元素本身的大小；二是元素绘图表面的大小。")]),t._v(" "),v("p",[t._v("通过设置属性width和height时，实际上同时修改了该元素本身的大小和绘图表面的大小；如果通过CSS设定Canvas元素的大小，那么只会改变元素本身的大小，而不会影响到绘图表面，此时浏览器会对绘图表面进行缩放，使其符合元素的大小。")]),t._v(" "),v("p",[t._v("Canvas元素提供如下3个方法：")]),t._v(" "),v("p",[v("strong",[t._v("1、getContent()")]),t._v("：返回与该canvas元素相关的绘图环境对象；")]),t._v(" "),v("p",[v("strong",[t._v("2、toDataURL(type, quality)")]),t._v("：返回一个数据地址（图片的base64编码），type默认为image/png，第二个参数是0~1.0之间的数值，表示JPEG图片的质量（当type为image/jpeg）。")]),t._v(" "),v("p",[v("strong",[t._v("3、toBlob(callback, type, args...)")]),t._v("：创建一个表示此canvas元素图像文件的Blob，type为image/png或者image/jpeg，第3个参数如同toDataURL中的quality（写成args...是可能会扩展）。")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("绘图环境")]),t._v(" "),v("p",[t._v("2D绘图环境通常指CanvasRenderingContent2D对象，此对象的属性如下：")]),t._v(" "),v("p",[v("strong",[t._v("1、canvas")]),t._v("：指向绘图环境所属的canvas对象，常见用途是用来获取canvas的宽度与高度，分别调用context.canvas.width与context.canvas.height。")]),t._v(" "),v("p",[v("strong",[t._v("2、fillstyle")]),t._v("：设定绘图环境在后续图形填充操作中所使用的颜色、渐变色和图案。")]),t._v(" "),v("p",[v("strong",[t._v("3、font")]),t._v("：在调用绘图环境对象的fillText()或者strokeText()方法时，使用的字型。")]),t._v(" "),v("p",[v("strong",[t._v("4、globalAlpha")]),t._v("：全局透明度设定，0~1.0之间的值。浏览器会将每个像素的alpha值与之相乘。")]),t._v(" "),v("p",[v("strong",[t._v("5、globalCompsiteOperation：")]),t._v("设定将某个物体绘制在其他物体之上时的绘制方式。")]),t._v(" "),v("p",[v("strong",[t._v("6、lineCap")]),t._v("：设置绘制线段端点的方式。")]),t._v(" "),v("p",[v("strong",[t._v("7、lineWidth")]),t._v("：设置绘制线段的屏幕像素的宽度，默认值1.0。")]),t._v(" "),v("p",[v("strong",[t._v("8、lineJoin")]),t._v("：设定两条线段相交时如何绘制焦点，可取的值：bevel、round、miter（默认值）。")]),t._v(" "),v("p",[v("strong",[t._v("9、miterLimit")]),t._v("：设定如何绘制miter形式的焦点。")]),t._v(" "),v("p",[v("strong",[t._v("10、strokeStyle")]),t._v("：设定对路径进行描边的风格，可以是某个颜色值、渐变色或者图案。")]),t._v(" "),v("p",[v("strong",[t._v("11、textAlign")]),t._v("：设定文本的水平对齐方式。")]),t._v(" "),v("p",[v("strong",[t._v("11、textBaseline")]),t._v("：设定文本的垂直对齐方式。")]),t._v(" "),v("p",[t._v("阴影相关的属性：")]),t._v(" "),v("p",[v("strong",[t._v("12、shadowBlur")]),t._v("：设定阴影的延伸效果，值越高，阴影延伸的越远，默认值为0。")]),t._v(" "),v("p",[v("strong",[t._v("13、shadowColor")]),t._v("：设定阴影的颜色。通常使用半透明色。")]),t._v(" "),v("p",[v("strong",[t._v("14、shadowOffsetX")]),t._v("：阴影效果的水平方向偏移量。")]),t._v(" "),v("p",[v("strong",[t._v("15、shadowOffsetY")]),t._v("：阴影效果的垂直方向偏移量。")]),t._v(" "),v("p",[t._v("save()和restore()是绘图环境对象中与状态操作的两个方法。")]),t._v(" "),v("p",[t._v("鼠标坐标转为Canvas坐标，使用如下方法")]),t._v(" "),v("pre",[v("code",[t._v("function windowToCanvas (canvas, x ,y) {\n    var box = canvas.getBoundingClientRect()\n    return { x: (x - box.left) * (canvas.width / box.width), y: (y - box.top) * (canvas.height / box.height) }\n}")])]),t._v(" "),v("p",[v("strong",[t._v("Canvas常用的是“立即模式”（immediate-mode）来绘制图形的，它会立即将所指定的内容绘制在canvas上，然后忘记刚才绘制的内容。“保留模式”（retained-mode）会维护一份所绘图形对象的列表。")])]),t._v(" "),v("h3",{staticClass:"title"},[t._v("基础数学知识")]),t._v(" "),v("p",[t._v("弧度与角度的转换："),v("strong",[t._v("π = 180度   1弧度 = (180 / π) 度    1度 = (π / 180) 弧度")])]),t._v(" "),v("p",[t._v("二维向量含有两个值：方向和大小。{ x: x, y: y }，向量的大小通过勾股定理（毕达哥拉斯定理）计算出来：")]),t._v(" "),v("pre",[v("code",[t._v("var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))")])]),t._v(" "),v("p",[t._v("单位向量是长度为1的向量，通常用来指示方向：")]),t._v(" "),v("pre",[v("code",[t._v("var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))\nvar unitVector = new Vector()\nuniteVector.x = vector.x / magnitude\nuniteVector.y = vector.y / magnitude")])]),t._v(" "),v("p",[t._v("向量的加减即将两个向量对应的x和y相加减即可。")]),t._v(" "),v("p",[v("strong",[t._v("向量的点积")]),t._v("是将两个向量的对应分量相乘然后再相加：v1.x * v2.x + v1.y * v2.y。当点积大于0，意味着两个向量大致处在同一个方向上。")]),t._v(" "),v("p",[v("strong",[t._v("动画的移动应该以时间为基准的（time-bases motion）。")]),t._v("帧速率是每帧持续的时间（frame rate，毫秒）。如果设定了物体的移动速度（每秒移动多少像素），可以求得每帧移动的像素数：")]),t._v(" "),v("p",[v("strong",[t._v("像素/帧 = （X * Y）/ 1000")]),t._v("  （X：用毫秒/帧表示的帧速率，Y：用像素/秒表示的速度）")])])}]}}});