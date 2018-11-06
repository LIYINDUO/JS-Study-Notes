// - Invoked on arrays 
// - Accepts a callback with value, index, and array (just like forEach, map, filter, etc.)
// - Returns the value found or undefined if not found. 

var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}];

instructors.find(function(val){
    return val.name === "Tim"
}); // {name: "Tim"}


instructors.findIndex(function(val){
    return val.name === "Tim"
}); // 2