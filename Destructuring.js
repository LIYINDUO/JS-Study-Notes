// Destructuring 
// Extracting values from data stored in objects and arrays

var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}

var firstName = instructor.firstName;
var lastName = instructor.lastName;

// ES2015

var {firstName:first, lastName:last} = instructor;


// Take a look at another more complexed example

function createInstructor(options){
    var options = options || {};
    var name = options.name || {first: "Matt", last: "Lane"}
    var isHilarious = options.isHilarious || false;
    return [name.first, name.last, isHilarious];
}

createInstructor();

createInstructor({isHilarious:true});

createInstructor({name: {first:"Tim", last:"Garcia"}});

//ES2015 
function createInstructor({name = {first:"Matt", last:"Lane"}, isHilarious=false } = {}){
    return [name.first, name.last, isHilarious];
}
/*
 - We're passing in a destructured object as a default parameter! 
 - We assign as a default value an empty object so ES2015 knows we are destructuring.
 - If nothing is passed in, we default to the destructured object as the parameter.
*/


// Object fields as parameters ES2015. 
function displayInfo({name,favColor}) {
    return [name, favColor];
}

var instructor = {
    name: "Eile",
    favColor: "Purple"
}

displayInfo(instructor);