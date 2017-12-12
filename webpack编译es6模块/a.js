import b from './b.js'
import {name} from './b.js'
import {sex} from './b.js'
import {test} from './b.js'
import {liu} from './b.js'
import * as xuan from './b.js'
console.log(b)
console.log(name)
console.log(test)
console.log(sex)
console.log(liu)
console.log(xuan)

/**
 *  import export export default是es6的模块
 *  export default导出的，编译后会给module.exports对象添加一个default属性
 *  export导出的，也会绑定在module.exports属性上
 *  如果使用require引入，引入的是module.exports对象，这个对象会有default,name等属性
 *  想得到default的值，要require("./b.js")["default"]
 */