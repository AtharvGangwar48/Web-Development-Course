let newPara = document.createElement("p")
newPara.innerText = "Hey! I am Red"
document.querySelector("body").append(newPara)
document.querySelector("p").style.color = "red"

let newPara1 = document.createElement("h3")
newPara1.innerText = "Hey! I am Blue"
document.querySelector("body").append(newPara1)
newPara1.classList.add("col")

let newDiv = document.createElement("div")
document.querySelector("body").append(newDiv)
document.querySelector("div").style.width = "500px"
document.querySelector("div").style.height = "500px"

let newh1 = document.createElement("h1")
document.querySelector("div").append(newh1)
newh1.innerText = "Hi!! I am a Div"

let newP = document.createElement("p")
document.querySelector("div").append(newP)
newP.innerText = "Me too"