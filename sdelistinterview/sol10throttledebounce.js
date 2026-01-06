// debounce vs throttle

// In debounce, the function executes only after a continuous period of inactivity. Any new event before the delay resets the timer.

// Throttle would still allow calls every X ms even while typing, debounce will not.
// in throttle after certain time only one function call will be allowed

function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// after fixed set of time pr jab event trigger band ho gya ho after certain period of inactivity

// function debounce(fn,delay) {
//   let timerId;

//   const setTimeout(()=>{
//     fn()
//   },delay)

// }

function debounce() {
  let timerId;
}

function debounce(fn, delay) {
  let timerid;

  return function (...args) {
    clearTimeout(timerid);

    timerid = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttlnew(fn, delay) {
  let isthrottle = false;

  return function (...args) {
    if (!isthrottle) {
      isthrottle = true;
      fn.apply(this, args);

      setTimeout(()=>{
        isthrottle=false
      },delay)
    }
  };
}
