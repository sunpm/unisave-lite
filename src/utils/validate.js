import { showToast } from './uniTools'

// 表单校验
export function validate(form, rules, cb) {
  // 循环 form
  for (const key in form) {
    const value = form[key]
    const rule = rules[key]
    // 如果有校验规则
    if (rule) {
      for (const r of rule) {
        if (
          (unref(r.required) && !value)
          || (r.min && value.length < r.min)
          || (r.max && value.length > r.max)
          || (r.pattern && !new RegExp(r.pattern).test(value))
        ) {
          return failValidate(r.message, cb, value, key)
        }
      }
    }
  }
  return cb(true)
}

export function failValidate(msg, cb, value, key) {
  const content = msg || `${key}验证不通过`
  console.error(content)
  showToast(content)
  cb(false, value)
}
