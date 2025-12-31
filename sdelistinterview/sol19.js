// pure functions wo tareeeke ke functions hote hai jinme ek input ke liye ek hi ouptut ho , i mean wo dependenmt hote hai apne arguments pe not on any external factor 


function x(a,b){
    return a+b
}

// this is pure only depenedent on args 

let total=0;
function y(a,b){
    total=a+b
}

// this is not pure as it depends on external factor