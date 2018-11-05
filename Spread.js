 //ES5 
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = arr1.concat(arr2).concat(arr3);

// ES2015

var combined = [...arr1, ...arr2, ...arr3]; 


// Spread instead of apply 
var arr = [1,2,3,4,5];

Math.max(arr); // Nan

//ES5 
Math.max.apply(this, arr);

// ES2015 
Math.max(...arr);