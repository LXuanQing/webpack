webpackJsonp(
    [0],
    {
        "I6/Z": (function(module, exports) {
            console.log(module,"module")
            console.log(exports,"exports")
            exports = { // 一个新对象
                class: 2
            }
            // exports.sex = "man"
            console.log(module,"module2")
            console.log(exports,"exports2")
            console.log(exports == module.exports)
        }),
        "JkW7": (function(module, exports, __webpack_require__) {
            var b = __webpack_require__("fVj1")
            var c = __webpack_require__("I6/Z")
            console.log(c,"c")
            console.log(b,"b")
            var a = 12
        }),
        "fVj1": (function(module, exports) {
            module.exports = {
                age: 1
            }
        })
    },
    ["JkW7"]
)

var _obj = {
    _json : {
    }
}
function test(a,b){
    a.age = 3
    // b = { // 直接赋值新对象，会导致变量指向不一样，失去了对原来传入的对象的控制权
    //     a: 1
    // }
    b.sex = 3
    console.log(a)
}
test.call(null,_obj,_obj._json)
console.log(_obj)
