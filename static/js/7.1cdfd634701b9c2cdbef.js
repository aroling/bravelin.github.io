webpackJsonp([7,25],{27:function(t,e){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var e=0;e<t.length;e++)hljs.highlightBlock(t[e])})}}},64:function(t,e,n){var o,v;o=n(27);var s=n(79);v=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(v=o=o.default),"function"==typeof v&&(v=v.options),v.render=s.render,v.staticRenderFns=s.staticRenderFns,t.exports=o},79:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("《ES6标准入门》笔记之七：函数的扩展")]),t._v(" "),t._m(0),t._v(" "),n("footer",[t._v("2017年05月07日")]),t._v(" "),n("comments")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("函数参数的默认值")]),t._v(" "),n("p",[t._v("ES6允许为函数参数设置默认值，直接写在参数定义的后面：")]),t._v(" "),n("pre",[n("code",[t._v("function log (x, y = 'abc') { console.log(x, y) }\n\nfunction Point (x = 0, y = 0) {\n    this.x = x\n    this.y = y\n}")])]),t._v(" "),n("p",[t._v("参数默认值可以与解构赋值的默认值结合起来使用：")]),t._v(" "),n("pre",[n("code",[t._v("function fetch (url, { method = 'GET' } = { }) {\n    console.log(method)\n}\nfetch('http://example.com') // GET")])]),t._v(" "),n("p",[t._v("上面调用fetch函数中，没有传入第二个参数。因此函数参数的默认值{}生效，之后是解构赋值的默认值生效。")]),t._v(" "),n("p",[t._v("通常情况下，定义了默认值的参数应该是函数的"),n("strong",[t._v("尾参数")]),t._v("。如果传入undefined，将触发该参数等于默认值。")]),t._v(" "),n("p",[t._v("指定了默认值以后，函数的length属性将返回没有指定默认值的参数个数。也即是指定了函数参数默认值，length属性将失真。")]),t._v(" "),n("pre",[n("code",[t._v("(function (a) {}).length // 1\n(function (a = 5) {}).length // 0")])]),t._v(" "),n("p",[t._v("length属性是函数预期传入的参数个数。rest参数也不会计入length属性。")]),t._v(" "),n("p",[t._v("如果参数默认值是一个变量，则该变量应当"),n("strong",[t._v("先是当前函数的作用域，然后才是全局作用域。")])]),t._v(" "),n("pre",[n("code",[t._v("var x = 1\nfunction f(x, y = x) { console.log(y) }\nf(2) // 2")])]),t._v(" "),n("h3",{staticClass:"title"},[t._v("rest参数")]),t._v(" "),n("p",[t._v("rest参数用于获取函数的多余参数，这样可以不用arguments对象。rest参数搭配的变量是一个数组，该变量将多余的参数放入其中。")]),t._v(" "),n("pre",[n("code",[t._v("function add (...values) {\n    let sum = 0\n    for (var v of values) {\n        sum += v\n    }\n    return sum\n}\nadd(2, 3, 6) // 11")])]),t._v(" "),n("p",[t._v("上面的add求和函数利用rest参数可以传入任意数目的参数。")]),t._v(" "),n("p",[n("strong",[t._v("rest参数的变量代表一个数组，数组特有的方法都可以用于这个变量。")]),t._v("rest参数之后不能再有其他的参数（即只能是最后一个参数），否则报错。")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("扩展运算符")]),t._v(" "),n("p",[t._v("扩展运算符是三个点（...），好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。")]),t._v(" "),n("pre",[n("code",[t._v("console.log(...[1, 2, 3]) // 1 2 3")])]),t._v(" "),n("p",[t._v("该运算符主要用于函数调用。")])])}]}}});