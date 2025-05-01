const max = prompt("Enter the maximum number");
let int1 = Math.random();
let int2 = int1 * max;
let int3 = Math.floor(int2);
const randomNum = int3 + 1;
//console.log(randomNum);
while(true){
    let num = prompt("Guess the number or Enter 'Quit to quit the game'");
    if(num == "Quit"){
        console.log(randomNum);
        break;
    }
    if(randomNum == num){
        console.log("Congrats! You caught it...")
        console.log(randomNum);
        break;
    }
    else if(num<randomNum){
        console.log("You have enter a smaller number...");
    }
    else if(num>randomNum){
        console.log("You have enter a greater number...");
    }
}