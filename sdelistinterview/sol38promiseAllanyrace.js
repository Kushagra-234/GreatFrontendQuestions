// Promise.all.  -> isme sab resolve hote hai tb ye array return krta hai resolved value ka agar ek bhi reject to ye reject
// Promise.allSettled -> isme  sab resolve hi hote hai no reject
// Promise.race-> isme race hoti hai pehle resolve ya reject wo aajaega
// Promise.any -> promise.any me jo pehle resolve hua wo aajaega ,reject ignore hota hai isme

function nayaDeb(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function thrittle(fn, delay) {
  let isthrottle = false;

  return function (...args) {
    if (!isthrottle) {
      isthrottle = true;
      fn.apply(this, args);
      setTimeout(() => {
        isthrottle = false;
      }, delay);
    }
  };
}


// Array.prototype.myMap = function