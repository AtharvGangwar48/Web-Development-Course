/*let trial = document.querySelector("h1")
trial.addEventListener("mouseout", function click(){
    console.log("Checking MouseOut")
})

let newEle = document.createElement("input")
newEle.placeholder =  "Enter"
document.querySelector("body").append(newEle)
let trial = document.querySelector("input")
trial.addEventListener("keypress", function click(){
    console.log("Checking Keypress")
})

let trial = document.querySelector("body")
trial.addEventListener("load", function click(){
    console.log("Checking Load")
})*/

let newEle = document.createElement("h2")
newEle.innerText =  "heading"
document.querySelector("html").append(newEle)

let newEle0 = document.createElement("input")
newEle0.placeholder =  "Enter your name"
document.querySelector("body").append(newEle0)
newEle0.addEventListener("keypress",function(){
    let input = nameInput.value
})

let newEle1 = document.createElement("button")
newEle1.innerText =  "Click Me"
document.querySelector("body").append(newEle1)

let trial1 = document.querySelector("button")
trial1.addEventListener("click", function (){
    newEle1.style.backgroundColor = "green"
}
)

