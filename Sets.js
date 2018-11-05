// - All values in a set are unique 
// - Any type of value can exist in a set 
// - Created using the new keyword
// - Exist in quite a few other languages, ES2015 finally brings them the JavaScript

var s = new Set; 

var s2 = new Set([3,1,4,1,2,1,5]);

s.add(10); // {10}
s.add(20); // {20,10}
s.add(10); // {20,10}

s.size; //2

s.has(10);   // true

s.delete(20); // true

s.size; // 1

s2[Symbol.iterator]; // function(){}....
// we can use a for...of loop!

// Similar to Maps, Sets also has a corresponding similar data structure to itself called WeakSet 
// WeakSet => 
// - Similar to a set, but all values MUST be objects 
// - Values in a WeakSet can be cleared from memory if there is no reference to them 
// - More performant than sets, but can not be iterated over