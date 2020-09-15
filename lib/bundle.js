(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var apis = require('./lib/utils');
// console.log('apis', apis)


// console.log('是否支持window：' , window)
if(window){
  window.apis = window.$ = apis;
}
// console.log('是否支持commonJS：' ,typeof module === "object" && typeof module.exports === "object")
if(typeof module === "object" && typeof module.exports === "object"){
  module.exports = apis
}


},{"./lib/utils":2}],2:[function(require,module,exports){
/**
 * 判断数据类型
 */
const checkType  = function (obj){
  if( null ===obj)return null
  if( undefined === obj)return undefined
  // 原始类型
  if( typeof(obj)  == 'string' && obj.constructor == String)return 'string'
  if( typeof(obj)  == 'number' && obj.constructor == Number)return 'number'
  if( typeof(obj)  == 'boolean' && obj.constructor == Boolean)return 'boolean'
  // 引用类型
  if( typeof(obj)  == 'object' && obj.constructor== Array)return 'array'
  if( typeof(obj)  == 'object' && obj.constructor == Object)return 'object'
  if( typeof(obj)  == 'object' && obj.constructor == Date)return 'date'
  if( typeof(obj)  == 'object' && obj.constructor == Function)return 'function'
}

// console.log(checkType(true))


module.exports = {
  checkType
}
},{}]},{},[1]);
