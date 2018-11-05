// Create copies of objects withjout the same reference! 

// ES5 
var o = {name: "Elie"};
var o2 = o; 

o2.name = "Tim";
o.name; // "Tim"

// Fixing up with Object.assign(notice the first parameter)

var o = {name: "Elie"};
var o2 = Object.assign({},o);

o2.name = "Tim"
o.name;

// Not a deep clone 
// ES2015 
var o = {instructors: ["Elie", "Tim"]};
var o2 = Object.assign({},o);

o2.instructors.push("Colt");

o.instructors; // ["Elie", "Tim", "Colt"];