# webpack 打包 js运行过程
其实 webpack 就是将每一个 js 文件封装成一个函数，每个文件中的 require 方法对应的就是 __webpack_require__， __webpack_require__ 会根据传入的 moduleId 再去加载对应的代码。而当我们想导出 js 文件的值时，要么用 module.exports，要么用 exports，这就对应了module, module.exports两个参数。少接触这块的童鞋，应该就能理解为何导出值时，直接使用 exports = xxx 会导出失败了。

梳理一下打包后代码执行的流程，首先 minifest.js 会定义一个 webpackJsonp 方法，待其他打包后的文件（也可称为 chunk）调用。当调用 chunk 时，会先将该 chunk 中所有的 moreModules， 也就是每一个依赖的文件也可称为 module （如 test.js）存起来。之后通过 executeModules 判断这个文件是不是入口文件，决定是否执行第一次  __webpack_require__。而 __webpack_require__ 的作用，就是根据这个 module 所 require 的东西，不断递归调用 __webpack_require__，__webpack_require__函数返回值后供 require 使用。当然，模块是不会重复加载的，因为 installedModules 记录着 module 调用后的 exports 的值，只要命中缓存，就返回对应的值而不会再次调用 module。webpack 打包后的文件，就是通过一个个函数隔离 module 的作用域，以达到不互相污染的目的。

