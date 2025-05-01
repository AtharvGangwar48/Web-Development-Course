let arr = [-123,-459,-4999,-512,-23];
let a = 0;
let b = 0;
for(i=0;i<arr.length;i++){
    a = arr[i];
    //console.log(a);
    if(a>b){
        b=a;
    }
}
console.log(b);