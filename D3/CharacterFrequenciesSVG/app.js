const width = 800;
const height = 400;
const barPadding = 10;
let svg = d3.select("svg")
              .attr("width", width)
              .attr("height", height);



d3.select("#reset")
    .on("click", function(){
        d3.selectAll(".letter")
            .remove();

        d3.select("#phrase")
            .text("");
            
        d3.select("#count")
            .text("");
    })

d3.select("form")
    .on("submit", function(){
        d3.event.preventDefault();
        var input = d3.select("input");
        var text = input.property("value").replace(/\s/g,"");
        var data = getFrequencies(text);
        var barWidth = width / data.length - barPadding;
        var letters = svg.selectAll(".letter")
                           .data(data, k => k.character);

        letters.classed("new", false)
                .exit()
                .remove();
        
        var lettersEnter = letters
               .enter()
               .append("g")
                 .classed("letter", true)
                 .classed("new", true);

        lettersEnter.append("rect");
        lettersEnter.append("text");

        lettersEnter.merge(letters)  
                 .select("rect")
                 .style("width", barWidth)
                 .style("height", d => d.count * 20)
                 .attr("x", (d,i) => (barWidth + barPadding)*i)
                 .attr("y", d => height - (d.count * 20));

        lettersEnter.merge(letters)  
                 .select("text")
                 .style("width", barWidth)
                 .style("height", d => d.count * 20)
                 .attr("x", (d,i) => barWidth / 2 + (barWidth + barPadding)*i)
                 .attr("y", d => height - (d.count * 20) - 10)
                 .attr("text-anchor", "middle")
                 .text(d => d.character);



        d3.select("#phrase")
             .text(`Analysis of: ${text}`);

        d3.select("#count")
            .text(`(New characters: ${letters.enter().nodes().length})`)
        
        input.property("value", "");
    });

function getFrequencies(str) {
    var sorted = str.split("").sort();
    var data = [];
    for (let i = 0; i < sorted.length; i++){
        let last = data[data.length - 1];
        if(last && last.character === sorted[i]) last.count++;
        else data.push({ character: sorted[i], count: 1 });
    }
    return data;
}

// getFrequencies("hello"); [{character: "e", count: 1}, ..., {character: "o", count: 1}]