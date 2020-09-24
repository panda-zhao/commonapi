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