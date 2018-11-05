// ES5 
var firstName = "Elie";
var instructor = {};
instructor[firstName] = "That's me!";

instructor.Elie;

//ES2015 

var firstName = "Elie";
var instructor ={
    [firstName]: "That's me!"
}