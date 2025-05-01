let doubleAndReturnArgs = (arr, ...arg) => {
    let Arr2 = arr.map((el) => {
        return el*2
    })
    let arg2 = arg.map((k) => {
        return k*2
    })
    newArr = Arr2.concat(arg2)
    console.log(newArr)
}