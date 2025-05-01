//Converted Number to array
let num = prompt("Enter the Number");
console.log(num);
let arr=[];
while(num>=1){
   let val = num%10;
   num = (num/10) - (val/10);
   arr.push(val);
}
console.log(arr);
 
//Sum
let sum = 0;
let len = arr.length;
for(i=0;i<len;i++){
   let sum1 = arr[i];
   sum= sum + sum1;
}
console.log(sum);
