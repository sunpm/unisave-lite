import { isNumber } from '@pmun/utils'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

// 导入本地化语言
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(customParseFormat)

// 判断时间戳是否毫秒
export function isMillisecondTimestamp(value) {
  if (typeof value !== 'number' || value.toString().length !== 13)
    return false

  const date = new Date(value)
  return !Number.isNaN(date.getTime())
}

// 转换为 dayjs 接收参数
export function convertToDayjsParam(value) {
  if (!isMillisecondTimestamp(value) && isNumber(value))
    return value * 1000

  return value
}

export function stringFormat(date, format) {
  return dayjs(date, format)
}

export function formatCalendar(date) {
  return formatTime(date, 'MM-DD')
}

export function formatTime(date, format = 'YYYY-MM-DD') {
  if (!date)
    return ''

  return dayjs(convertToDayjsParam(date)).format(format)
}

// 将时间戳格式化成完整的时间字符串
export function formatFullTime(date) {
  return formatTime(date, 'YYYY年MM月DD日 HH:mm:ss')
}

export function diffDate(start, end, unit = 'day') {
  return dayjs(convertToDayjsParam(start)).diff(dayjs(convertToDayjsParam(end)), unit)
}

// 获取今天和明天的日期
export function getTodayAndTomorrow(template = 'YYYY-MM-DD') {
  const today = dayjs().format(template)
  const tomorrow = dayjs().add(1, 'day').format(template)
  return { today, tomorrow }
}
