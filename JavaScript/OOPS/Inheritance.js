class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hello");
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
  
}

class Teacher extends Person{
    constructor(name, age, subjects){
        super(name, age);
        this.subjects = subjects;
    }
  
}