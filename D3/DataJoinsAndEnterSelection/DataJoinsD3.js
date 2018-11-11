

d3.select("#quotes")
    .style("list-style", "none")
  .selectAll("li")
  .data(quotes) // create placeholder nodes with data attached to them
  .enter()      // create selection with those nodes generated above 
  .append("li")
    .text(function(d){
        return d.quote;
    });

// Callback Structure 
// function (d, i) {}
// d => data bound to the current element
// i => index of the element


// Further Enhancements: 

var colors = {
    "G": "#3cff00",
    "PG": "#f9ff00",
    "PG-13": "#ff9000",
    "R": "#ff0000"
}


d3.select("#quotes")
    .style("list-style", "none")
  .selectAll("li")
  .data(quotes) // create placeholder nodes with data attached to them
  .enter()      // create selection with those nodes generated above 
  .append("li")
    .text(d => `"${d.quote}" - ${d.movie} (${d.year})`)
    .style("margin", "20px")
    .style("padding", "20px")
    .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
    .style("background-color", d => colors[d.rating])
    .style("border-radius", "8px");