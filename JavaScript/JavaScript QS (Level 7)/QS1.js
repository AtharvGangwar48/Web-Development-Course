arrayAverage = arr => {
    let avg = 0;
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    avg = sum/arr.length
    return avg;
}