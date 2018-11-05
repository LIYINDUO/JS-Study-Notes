// Maps, also called "hash maps" in other languages 
// Until es2015 - objects were replacements for maps 
// Similar to objects, except the keys can be ANY data type! 

// ES2015 
var firstMap = new Map;

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice');
firstMap.size; 
// Keys can be any type! 
var arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);
var objectKey ={};
firstMap.set(objectKey, {a:1});
// Extracting values 
firstMap.get(1);
firstMap.get(false);
firstMap.get(arrayKey);
firstMap.get(objectKey);

// map implements forEach function
// map implements a Symbol.iterator which means we can use a for...of loop! 
for (let val of firstMap){
    console.log(val);
}

for (let val of firstMap.values()){
    console.log(val);
}

for (let val of firstMap.keys()){
    console.log(val);
}

// When to use a map 
// - if yo need to look up keys dynamically (they are not hard coded strings)
// - if you need keys that are not strings!
// - if you are frequently addign and removing key/value pairs
// - if you are operating on multiple keys at a time


// keyword => WeakMap 
// - Similar to a map, but all keys MUST be objects and not primitives 
// - This makes a weak map more performant than a map but we cannot *iterate* over a weak map since values can be cleared from a memory if
//   there's not reference to it