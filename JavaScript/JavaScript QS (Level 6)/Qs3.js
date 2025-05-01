function longestCountry(len){
    let arr = []; 
    for(i=1;i<=len;i++){
        let ele = prompt("Enter the names of countrys");
        arr.push(ele);
    }
    console.log(arr);
    for(j=0;j<arr.length;j++){ 
        let ele1 =  arr[j];
       //console.log(ele1);
        let len = ele1.length;
       //console.log(len);
        let len1 = 0;
        if(len>len1){
            contry = ele1;
            //console.log(country);
            len1 = len;
        }
        
        //console.log(len1);
        return country;
    }
}