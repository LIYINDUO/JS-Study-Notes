// enter were used to access elements that d3 created on the fly when it needs to bin data to things that don't exist yet in the DOM. 
// There's a analogous method called Exit which we can use to target elements that should be removed from the DOM


quotes.pop() // remove the last element in the array datasource

d3.selectAll("li") // update the DOM accordingly 
  .data(quotes)
  .exit()
  .remove();

var nonRQuotes = quotes.filter(val => val.rating !== "R");

d3.selectAll("li")
.data(nonRQuotes)
.exit()
.remove()

// In D3, by default data is joined to elements on the page by index
// The first element in the nonRQuotes array is matched to the first list item
// non[0] <-> block{quote: "I see dead people.""}
// so originally there were five list item on the page, only the first 3 is matched
// Left with the last two element being thrown in the exit selection

// To fix this problem: 
// - restyle the elements
  d3.selectAll("li")
      .text(d => `"${d.quote}" - ${d.movie} (${d.year})`)
      .style("margin", "20px")
      .style("padding", "20px")
      .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
      .style("background-color", d => colors[d.rating])
      .style("border-radius", "8px");

// - Or use key functions 
// To specify how data is matched 
// selection.data(dataArr, [keyFunction]) Return value used to join elements and data
var nonRQuotes = quotes.filter(val => val.rating !== "R");

d3.selectAll("li")
.data(nonRQuotes, function(d){
    return d.quote;
})
.exit()
.remove();