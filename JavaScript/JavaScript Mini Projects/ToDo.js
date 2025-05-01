let ult = document.querySelector("ul")
let btn = document.querySelector("button")
let inp = document.querySelector("input")

btn.addEventListener("click", function (){
    let activity = document.createElement("li")
    document.querySelector("ul").append(activity)
    let delt = document.createElement("button")
    document.querySelector("ul").append(delt)
    activity.innerText = inp.value
    inp.value =""
    delt.innerText = "Delete"
    delt.setAttribute("class","delt")
})

ult.addEventListener("click",function (){
    if (event.target.nodeName == "button"){
        let listItem = event.target.parentElement
        listItem.remove()
    }
})