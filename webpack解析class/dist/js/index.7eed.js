webpackJsonp([0],{

/***/ "JkW7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test_class = function () {
    function Test_class(height, width) {
        var _this = this;

        _classCallCheck(this, Test_class);

        this.fn2 = function () { // () => {}
            console.log(_this, "fn2");
        };

        this.cc = "23";


        this.height = height;
        this.width = width;
    }

    _createClass(Test_class, [{
        key: "fn1",
        value: function fn1() {
            console.log(this, "fn1");
        }
    }, {
        key: "fn3",
        value: function fn3() {
            console.log(this, "fn3");
        }
    }], [{
        key: "fn_static",
        value: function fn_static() {
            console.log(this, "静态方法");
        } //es6不支持静态属性 // es7支持静态属性 设置安装 "stage-2"

    }]);

    return Test_class;
}();

Test_class.fn_static2 = function () { // () => {}
    console.log(this, "静态方法2");
};

Test_class.inner = 3;
Test_class.obj = {
    aa: Test_class.fn_static
};

Test_class.a = 3;
var Person = new Test_class();
Person.fn1();
Person.fn2();
Test_class.fn_static();
Test_class.fn_static2();
console.log(Person);
console.log(Test_class);
console.log(Test_class.obj);

/***/ })

},["JkW7"]);