function stringToArray(str){
    
let arr = [];
let len = str.length;

for(i=0;i<len;i++){
    let ele = str[i];
    arr.push(ele);
}

}

const arrayToString = function (arr) {
    let newStr=""; 
    let len1 = arr.length;
    for(i=0;i<=len1;i++){ 
        let ele1 = arr[i]; 
        console.log(ele1);
        let len2 = newStr.length;
        for(j=0;j<=len2;j++){
            if(ele1==newStr[j]){
              console.log(ele1);
                i++;
            }
            newStr = newStr + ele1;
            console.log(newStr);
        }
        return newStr;
    }
}