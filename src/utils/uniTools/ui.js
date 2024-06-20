import { isString } from '@/utils'

export function showToast(options) {
  let {
    title = '',
    icon = 'none',
    duration = 2000,
  } = options
  if (isString(options))
    title = options
  uni.showToast({
    title,
    icon,
    duration,
  })
}

export function showModal({ title = '提示', content, showCancel = true, cancelColor, confirmColor } = {}) {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      showCancel,
      cancelColor,
      confirmColor,
      success(res) {
        if (res.confirm)
          resolve()
        else if (res.cancel)
          reject(new Error('用户取消弹窗'))
      },
    })
  })
}
