/**
 * 基于 promise 的延时
 * @param ms
 * @return {Promise<unknown>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
