let arr = [{
    student : "Atharv",
    marks : 90},
    {
    student : "Dev",
    marks : 97
    },
    {
    student : "Neha",
    marks : 89
} 
]

/*arr.forEach((mark) => {
    console.log(mark.marks)
})
*/
let num = [90, 97, 89]
let half = num.map((el) => {
    return el/2
})
console.log(half)
 
console.log(num.every((el) => el > 50))