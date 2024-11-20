// eslint-disable-next-line import/no-mutable-exports
export let isH5 = false
// eslint-disable-next-line import/no-mutable-exports
export let isAPP = false
// eslint-disable-next-line import/no-mutable-exports
export let isMP_WEIXIN = false
// eslint-disable-next-line import/no-mutable-exports
export let isMP_QQ = false
// eslint-disable-next-line import/no-mutable-exports
export let isMP_BAIDU = false
// eslint-disable-next-line import/no-mutable-exports
export let isMP_ALIPAY = false
// eslint-disable-next-line import/no-mutable-exports
export let isMP_TOUTIAO = false
// eslint-disable-next-line import/no-mutable-exports
export let isMP_KUAISHOU = false

// #ifdef APP-PLUS
isAPP = true
// #endif
// #ifdef H5
// h5
isH5 = true
// #endif

// #ifdef MP-WEIXIN
// 微信小程序
isMP_WEIXIN = true
// #endif

// #ifdef MP-QQ
// qq小程序
isMP_QQ = true
// #endif

// #ifdef MP-BAIDU
// 百度小程序
isMP_BAIDU = true
// #endif

// #ifdef MP-ALIPAY
// 支付宝小程序
isMP_ALIPAY = true
// #endif

// #ifdef MP-TOUTIAO
// 字节跳动小程序
isMP_TOUTIAO = true
// #endif

// #ifdef MP-KUAISHOU
// 快手小程序
isMP_KUAISHOU = true
// #endif

export default {
  isH5,
  isMP_WEIXIN,
  isMP_QQ,
  isMP_BAIDU,
  isMP_ALIPAY,
  isMP_TOUTIAO,
  isMP_KUAISHOU,
}
