// Generators 
// - A special kind of function which can pause execution and resume at any time. 
// - Created using a * 
// - When invoked, a generator object is returned to us with the keys of value and done.
// - Value is what is returned from the paused function using the yield keyword. 
// - Done is a boolean which returns true when the function has completed. 

function* pauseAndReturnValues(num){
    for(let i = 0; i < num; i++) yield i;
}

var gen = pauseAndReturnValues(5);

gen.next();

// Another example =>
function* printValues(){
    yield "First";
    yield "Second";
    yield "Third";
}

var g = printValues();
g.next().value; // "First"
g.next().value; // "Second"
g.next().value; // "Third"
g.next().value; // undefined


// Another Example => 

function* pauseAndReturnValues(num){
    for(let i = 0; i < num; i++) yield i;
}

for (val of pauseAndReturnValues(3)){
    console.log(val);
}

// Async Generators 
// - We can use generators to pause asynchronous code! 
function* getMovieData(movieName){
    console.log('starting')
    yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
    console.log('ending')
}

var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));