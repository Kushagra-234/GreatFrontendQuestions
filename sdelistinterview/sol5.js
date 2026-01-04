// Hoisting exact behaviour function & var ke saath?

// Hoisting is a core JavaScript behavior where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed line by line.ˀ

// const x=10

function CLosePrent() {
  var x = 14;
  function inner() {
    console.log(x);
  }

  return inner;
}

const closeParent = CLosePrent();
closeParent();

// function deb(fn,delay){
//     let timerID;

//     function (...args){
//         clearTimeout(timerID);

//         timerID= setTimeout(()=>{
//             fn.apply(this,args);
//         },delay)
//     }

// }

function deb(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throt(fn, delay) {
  let isthrottle = false;

  if (!isthrottle) {
    if (isthrottle) return;
    return function (...args) {
      isthrottle = true;
      setTimeout(() => {
        fn.apply(this, args);
        isthrottle = false;
      }, delay);
    };
  }
}

function debNew(fn, delay) {
  let TimerId;

  return function (...args) {
    clearTimeout(timerId);

    TimerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throtnew(fn, delay) {
  let isthrottle = false;
  return function (...args) {
    if (isthrottle) return;

    isthrottle = true;
    fn.apply(this, args);
    setTimeout(() => {
      isthrottle = false;
    }, delay);
  };
}
