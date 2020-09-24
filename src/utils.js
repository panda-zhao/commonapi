/**
 * 判断数据类型
 * @param obj {number} 需要检测的值
 * @returns {string} 返回数据类型
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
/**
 * 创建uuid
 * @param {null} 无参数
 * @returns {uuid} 返回uuid
 */


const creatUuid = function () {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  return s.join('')
}

module.exports = {
  checkType,
  creatUuid
}