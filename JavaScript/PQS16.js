let greet = "Hello";//Global scope

function changeGreet(){
    let greet = "Namaste";//Function scope
    console.log(greet);//Namaste
    function innerGreet(){
        console.log(greet);//Namaste & Lexial scope
    }
    innerGreet();
}

console.log(greet); //Hello
changeGreet();