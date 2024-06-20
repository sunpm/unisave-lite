export function throttle(func, wait = 500, immediate = true) {
  let timeout = null;
  let initialCall = true;

  return function (...args) {
    const callNow = immediate && initialCall;
    const next = () => {
      func.apply(this, args);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(() => {
        initialCall = true; // Reset initial call for the next debounce delay
        next();
      }, wait);
    }
  };
}
