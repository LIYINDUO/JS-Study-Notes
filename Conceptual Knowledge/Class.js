// ES5 

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var elie = new Student('Elie', 'Schoppik');

//ES2015 

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var elie = new Student('Elie','Schoppik'); // same as ES5

// Let's see how to add methods which can be used by every single objected created from the class in object oriented programming

// ES5 
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; 
}

Student.prototype.saiHi = function() { // instance method placed on prototype
    return `Hello ${this.firstName} ${this.lastName}`;
}

Student.isStudent = function(obj) { // class method placed directly on the constructor function
    return obj.constructor === Student;
}

// ES2015 
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    static isStudent(obj){
        return obj.constructor === Student;
    }
}
// Class keyword Exercises 

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.
class Person{
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(num){
        return this.favoriteNumber * num;
    }
}
/* 2 - Add an instance method called multiplyFavoriteNumber that accepts 
one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/
