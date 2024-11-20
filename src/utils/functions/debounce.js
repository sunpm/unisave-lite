export function debounce(func, wait = 500, immediate = false) {
  let timeoutId = null

  return function (...args) {
    const later = () => {
      timeoutId = null
      if (!immediate)
        func.apply(this, args)
    }

    const shouldCallNow = immediate && timeoutId === null

    if (timeoutId !== null)
      clearTimeout(timeoutId)

    timeoutId = setTimeout(later, wait)

    if (shouldCallNow)
      func.apply(this, args)
  }
}
