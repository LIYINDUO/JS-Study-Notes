// - Convert other data types into arrays 

// ES5 
var divs = document.getElementsByTagName('div');
divs.reduce // undefined 

// ES5 Solution 
var divsArr = [].slice.call(divs);
divsArr.reduce // function reduce() { . . . }


// ES2015 
var divsArr = Array.from(divs);

// - Convert different types of objects into arrays 

var firstSet = new Set([1,2,3,4,3,2,1]) // {1,2,3,4}
var arrayFromSet = Array.from(firstSet) // [1,2,3,4]