function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedHello = debounce(() => console.log("Hello world!"), 2000);
debouncedHello(); // Prints 'Hello world!' after 2 seconds
