// Axes 
d3.axisTop(scale)
d3.axisRight(scale)
d3.axisBottom(scale)
d3.axisLeft(scale)



// Example
const yScale = d3.scaleLinear()
                 .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
                 .range([height - padding, padding]);


const xScale = d3.scaleLinear()
                 .domain(d3.extent(birthData2011, d => d.births / d.population))
                 .range([padding, width - padding]);

const xAxis = d3.axisBottom(xScale)

const yAxis = d3.axisLeft(yScale)

const colorScale = d3.scaleLinear()
                     .domain(d3.extent(birthData2011, d => d.population / d.area))
                     .range(['lightgreen','black']);

const radiusScale = d3.scaleLinear()
                      .domain(d3.extent(birthData2011, d => d.births))
                      .range([2, 40])

d3.select("svg")
  .append("g")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis);

d3.select("svg")
  .append("g")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);



// Gridlines 
// axis.tickSize([size])
