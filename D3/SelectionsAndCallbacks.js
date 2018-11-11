// Selections and Callbacks 

selection.style(property,[callback])
selection.attr(attribute, [callback])
selection.text([callback])
selection.html([callbcak])

// The callback will be invoked once for each element in the selection 
// Example: 
d3.selectAll("li")
   .style("font-size", function(){return Math.random()*40 + "px"})

// D3 imposes a certain structure on the callback you passed in 
// function (_,idx) {
//     //write your code here
// }
// second argument refers to the current element in the selection 
// Example: 
d3.selectAll("li")
	.style("background-color", function(_,idx) {
        return idx%2 ===0 ? 'lightgrey' : "white" 
    });

// You can use method chaining in D3 to add style to multiple D3 selections in sequence
d3.select(".outer")
    .style("color", "purple")
  .select("div")
    .style("font-size", "30px")
    .style("background-color","orange")
  .select("div")
    .style("border","8px solid blue");
// Take note at the indentation above, it's a common D3 convention. 4 spaces for current and 2 spaces for new. 

