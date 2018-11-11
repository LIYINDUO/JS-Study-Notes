// Adding event listeners 
Selection.on(eventType,callback)

// Example: 
d3.select('h1').on("click", function() {
    console.log("d3 event listners has reflected that h1 has been pressed")
}); 
// returns a Selection {_groups: Array(1), _parents: Array(1)} as always. 
// Same element can't have multiple listeners of same type attached to it.
// If more than one listener is attached, latest one will replace the old one. 
// As a result, you can remove listener by =>
d3.select("h1").on("click", null);

// The first thing we will need to do is to prevent the default behavior of the form 
// Since this is what is causing the page to reload 
// In vanilla js we do this by accessing the event object as the first element in the callback
// and then calling prevent default on that object 
// This method can't be done using D3 structure, you can't access event object in D3 callbacks 

// The event object  
// d3.event
// - The property on d3 will contain all of the event information when referenced inside of an
// event handler
d3.select("#new-note").on("submit", function() {
	d3.event.preventDefault();
	var input = d3.select("input")
});

// Appending Elements 
// selection.append(tagName)
// Appends a new element of type tagName to every element in the selection. Returns a new d3 selection. 
d3.select("#new-note").on("submit", function() {
	d3.event.preventDefault();
	var input = d3.select("input");
	d3.select("#notes")
	  .append("p")
		.classed("note",true)
        .text(input.property("value"));
    input.property("value","");
});

// Remove Elements 
// All selection object has a remove() function 
// Example: 
d3.selectAll("p").remove(); 