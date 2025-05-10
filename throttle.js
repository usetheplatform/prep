function throttle(func, delay) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
}

const handleResize = throttle(() => {
  console.log("Window resized at", new Date().toLocaleTimeString());
}, 2000);
