// All changes to this.state should be pure 

var person = {id: 53, name: "Tim"}

function addJob(personObj, job) {
    return {...personObj, job}; 
}

addJob(person, "Instructor");

// Pure functions are repeatable, it does not modify the global states of any variable, and its input arguments.

