var firstName = "Elie";
var lastName = "Schoppik";

// ES5 
var instructor = {
    firstName: firstName,
    lastName: lastName
}

// ES2015 
var instructor = {
    firstName,
    lastName
}

// ES5 
var instructor = {
    sayHello: function(){
        return "Hello!";
    }
}

//ES2015
var instructor = {
    sayHello() {
        return "Hello!";
    }
}