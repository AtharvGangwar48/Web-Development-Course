let num = [80, 10, 30, 40, 20, 50, 60, 70]

console.log(num.every((el) => el%10 == 0))

let mini = num.reduce((min,el) => 
    {if(el<min){
        return el
    }
    else{
        return min
    }
}
)
console.log(mini)