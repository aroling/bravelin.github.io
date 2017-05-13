webpackJsonp([4,27],{1:function(e,n){"use strict";e.exports={mounted:function(){this.$nextTick(function(){var e=document.querySelectorAll("code");if(e.length>0)for(var n=0;n<e.length;n++)hljs.highlightBlock(e[n])})}}},2:function(e,n,t){var o,v;o=t(1);var r=t(3);v=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(v=o=o.default),"function"==typeof v&&(v=v.options),v.render=r.render,v.staticRenderFns=r.staticRenderFns,e.exports=o},3:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div")},staticRenderFns:[]}},31:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var v=t(2),r=o(v);e.exports={extends:r.default}},70:function(e,n,t){var o,v;o=t(31);var r=t(87);v=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(v=o=o.default),"function"==typeof v&&(v=v.options),v.render=r.render,v.staticRenderFns=r.staticRenderFns,e.exports=o},87:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page article"},[t("h2",{staticClass:"title"},[e._v("《ES6标准入门》笔记之七：函数的扩展")]),e._v(" "),e._m(0),e._v(" "),t("footer",[e._v("2017年05月07日")]),e._v(" "),t("comments")],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h3",{staticClass:"title"},[e._v("函数参数的默认值")]),e._v(" "),t("p",[e._v("ES6允许为函数参数设置默认值，直接写在参数定义的后面：")]),e._v(" "),t("pre",[t("code",[e._v("function log (x, y = 'abc') { console.log(x, y) }\n\nfunction Point (x = 0, y = 0) {\n    this.x = x\n    this.y = y\n}")])]),e._v(" "),t("p",[e._v("参数默认值可以与解构赋值的默认值结合起来使用：")]),e._v(" "),t("pre",[t("code",[e._v("function fetch (url, { method = 'GET' } = { }) {\n    console.log(method)\n}\nfetch('http://example.com') // GET")])]),e._v(" "),t("p",[e._v("上面调用fetch函数中，没有传入第二个参数。因此函数参数的默认值{}生效，之后是解构赋值的默认值生效。")]),e._v(" "),t("p",[e._v("通常情况下，定义了默认值的参数应该是函数的"),t("strong",[e._v("尾参数")]),e._v("。如果传入undefined，将触发该参数等于默认值。")]),e._v(" "),t("p",[e._v("指定了默认值以后，函数的length属性将返回没有指定默认值的参数个数。也即是指定了函数参数默认值，length属性将失真。")]),e._v(" "),t("pre",[t("code",[e._v("(function (a) {}).length // 1\n(function (a = 5) {}).length // 0")])]),e._v(" "),t("p",[e._v("length属性是函数预期传入的参数个数。rest参数也不会计入length属性。")]),e._v(" "),t("p",[e._v("如果参数默认值是一个变量，则该变量应当"),t("strong",[e._v("先是当前函数的作用域，然后才是全局作用域。")])]),e._v(" "),t("pre",[t("code",[e._v("var x = 1\nfunction f(x, y = x) { console.log(y) }\nf(2) // 2")])]),e._v(" "),t("h3",{staticClass:"title"},[e._v("rest参数")]),e._v(" "),t("p",[e._v("rest参数用于获取函数的多余参数，这样可以不用arguments对象。rest参数搭配的变量是一个数组，该变量将多余的参数放入其中。")]),e._v(" "),t("pre",[t("code",[e._v("function add (...values) {\n    let sum = 0\n    for (var v of values) {\n        sum += v\n    }\n    return sum\n}\nadd(2, 3, 6) // 11")])]),e._v(" "),t("p",[e._v("上面的add求和函数利用rest参数可以传入任意数目的参数。")]),e._v(" "),t("p",[t("strong",[e._v("rest参数的变量代表一个数组，数组特有的方法都可以用于这个变量。")]),e._v("rest参数之后不能再有其他的参数（即只能是最后一个参数），否则报错。")]),e._v(" "),t("h3",{staticClass:"title"},[e._v("扩展运算符")]),e._v(" "),t("p",[e._v("扩展运算符是三个点（...），好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。")]),e._v(" "),t("pre",[t("code",[e._v("console.log(...[1, 2, 3]) // 1 2 3")])]),e._v(" "),t("p",[e._v("该运算符主要用于函数调用：")]),e._v(" "),t("pre",[t("code",[e._v("function push (array, ...items) {\n    array.push(...items)\n}\nfunction add (x, y) { return x + y }\nvar nums = [4, 38]\nadd(...nums) // 42")])]),e._v(" "),t("p",[e._v("由于扩展运算符可以展开数组，因此不再需要apply方法将数组转为函数参数序列了。")]),e._v(" "),t("pre",[t("code",[e._v("// ES5的写法\nfunction f(x, y, z) {}\nvar args = [1, 2, 3]\nf.apply(null, args)\n\n// ES6的写法\nf(...args)")])]),e._v(" "),t("p",[e._v("扩展运算符提供了数组合并的新写法：")]),e._v(" "),t("pre",[t("code",[e._v("// ES5的写法\n[1, 2].concat(more)\n// ES6的写法\n[1, 2, ...more]")])]),e._v(" "),t("p",[e._v("与解构赋值结合起来可以生成数组：")]),e._v(" "),t("pre",[t("code",[e._v("const [first, ...rest] = [1, 2, 3, 4, 5, 6]\nfirst // 1\nrest // [2, 3, 4, 5, 6]")])]),e._v(" "),t("p",[t("strong",[e._v("如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则报错。")])]),e._v(" "),t("p",[e._v("扩展运算符还可以将字符串转为真正的数组（并且能够正确识别32位的unicode字符）：")]),e._v(" "),t("pre",[t("code",[e._v('[..."hello"] // ["h", "e", "l", "l", "o"]')])]),e._v(" "),t("p",[e._v("返回正确的字符串长度可以这样求得：")]),e._v(" "),t("pre",[t("code",[e._v("function len (str) { return [...str].length }")])]),e._v(" "),t("p",[e._v("凡是涉及操作32位的Unicode字符都有这个问题，因此，最好都用扩展运算符改写：")]),e._v(" "),t("pre",[t("code",[e._v("let str = 'x\\uD83D\\uDE80y'\nstr.split('').reverse().join('') // error\n[...str].reverse().join('') // good")])]),e._v(" "),t("p",[e._v("任何类似数组的对象都可以使用扩展运算符转为真正的数组：")]),e._v(" "),t("pre",[t("code",[e._v('var nodeList = document.querySelectorAll("div")\nvar array = [...nodeList]')])]),e._v(" "),t("p",[t("strong",[e._v("扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以使用扩展运算符。")]),e._v("比如Map、Set、Generator函数。")]),e._v(" "),t("pre",[t("code",[e._v("let map = new Map([ [1, 'one'], [2, 'two'], [3, 'three'] ])\nlet arr = [...map.keys()] // [1, 2, 3]\n\nvar go = function* () {\n    yield 1;\n    yield 2;\n    yield 3\n}\n[...go()] // [1, 2, 3]")])]),e._v(" "),t("h3",{staticClass:"title"},[e._v("name属性")]),e._v(" "),t("p",[e._v("函数的name属性会返回该函数的名称。")]),e._v(" "),t("p",[e._v("如果将一个具名函数赋值给一个变量，name属性返回这个具名函数原本的名字。")]),e._v(" "),t("pre",[t("code",[e._v('const bar = function abc() { }\nbar.name // "abc"')])]),e._v(" "),t("p",[e._v("Function构造函数返回的函数实例，name属性的值为：anonymous")]),e._v(" "),t("pre",[t("code",[e._v('(new Function).name // "anonymous"')])]),e._v(" "),t("p",[e._v("bind返回的函数，name属性值会加上bound的前缀：")]),e._v(" "),t("pre",[t("code",[e._v('function foo () {}\nfoo.bind({}).name // "bound foo"')])]),e._v(" "),t("h3",{staticClass:"title"},[e._v("箭头函数")]),e._v(" "),t("p",[e._v("使用箭头定义函数：")]),e._v(" "),t("pre",[t("code",[e._v("var f = v => v\nvar f = () => v\nvar sum = (v1, v2) => { v1 = v1 * 2; return v1 + v2 }")])]),e._v(" "),t("p",[e._v("需要注意的地方：")]),e._v(" "),t("p",[t("strong",[e._v("1、函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象；")])]),e._v(" "),t("p",[t("strong",[e._v("2、不可以当做构造函数；")])]),e._v(" "),t("p",[t("strong",[e._v("3、不可以使用arguments对象，该对象在函数体内不存在；可以使用rest参数代替；")])]),e._v(" "),t("p",[t("strong",[e._v("4、不可以使用yield命令，因此箭头函数不能用作Generator函数；")])]),e._v(" "),t("h3",{staticClass:"title"},[e._v("函数的绑定")]),e._v(" "),t("p",[e._v("ES7提出函数绑定运算符（::），用来取代call、apply、bind的调用。该运算符自动将左边的对象作为上下文环境（this对象）绑定到右边的函数上。")]),e._v(" "),t("pre",[t("code",[e._v("foo::bar // 等同于 bar.bind(foo)\nfoo::bar(...arguments) // 等同于 bar.apply(foo, arguments)")])]),e._v(" "),t("p",[e._v("如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上。")]),e._v(" "),t("pre",[t("code",[e._v("var method = obj::obj.foo // 等同于 var method = ::obj.foo\nlet log = ::console.log // 等同于 var log = console.log.bind(console)")])])])}]}}});