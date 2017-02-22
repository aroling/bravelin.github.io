webpackJsonp([12,17],{15:function(n,a){"use strict";n.exports={mounted:function(){this.$nextTick(function(){var n=document.querySelectorAll("code");if(n.length>0)for(var a=0;a<n.length;a++)hljs.highlightBlock(n[a])})}}},45:function(n,a,r){var e,t;e=r(15);var i=r(64);t=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(t=e=e.default),"function"==typeof t&&(t=t.options),t.render=i.render,t.staticRenderFns=i.staticRenderFns,n.exports=e},64:function(n,a){n.exports={render:function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",{staticClass:"page article"},[r("h2",{staticClass:"title"},[n._v("《CSS 揭秘》笔记之二：背景与边框")]),n._v(" "),n._m(0),n._v(" "),r("footer",[n._v("2016年11月03日")]),n._v(" "),r("comments")],1)},staticRenderFns:[function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",{staticClass:"content"},[r("h3",{staticClass:"title"},[n._v("半透明边框")]),n._v(" "),r("p",[n._v("默认情况下，背景会延伸到边框所在区域的下层，此时即使设置边框为透明的颜色，也无法达到预期的效果。可以通过"),r("strong",[n._v("background-clip")]),n._v("属性来调整。这个属性初始值默认为border-box，设置为padding-box可以用内边距的外沿将背景裁剪掉。\n          ")]),n._v(" "),r("div",{staticClass:"exp transparent-border"},[r("div",[n._v("未设置background-clip")])]),n._v(" "),r("div",{staticClass:"exp transparent-border"},[r("div",{staticClass:"act"},[n._v("设置background-clip")])]),n._v(" "),r("pre",[r("code",{staticClass:"css"},[n._v("background: #fff;\nborder:25px dotted rgba(0,0,255,0.1);\nbackground-clip: padding-box;")])]),n._v(" "),r("h3",{staticClass:"title"},[n._v("多重边框")]),n._v(" "),r("p",[r("strong",[n._v("box-shadow方案：")]),n._v("利用box-shadow的第四个参数——扩张半径，加上为0的偏移量和模糊值，可以得到一道实线边框。由于box-shadow支持多个投影，因此可以实现多重边框。\n          ")]),n._v(" "),r("p",[n._v("需要注意的是box-shadow是重重叠加的，需要按一定的规律调整扩张半径；投影不会影响布局，也不会受到box-sizing属性影响。此外投影生成的边框不会响应鼠标事件。")]),n._v(" "),r("div",{staticClass:"exp multiple-border-box-shadow"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background-color: white;\nbox-shadow: 0 0 0 5px #655, 0 0 0 10px deeppink, 0 2px 5px 10px rgba(0,0,0,0.6);")])]),n._v(" "),r("p",[n._v("可以给box-shadow属性加上"),r("strong",[n._v("inset")]),n._v('关键字，使投影绘制在元素的内圈，此时的"边框"就能响应鼠标事件了。')]),n._v(" "),r("p",[r("strong",[n._v("outline方案：")]),n._v("如果只需要两重边框的话，可以使用border产生常规边框，再使用outline产生外层边框。")]),n._v(" "),r("div",{staticClass:"exp multiple-border-outline"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background-color: white;\nborder:5px solid #655;\noutline:5px solid deeppink;")])]),n._v(" "),r("p",[n._v("outline并不支持设置多个，并且边框不会贴合border-radius产生的圆角，描边目前只能是直角效果。")]),n._v(" "),r("h3",{staticClass:"title"},[n._v("灵活的背景定位")]),n._v(" "),r("p",[r("strong",[n._v("background-position扩展语法：")]),n._v("在CSS3中可以指定背景图片距离任意角的偏移量，只要我们在偏移量前面指定关键字。")]),n._v(" "),r("div",{staticClass:"exp bg bg-position"}),n._v(" "),r("p",[n._v("上面的背景图片定位在距容器右侧20px，底部10px的地方，即使改变窗口的宽度。")]),n._v(" "),r("pre",[r("code",[n._v('background: url("...") no-repeat bottom right rgb(225,213,216);\nbackground-position: right 20px bottom 10px;')])]),n._v(" "),r("p",[r("strong",[n._v("background-origin方案：")]),n._v("每个元素都存在3个矩形框：border-box、padding-box、content-box，background-position默认以padding-box为准。CSS3中增加的background-origin可以改变这种行为。定义如下样式也能达到同样的效果：\n          ")]),n._v(" "),r("pre",[r("code",[n._v('background: url("...") no-repeat bottom right rgb(225,213,216);\npadding:10px 20px;\nbackground-origin: content-box;')])]),n._v(" "),r("div",{staticClass:"exp bg bg-origin"}),n._v(" "),r("p",[r("strong",[n._v("calc()方案：")]),n._v("calc()函数可以对位置执行动态计算。")]),n._v(" "),r("pre",[r("code",[n._v('background: url("...") no-repeat bottom right rgb(225,213,216);\nbackground-position: calc(100% - 20px) calc(100% - 10px);')])]),n._v(" "),r("div",{staticClass:"exp bg bg-calc"}),n._v(" "),r("p",[n._v('使用calc()函数需要注意的是操作符"+"、"-"两侧需要留有空白。')]),n._v(" "),r("h3",{staticClass:"title"},[n._v("边框内圆角")]),n._v(" "),r("p",[r("strong",[n._v("描边不会跟着元素的圆角走，而box-shadow确是会的。")]),n._v("两者叠加到一起，box-shadow填充描边和容器圆角之间的空隙，可以达到此种效果。需要注意的是，box-shadow的扩张值大约是border-radius的一半。\n          ")]),n._v(" "),r("div",{staticClass:"exp inner-border-radius"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: tan;\nborder-radius: 12px;\nbox-shadow: 0 0 0 6px #655;\noutline:9px solid #655;")])]),n._v(" "),r("h3",{staticClass:"title"},[n._v("条纹背景")]),n._v(" "),r("p",[r("strong",[n._v("对于渐变，当多个色标具有相同的位置时，它们会产生一个无限小的过渡区域。从效果上看，颜色在那个位置突然变化了。")])]),n._v(" "),r("p",[n._v("条纹背景示例：")]),n._v(" "),r("div",{staticClass:"exp linear-1"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: linear-gradient(#fb3 50%, #58a 50%);\nbackground-size: 100% 30px;")])]),n._v(" "),r("p",[r("strong",[n._v("如果某个色标的位置比它之前的位置值小，那么它会被解析为前面所有色标位置的最大值。")])]),n._v(" "),r("p",[n._v("上例可以写成：background: linear-gradient(#fb3 50%, #58a 0);")]),n._v(" "),r("p",[r("strong",[n._v("垂直条纹")]),n._v("的效果需要加额外的参数来指定渐变方向：to right")]),n._v(" "),r("div",{staticClass:"exp linear-2"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: linear-gradient(to right ,#fb3 50%, #58a 0);\nbackground-size: 30px 100%;")])]),n._v(" "),r("p",[r("strong",[r("b",[n._v("45度斜向条纹：")])])]),n._v(" "),r("p",[n._v("方法一：使用linear-gradient，background-size设置为条纹宽度的2*1.414倍")]),n._v(" "),r("div",{staticClass:"exp linear-3"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: linear-gradient(45deg, #fb3 25%, #58a 25%, #58a 50%, #fb3 50%, #fb3 75%, #58a 75%);\nbackground-size: 42.426px 42.426px;")])]),n._v(" "),r("p",[n._v("方法二：使用repeating-linear-gradient")]),n._v(" "),r("div",{staticClass:"exp linear-4"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: repeating-linear-gradient(45deg,#fb3, #fb3 15px, #58a 15px, #58a 30px);")])]),n._v(" "),r("p",[r("strong",[r("b",[n._v("同色系条纹：")])])]),n._v(" "),r("p",[n._v("将最深的颜色指定为背景色，把半透明的白色条纹叠加到背景色之上")]),n._v(" "),r("div",{staticClass:"exp linear-5"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: #58a;\nbackground-image: repeating-linear-gradient(30deg,hsla(0, 0%, 100%, .1),\n      hsla(0, 0%, 100%, .1) 15px, transparent 15px, transparent 30px);")])]),n._v(" "),r("p",[r("strong",[n._v("使用CSS渐变来产生任何种类的几何图案都是可能的。")]),n._v("原理是将多个渐变图案组合起来。")]),n._v(" "),r("p",[r("strong",[n._v("桌布方格图案：")])]),n._v(" "),r("div",{staticClass:"exp linear-6"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: white;\nbackground-image: linear-gradient(90deg, rgba(200,0,0,0.5) 50%, transparent 0),\n      linear-gradient(rgba(200,0,0,0.5) 50%, transparent 0);\nbackground-size: 30px 30px;")])]),n._v(" "),r("p",[r("strong",[n._v("网格图案：")])]),n._v(" "),r("div",{staticClass:"exp linear-7"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: #58a;\nbackground-image: linear-gradient(#ccc 1px, transparent 0),\n      linear-gradient(90deg, #ccc 1px, transparent 0);\nbackground-size: 20px 20px;")])]),n._v(" "),r("p",[r("strong",[n._v("叠加多重渐变的蓝图网格：")]),n._v("使用background-size调整间距。")]),n._v(" "),r("div",{staticClass:"exp linear-8"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: #58a;\nbackground-image: linear-gradient(white 2px, transparent 0),\n      linear-gradient(90deg, white 2px, transparent 0),\n      linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),\n      linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);\nbackground-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;")])]),n._v(" "),r("p",[r("strong",[n._v("波点图案：")]),n._v("使用径向渐变。")]),n._v(" "),r("div",{staticClass:"exp linear-9"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: #655;\nbackground-image: radial-gradient(tan 20%, transparent 0);\nbackground-size: 30px 30px;")])]),n._v(" "),r("p",[r("strong",[n._v("复杂点的波点图案：")]),n._v("使用background-position错开位置。")]),n._v(" "),r("div",{staticClass:"exp linear-10"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("background: #655;\nbackground-image: radial-gradient(tan 20%, transparent 0),\n      radial-gradient(tan 20%, transparent 0);\nbackground-size: 30px 30px;\nbackground-position: 0 0, 15px 15px;")])]),n._v(" "),r("p",[r("strong",[n._v("信封样式边框：")]),n._v("设置两层背景，内层纯白色（使用渐变实现），斜纹背景溢出到边框区域。边框设置为透明。")]),n._v(" "),r("div",{staticClass:"exp linear-11"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("padding:1em;\nborder:1em solid transparent;\nbackground: linear-gradient(white,white),\n      repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 12.5%,transparent 25%, #58a 25%, #58a 37.5%, transparent 37.5%, transparent 50%);\nbackground-size: 3em 3em;\nbackground-clip: padding-box, border-box;")])]),n._v(" "),r("p",[r("strong",[r("b",[n._v("蚂蚁行军边框：")])]),n._v("动起来的关键是使用animation设置background-position。")]),n._v(" "),r("div",{staticClass:"exp marching-ants"},[r("div")]),n._v(" "),r("pre",[r("code",[n._v("@keyframes ants {\n  to {\n    background-position: 100%;\n  }\n}\n\ndiv.marching-ants{\n  padding: 1em;\n  border:1px solid transparent;\n  background: linear-gradient(white,white),\n      repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%);\n  background-clip: padding-box, border-box;\n  background-size: 0.6em 0.6em;\n  animation: ants 12s linear infinite;\n}")])])])}]}}});