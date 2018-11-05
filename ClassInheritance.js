// Inheritance
// Passing along methods and properties from one class to another 

// ES5 Inheritance
 function Person(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
 }

 Person.prototype.sayHello() = function(){
     return "Hello " + this.firstName + " " + this.lastName;
 }

 function Student(){
    Person.apply(this, arguments);
 }

 Student.prototype = Object.create(Person.prototype);
 Student.prototype.constructor = Student;

 // ES2015 Inheritance 

 class Person {
     constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
     }
     sayHello(){
        return "Hello " + this.firstName + " " + this.lastName;
    }
 }

 // *Important*!!! Keyword Super Examples: =>
 // 'super', the idea behind super is to find a method by the same name in the parent class or the class which has 
 //  passed down methods and properties to a child class

 class Student extends Person {
    constructor(firstName, lastName){
        // you must use super here!
        super(firstName, lastName)
    }
}

// Class Inheritance Exercises =>

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(){
        return "VROOM!"
    }
    toString(){
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(){
        super(...arguments);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(){
        super(...arguments);
        this.numWheels = 2;
    }
}

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the 
//Car function should also have a make, model, and year and a property called numWheels which should be 4. 
//The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype