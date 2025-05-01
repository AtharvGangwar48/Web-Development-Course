let btn = document.querySelector("button")

btn.addEventListener("click",function randomColour(){
    let color = document.querySelector("div")
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let colours = `(${red}, ${green}, ${blue})`
    color.style.backgroundColor = `rgb${colours}`
})
