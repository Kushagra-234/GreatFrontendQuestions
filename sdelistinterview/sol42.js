

// jab ek button click hota hai react me to click event fire hota hai fir react ka event system use capture krta hai 
// and then react callls attached event handler agar state updated hai to react schedule krta hai re-redner ko 
// and reconiclliation and cdom ke use se change hota hai code me jaha jaha react chahta hai wha wha 


function debounce(fn,delay){
    let timerId;

    return function (...args){
      clearTimeout(timerId);
      
      timerId=setTimeout(() => {
       fn.apply(this,args); 
      }, delay);
    }
}


function throttle(fn,delay){
    let isThrottled=false;

    return function(...args){
        if(!isThrottled){
            isThrottled=true;

            setTimeout(()=>{
                fn.apply(this,args)
                isThrottled=false;
            },delay)
        }
    }
}



