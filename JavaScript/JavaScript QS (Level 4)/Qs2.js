let num = prompt("Enter the number");
let arr = [];
while(num>=1){
   let num1 = num%10;
   num = num/10 - num1/10;
   console.log(num);
   console.log(num1);
   arr.push(num1);
console.log(arr);
}
let count = arr.length;
console.log(count);