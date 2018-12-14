// ES5 Need condition logic
function add(a,b) {
    return a+b;
}

add(); // NaN because a is undefined and b is undefined 

function add(a,b) {
    if(a === undefined){
        a = 1;
    }
    if(b === undefined){
        b = 2;
    }
    return a+b;
}

// ES2015 Default parameters make use of operator equal sign '='

function add (a=1, b=2) {
    return a+b;
}

// This value will be the default if nothing is passed to the function when it is called. 