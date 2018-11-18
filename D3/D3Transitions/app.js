var minYear = d3.min(birthData, function(d) { 
  return d.year;  
});
var maxYear = d3.max(birthData, function(d) {
  return d.year;
});
var width = 600;
var height = 600;
var barPadding = 10;
var numBars = 12;
var barWidth = width / numBars - barPadding;
var maxBirths = d3.max(birthData, function(d) { 
  return d.births;
});
var yScale = d3.scaleLinear()
               .domain([0, maxBirths])
               .range([height, 0]);

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .data(birthData.filter(function(d) {
    return d.year === minYear;
  }))
  .enter()
  .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
      return height - yScale(d.births);
    })
    .attr("y", function(d) {
      return yScale(d.births);
    })
    .attr("x", function(d,i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "purple");

d3.select("svg")
  .append("text")
    .classed("title", true)
    .text("Birth Data in " + minYear)
    .attr("x", width / 2)
    .attr("y", "30")
    .style("text-anchor", "middle")
    .style("font-size", "2em")

d3.select("input")
    .on("input", function() {
      var year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter(function(d) {
          return d.year === year;
        }))
        .transition()
          .duration(2000)
          .ease(d3.easeLinear)
          .delay((d,i) => i * 250)
          .on("start", (d, i) => {
            if(i === 0){
              d3.select(".title")
                  .text(`Updating to ${year} data...`)
            }
          })
          .on("end", (d, i, nodes) => {
             if(i === nodes.length - 1 ){
               d3.select(".title")
                   .text(`Birth Data in ${year}`)
             }
          })
          .on("interrupt", (d, i) => {
             console.log(`Interrupted! No longer updating to ${year} data...`)
          })
          .attr("height", function(d) {
            return height - yScale(d.births);
          })
          .attr("y", function(d) {
            return yScale(d.births);
          });
    });



// Transitions in D3 
// d3.transition() 
// Create a new transition 
// Example transition methods 
// transition.attr(name, newVal) - transition name to newVal
// transition.style(name, newVal) - transition name to newVal
// transition.transition() - chain a new transition 
// transition.merge(other) - merge transitions
// transition.selection() - access transitions's D3 selection 
// d3.selectAll("rect").transition()
// Transition {_groups: Array(1), _parents: Array(1), _name: null, _id: 116}


// d3.selectAll("rect").attr === d3.selectAll("rect").transition().attr 
// false

// d3.selectAll("rect").attr("fill", "orange") 
// Selection {_groups: Array(1), _parents: Array(1)}
// d3.selectAll("rect").transition().attr("fill", "purple") 
// Transition {_groups: Array(1), _parents: Array(1), _name: null, _id: 118}


// d3.selectAll("rect").attr("fill", "orange") 
// Selection {_groups: Array(1), _parents: Array(1)}
// d3.selectAll("rect").transition().attr("fill", "purple") 
// Transition {_groups: Array(1), _parents: Array(1), _name: null, _id: 118}

// D3 will calculate intermediate values between the old value and the new value which is what
// gives the impression of a smooth transition
// This is called interpolation

// By default the duration will last for 250 milliseconds 
// transition.duration([value]) // value can be a number or a callback 

// Transition Speed 
// transition.ease([value])

// Delay 
// transition.delay([value]) // value can be a constant or a callback to be invoked on each element 

// Transition Event
// transition.on(typenames,[listener]) // start, end, interrupt