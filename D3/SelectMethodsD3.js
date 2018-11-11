// d3.select - single element
// d3.select - multiple elements
// both acept a valie CSS selector

d3.select('#page-title');
d3.selectAll("li")

// return Selection {_groups: Array(1), _parents: Array(1)}
// don't do this! The leading underscore(_) are meant to indicate that you should not be accessing these properties directly.  
d3.selectAll("li")._groups[0];

// Accessing Nodes 
// - selection.nodes() -> return an array of matching HTML elements 
// - selection.node() -> return the first(non-null) HTML element
// Example:
// d3.selectAll("li").node()
// <li>​Makes data more engaging.​</li>​
// d3.selectAll("li").nodes()
// (4) [li, li, li, li]

// Interact with the selection object -> 
// d3.select("#page-title")
//    .style("background-color", "#00feab");
// Selection {_groups: Array(1), _parents: Array(1)}
// return selection object. Very much like promises structures you can chain methods so that there's no need to select the el over and over again. 
// Example: 
d3.select("#page-title")
   .style("background-color", "#000000")
   .style("color", "#ffffff")
   .attr("class", "new-class")
   .text("D3 is cool!");

// Manipulating Selections 
// style, attr, text, and html methods 
selection.style(property ,[newValue])
selection.attr(attribute ,[nveValue])
selection.text([newValue])
selection.html([newValue])
// These (and other!) D3 methods will work as getter if no newValue is passed in 

// Classed method:
  selection.classed(classList ,[shouldClassesBeSet])
//                     ||                   ||
//             space-separated list         ||
//                                  check whether classes should be added or removed 
d3.select("#page-title")
   .classed("new-class another-new-class", true) // true will add the class, false will remove the class 