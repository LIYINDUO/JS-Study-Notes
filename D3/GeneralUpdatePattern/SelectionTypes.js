
function setQuotes(dataArray){
    d3.select("#quotes")
      .selectAll("li")
      .data(dataArray)
      .enter()
      .append("li")
        .text(d => '"' + d.quote + '" - ' + d.movie + ' (' + d.year + ')')
        .style("margin", "20px")
        .style("padding", "20px")
        .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
        .style("background-color", d => colors[d.rating])
        .style("border-radius", "8px");
  }

// Make sure to select the parent element first. Or otherwise by default selectAll("li") will append the new element to html tag. 

// Selection Types 
// Inner join circles 
// Enter(data with no elements) --- join(Update(data + elements)) --- Exit(elements with no data)

// merge selections
selection.merge(otherSelection)
// Merge selection and other Seletion together into a new selection 
quotes = [...quotes, ...newQuotes];

var listItems = d3.select("#quotes")
                    .selectAll("li")
                    .data(quotes)

listItems.enter()
         .append("li")
           .text(d => '"' + d.quote + '" - ' + d.movie + ' (' + d.year + ')')
           .style("margin", "20px")
           .style("padding", "20px")
           .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
           .style("background-color", d => colors[d.rating])
           .style("border-radius", "8px")
         .merge(listItems)
           .style("color", "#5599ff");