var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);
var width = 600;
var height = 600;

let continents = [];
for(let i = 0; i < birthData.length; i++){
    let continent = birthData[i].continent;
    if(!continents.includes(continent)){
        continents.push(continent);
    }
}

// d3.scaleOrdinal() 
// Maps a discrete set of points (e.g.[1,2,3]) to another discrete set of points(e.g.['a','b','c'])

var colorScale = d3.scaleOrdinal()
                   .domain(continents)
                   .range(d3.schemeCategory10);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`)
    .classed("chart", true);

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear)
    .on("input", () => {
        makeGraph(+d3.event.target.value);
    });

makeGraph(minYear);



function makeGraph(year){
    var yearData = birthData.filter(d => d.year === year);

    let arcs = d3.pie()
        .value(d => d.births)
        .sort(function(a, b) {
            if(a.continent < b.continent) {
                return -1;
            }
            else if (a.continent > b.continent){
                return 1;
            }
            else {
                return a.births - b.births;
            }
        })
        (yearData);
    // arc.innerRadius([val])
    // arc.outerRadius([val])
    // arc.startAngle([val])
    // arc.endAngle([val])
    let path = d3.arc()
        .outerRadius(width / 2 - 10)
        .innerRadius(width / 4);
        // .padAngle(0.02)
        // .cornerRadius(20); // That's one way 

    var update = d3.select(".chart")
                   .selectAll(".arc")
                   .data(arcs);
    
    update.exit()
          .remove();

    update.enter()
          .append("path")
            .classed("arc", true)
          .merge(update)
             .attr("fill", d => colorScale(d.data.continent))
             .attr("stroke", "black")
             .attr("d", path);
}

// Chart Styling Helpers 
// pie.padAngle - set padding between arcs
// arc.padAngle - set padding between arcs 
// arc.cornerRadius - round arc corners 

// Sorting Arcs 
// pie.sort([comparator])
// comparator(a, b) < 0: a should come before b 
// comparator(a, b) > 0: a should come after b 
// comparator(a, b) == 0: a and b are equivalent 