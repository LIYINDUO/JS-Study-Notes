var width = 600;
var height = 600;

var nodes = [
  { color: "red", size: 5, },
  { color: "orange", size: 10 },
  { color: "yellow", size: 15 },
  { color: "green", size: 20 },
  { color: "blue", size: 25 },
  { color: "purple", size: 30 }
];

var svg = d3.select("svg")
              .attr("width", width)
              .attr("height", height);

var nodeSelection = svg
                      .selectAll("circle")
                      .data(nodes)
                      .enter()
                      .append("circle")
                        .attr("r", d => d.size)
                        .attr("fill", d => d.color);

var simulation = d3.forceSimulation(nodes);
simulation.force('center', d3.forceCenter(width / 2, height / 2))
          .force('nodes', d3.forceManyBody())
          .on('tick', () => {
            nodeSelection.attr('cx', d => d.x)
                         .attr('cy', d => d.y);
          });

// Force Simulation 
// d3.forceSimulation([nodes])
// starts a simulation acting on nodes
// simulation.nodes([newNodes])
// updates a simulation to act on newNodes
// Center Force 
// d3.forceCenter([x,y])
// force location(i.e. coordinates of where you'd like the force to pull nodes)

// Adding a Force 
// simulation.force(name,force) name of the force, description of the force

// Force Events 
// simulation.on(type, listener)
// tick - fires after every tick of the simulation's timer
// end - fires when the simulation's timer stops 

// Many Body Force
// d3.forceManyBody()
// adds forces between all nodes in the simulation by default, the forces are repulsive
// force.strength([newStrength])
// accepts a value or callback to set a new strength
// negative values are repulsive
// positive values are attractive
// default 'many body' strength is -30