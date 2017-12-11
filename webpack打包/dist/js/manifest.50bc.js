 (function(modules) { 
	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
		var moduleId, result;
		for(moduleId in moreModules) {
			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
				modules[moduleId] = moreModules[moduleId]; // 给数组增加属性 把第二个参数对象复制给数组
 			}
		}
		if(executeModules) {
			for(i=0; i < executeModules.length; i++) {
				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
 			}
 		}
 		return result;
    };
    var installedModules = {};
 	function __webpack_require__(moduleId) {
        if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		var module  = {
 			exports: {}
 		};
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        // module和module.exports传入的时候指向同一个对象，如果用exports = {} 导出，exports指向了一个新对象，失去了对原module.exports的控制权
        // 最后返回module.exports会没有导出的值
        // 用exports导出，可以这样exports.add = 2
        console.log(module.exports)
 		return module.exports;
	}
 })([]);


