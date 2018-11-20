d3.json('sample_geo.json', function(error, data){
    if (error) throw error;

    var path = d3.geoPath();
    var width = 600;
    var height = 600;

    d3.select('svg')
        .attr('width', width)
        .attr('height', height)
      .selectAll('path') 
      .data(data.features)
      .enter()
      .append('path')
        .attr('d', path)
        .attr('fill', d => d.properties.color);


    debugger
});

// GeoJSON + D3
// Return a function 
// Returned function converts GeoJSON data into dat commands 
// Structurally similar to other D3 helpers, like d3.pie, d3.histogram, and d3.arc

// debugger path(data.features[0])
// "M0,0L0,100L100,100L100,0Z"