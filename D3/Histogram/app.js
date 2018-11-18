const width = 600;
const height = 600;
const barPadding = 1;
const padding = 20;
// Generating a Histogram 
// d3.histogram()
// Return a function
// The returned function creates bins for data passed into it
// d3.histogram()([98,53,62,70,82,38,72,52,76])  [Array(1), Array(0), Array(2), Array(1), Array(3), Array(2)]
// Generating a Histogram 
// histogram.value([value]) // Specifies what value should be used when creating bins 

let minYear = d3.min(birthData, d => d.year);
let maxYear = d3.max(birthData, d => d.year);
let yearData = birthData.filter(d => d.year === minYear);

let xScale = d3.scaleLinear()
                 .domain(d3.extent(yearData, d => d.births))
                 .rangeRound([padding,width-padding]);
// histogram.thresholds([value])
// Specifies how the histogram generator should separate your data into bins 
// If value is an array, the thresholds will be based on the elements in the array
// If value is a number, D3 will try to make that many bins (but no guarantees!)
// scale.ticks([count]) Returns approximately count intermediate values from the scale's domain 

let histogram = d3.histogram() 
                    .domain(xScale.domain())
                    .thresholds(xScale.ticks())
                    .value(d => d.births);

let bins = histogram(yearData);

// bins
// (2) [Array(3), Array(1)]


let yScale = d3.scaleLinear() 
                 .domain([0, d3.max(bins, d => d.length)])
                 .range([height, 0]);

let bars = d3.select("svg")
                 .attr("width", width)
                 .attr("height", height)
                .selectAll(".bar")
                .data(bins)
                .enter()
                .append("g")
                  .classed("bar", true);

bars.append("rect")
      .attr("x", (d, i) => xScale(d.x0))
      .attr("y", d => yScale(d.length))
      .attr("height", d => height - yScale(d.length))
      .attr("width", d => {
        const width = (xScale(d.x1) - xScale(d.x0) - barPadding) 
        return width < 0 ? 0 : width;
      })
      .attr("fill", "#9c27b0");

// histogram.domain([domain])// specifies the domain of values (i.e. the min and max) for the histogram generator

bars.append("text")
      .text(d => `${d.x0} - ${d.x1} (bar height: ${d.length})`)
      .attr("transform", "rotate(-90)")
      .attr("y", d => (xScale(d.x1) + xScale(d.x0)) / 2)
      .attr("x", - height + 10)
      .style("alignment-baseline", "middle");

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear)
    .on("input", function(){
        let year =+ d3.event.target.value; 
        yearData = birthData.filter(d => d.year === year)
        xScale.domain(d3.extent(yearData, d => d.births))
        histogram.domain(xScale.domain())
                 .thresholds(xScale.ticks());
        bins = histogram(yearData);
        yScale.domain([0, d3.max(bins, d => d.length)]);

        bars = d3.select("svg")
                 .selectAll(".bar")
                 .data(bins);

        bars.exit()
            .remove();
        
        var g = bars.enter()
                    .append("g")
                      .classed("bar", true);

        g.append("rect");
        g.append("text");

        g.merge(bars).select("rect")
             .attr("x", (d, i) => xScale(d.x0))
             .attr("y", d => yScale(d.length))
             .attr("height", d => height - yScale(d.length))
             .attr("width", d => {
                 const width = (xScale(d.x1) - xScale(d.x0) - barPadding) 
                 return width < 0 ? 0 : width;
             })
             .attr("fill", "#9c27b0");

        g.merge(bars).select("text")
             .text(d => `${d.x0} - ${d.x1} (bar height: ${d.length})`)
             .attr("transform", "rotate(-90)")
             .attr("y", d => (xScale(d.x1) + xScale(d.x0)) / 2)
             .attr("x", - height + 10)
             .style("alignment-baseline", "middle");
        
    });