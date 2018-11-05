function Person(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

function Student(firstname,lastname,age){
    Person.apply(this,arguments);
}

Student.prototype.sayHi = function(){
    return this.firstname + " " + this.lastname + " says Hi!!!";
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

var elie = new Student("Elie", "Rivia", 19);

elie.sayHi();