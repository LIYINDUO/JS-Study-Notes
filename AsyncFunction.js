// Introduced in ES2017 

// - A special kind of function that is created using the word async 

// - The purpose of async functions is to simplify writing asynchronous code, specifically Promises. 

async function first(){
    return "We did it!";
}

first(); // returns a promise 

first().then(val => console.log(val)); // "We did it!"

// Await ** 

// - A reserved keyword that can only be used inside async functions 

// - await pauses the execution of the async function and is followed by a Promise. The await keyword waits for the promise to resolve,
//   and then resumes the async function's execution and returns the resolved value.

// - Think of the await keyword like a pause button (similar to yield with generators)

async function getMovieData(){
    console.log("starting!");
    var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
    // this line does NOT run until the promise is resolved! 
    console.log("all done!");
    console.log(movieData);
}

getMovieData() // logs an object with data about the movie! 
// No .then or callback or yield necessary 


// *Object async 
// - We can also place async functions as methods inside objects! 
//   Just make sure to prefix the name of the function with the async keyword 
var movieCollector = {
    data: "titanic", 
    async getMovie(){
        var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
        console.log(response);
    }
}

movieCollector.getMovie();


// *Class async 
// - We can also place async functions as instance methods with es2015 class syntax 
class MovieData {
    constructor(name){
        this.name = name;
    }
    async getMovie(){
        var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
        console.log(response);
    }
}
var m = new MovieData('shrek');
m.getMovie();

// *Handling errors 
// - If a promise is rejected using await, an error will be thrown so we can easily use a try/catch 
//   statement to handle errors! 
async function getUser(user){
    try{
        var response = await $.getJSON(`https://api.github.com/users/${user}`);
        console.log(response.name);
    } catch(e) {
        console.log("User does not exist!");
    }
}
getUser('elie'); // Elie Schoppik 
getUser('foo!!!'); // User does not exist!!

// Thinking about HTTP Requests 
// - Below we are making two requests sequentially 
// - Sequential Not Parallel
async function getMovieData(){
    var responseOne = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var responseTwo = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
    console.log(responseOne);
    console.log(responseTwo);
}

getMovieData();

// * Refactoring The above code. There is a tremendous performance difference when you're making each http requests sequentially
// MUCH FASTER
async function getMovieData(){
    var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

    var titanicData = await titanicPromise;
    var shrekData = await shrekPromise;

    console.log(titanicData);
    console.log(shrekData);
} 
getMovieData();

//* Await with Promise.all
// - We can use Promise.all to await multiple resolved promises 
async function getMovieData(first, second){
    var moviesList = await Promise.all([
        $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
        $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
    ]); 
    console.log(moviesList[0].Year);
    console.log(moviesList[1].Year);
}
getMovieData('shrek','blade');
// Here we are simply wating for an array of promises to resolve! 
// Instead of using a .then and callback function

// The benefit is that the code here we are writing is asynchronous yet it reads very synchronously and once you get used to async funcitons,
// it'll become more and more readable