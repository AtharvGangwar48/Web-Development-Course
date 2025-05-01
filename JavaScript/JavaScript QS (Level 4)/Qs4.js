let num = prompt("Enter the number");
let num1 = 1;
if (num==0){
    console.log("1");
} 
if (num!=0){
    for(i=1;i<=num;i++){
        //console.log(i);
        num1 = i*num1;
    }
    console.log(num1);
}