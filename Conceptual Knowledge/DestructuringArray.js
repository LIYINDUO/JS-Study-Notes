
// ES5 

var arr = [1,2,3];

var a = arr[0];
var b = arr[1];
var c = arr[2];

// ES2015

var arr = [1,2,3];

var [a,b,c] = arr;

// ES5 
function returnNumbers(a,b) {
    return [a,b];
}

var first = returnNumbers(5,10)[0];
var second = returnNumbers(5,10)[1];

first; second;

// ES2015 



[first, second] = returnNumbers(5,10)  // No need for var,let, or const keyword.


// Swapping Values 
// ES5
function swap(a,b) {
    var temp = a;
    a = b;
    b = temp;
    return [a,b];
}

swap(10,5); // return [5,10]
// ES2015

function swap(a,b) {
    [a,b] = [b,a];
    return [a,b];
}
swap(10,5);