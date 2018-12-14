// includes 
// - returns a boolean if a value is in a string - easier than using indexOf 

// ES5 
"awesome".indexOf("some") > -1 //true


// ES2015
"awesome".includes("some"); //true

// ES2016 also in array now

var nums = [1,2,3,4,5];
nums.includes(1); // true