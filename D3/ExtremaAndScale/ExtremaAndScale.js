// Extrema Values 

// d3.max(dataArr, callback)
//                  How to associate values to array elements

// d3.min(dataArr, callback)
d3.max([1,23,3,4,5,6])
//23
d3.min([1,23,3,4,5,6])
//1

var people = [
    { name: "Brett", age: 40},
    { name: "Mackenzie", age: 30},
    { name: "Arya", age: 78},
    { name: "Lee", age: 22}
];

d3.max(people, v => v.age)
// 78 
d3.min(people, v => v.age)
// 22
var minYear = d3.min(birthData, val => val.year);
var maxYear = d3.max(birthData, val => val.year);
var maxBirths = d3.max(birthData, val => val.births);

// Scale 
d3.scaleLinear()
  .domain([num1,num2])
  .range([num3,num4])

// Example 
var scale = d3.scaleLinear()
				.domain([1,17])
				.range([-4, 52])
undefined
scale(1)
-4
scale(17)
52
scale(2)
-0.5
scale(16)
48.5

// var yScale = d3.scaleLinear()
// .domain([yMin,yMax])
// .range([height, 0]);

// let yMax = d3.max(birthData2011, d => d.lifeExpectancy);
// let yMin = d3.min(birthData2011, d => d.lifeExpectancy);

// Extreme Values 
d3.extent(dataArray,callback) // calculates min and max, returns them in an array! 

// Example:
var people = [
  { name: "Brett", age: 40},
  { name: "Mackenzie", age: 30},
  { name: "Arya", age: 78},
  { name: "Lee", age: 22}
];

d3.extent(people, d=>d.age);
// [22,78]