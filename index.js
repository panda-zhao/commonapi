var apis = require('./src/utils');
// console.log('apis', apis)

console.log('创建uuid', apis.creatUuid())

console.log('是否支持window：' , window)
if(window){
  window.apis = window.$ = apis;
}
console.log('是否支持commonJS：' ,typeof module === "object" && typeof module.exports === "object")
if(typeof module === "object" && typeof module.exports === "object"){
  module.exports = apis
}
module.exports = apis
