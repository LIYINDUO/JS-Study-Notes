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

        var letters = d3.select("#letters")
                          .selectAll(".letter")
                          .data(getFrequencies(text), k => k.character);

        letters.classed("new", false)
                .exit()
                .remove();
        
        letters.enter()
               .append("div")
                 .classed("letter", true)
                 .classed("new", true)
               .merge(letters)  
                 .text(d => d.character)
                 .style("width", "20px")
                 .style("line-height", "20px")
                 .style("margin-right", "5px")
                 .style("height", d => `${d.count * 20}px`);

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