let arr = [1, 2, 3, 4, 5, 6, 2, 3];
//let num = prompt("Enter the number to be deleted from Array");
while(num in arr){
    for (i=0;i<arr.length;i++){
        let elemt = arr[i];
        if(num==elemt){
            arr.splice(i,1);
            console.log("Deleted");
            console.log(arr);
        }
        break;
    }
}