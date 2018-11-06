function printRest(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

printRest(1,2,3,4,5,6,7)


// 1, 2, [3,4,5,6,7] c as arguments
// array-like object to array => [].slice.call(arguments);

var sumArguments = (...args) => args.reduce((acc,next) => acc + next);

// ES2018 Object Rest
// - Gather remaining(rest) of keys and values in an object and create a new one out of them 
var instructor = {
    first: "Elie",
    last: "Schoppik",
    job: "Instructor",
    numSiblings: 3
}

var {first, ...rest} = instructor;

first;
rest;
