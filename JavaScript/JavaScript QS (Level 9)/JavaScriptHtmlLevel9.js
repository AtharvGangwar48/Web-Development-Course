let newText = document.createElement("h1") 
document.querySelector("body").append(newText)
document.querySelector("h1").innerText = "DOM Practices"
document.querySelector("h1").style.textDecoration = "underline"
document.querySelector("h1").style.color = "purple"

let newPara = document.createElement("p") 
document.querySelector("body").append(newPara)
document.querySelector("p").innerHTML = "Apna College <b>Delta</b> Practice"

let newInput = document.createElement("input") 
document.querySelector("body").append(newInput)
document.querySelector("input").placeholder = "username"

let newButton = document.createElement("button") 
document.querySelector("body").append(newButton)
document.querySelector("button").innerText = "Click Me !!"
document.querySelector("button").id = "btn"
document.querySelector("#btn").style.backgroundColor = "blue"
document.querySelector("#btn").style.color = "white"