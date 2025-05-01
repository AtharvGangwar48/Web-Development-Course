const square = (...num) => {
    num.forEach( (el) => {
        console.log(el*el)
    })   
}

const sum = (...num) => {
    console.log(num.reduce((el,reslt) => el+reslt))   
    
}

const average = (...num) => {
    console.log((num.reduce((el,reslt) => el+reslt))/num.length)   
}