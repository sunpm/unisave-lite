export function isNumber(data) {
  return Object.prototype.toString.call(data) === '[object Number]'
}

export function isString(data) {
  return Object.prototype.toString.call(data) === '[object String]'
}

export function isBoolean(data) {
  return Object.prototype.toString.call(data) === '[object Boolean]'
}

export function isNull(data) {
  return Object.prototype.toString.call(data) === '[object Null]'
}

export function isUndefined(data) {
  return Object.prototype.toString.call(data) === '[object Undefined]'
}

export function isObject(data) {
  return Object.prototype.toString.call(data) === '[object Object]'
}

export function isArray(data) {
  return Object.prototype.toString.call(data) === '[object Array]'
}

export function isFunction(data) {
  return Object.prototype.toString.call(data) === '[object Function]' || isAsync(data)
}

export function isDate(data) {
  return Object.prototype.toString.call(data) === '[object Date]'
}

export function isRegExp(data) {
  return Object.prototype.toString.call(data) === '[object RegExp]'
}

export function isPromise(data) {
  return Object.prototype.toString.call(data) === '[object Promise]'
}

export function isAsync(data) {
  return Object.prototype.toString.call(data) === '[object AsyncFunction]'
}

export function isSet(data) {
  return Object.prototype.toString.call(data) === '[object Set]'
}

export function isMap(data) {
  return Object.prototype.toString.call(data) === '[object Map]'
}

export function isFile(data) {
  return Object.prototype.toString.call(data) === '[object File]'
}

export function isEmptyObject(data) {
  return Object.keys(data).length === 0
}
