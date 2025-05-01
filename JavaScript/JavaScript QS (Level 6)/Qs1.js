const arr = ["Atharv", 18, 11, 9, 2005,"Bareilly","Dehradun"];
const num = 3;
let len = arr.length;

//console.log(len);

function loop(len, num){
    let newArr=[];
    if(len<num){
        console.log("Length should be greater than number");
    }
    else if(len>num){
        for(i=num;i<=len;i++){
            //console.log(i);
            let ele = arr[i];
            //console.log(ele);
            newArr.push(ele);
        }
    }
    return newArr;
}
