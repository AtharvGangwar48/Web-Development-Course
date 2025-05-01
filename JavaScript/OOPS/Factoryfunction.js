function personMaker(name, age){
    const person = {
        name: name,
        age: age,
        Talk(){
            console.log("The Person can Talk");
        }
    }
    return person;
}

let p1 = personMaker("Adam",100000);
let p2 = personMaker("Manus",100000);
let p3 = personMaker("Eve",100000);