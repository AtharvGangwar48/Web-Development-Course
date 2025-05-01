let gameSequence = []
let userSequence = []

let colours = ["red", "yellow", "green", "blue"]

let started = false
let level = 0

let heading = document.querySelector("h4")

document.addEventListener("keypress", function() {
  if (!started) {
    started = true
    levelUp()
  }
})

function gameFlash(btn) {
  btn.classList.add("flash")
  setTimeout(function() {
    btn.classList.remove("flash")
  }, 250)
}

function userFlash(btn) {
  btn.classList.add("userflash")
  setTimeout(function() {
    btn.classList.remove("userflash")
  }, 250)
}

function levelUp() {
  level++
  heading.innerText = `Level ${level}`

  let colour = Math.floor(Math.random() * 4)
  let randomColor = colours[colour]
  let randomBtn = document.querySelector(`.${randomColor}`)
  gameFlash(randomBtn)
  gameSequence.push(randomColor)
}

function btnPress(event) {
  let btn = event.target
  let btnColour = btn.classList[1]
  userFlash(btn)
  userSequence.push(btnColour)
  checkSequence()
}

function checkSequence() {
  if (userSequence.length === gameSequence.length) {
    if (userSequence.join("") === gameSequence.join("")) {
      levelUp()
    } else {
      alert("Game Over! Press any key to restart.")
      started = false
      level = 0
      gameSequence = []
      userSequence = []
    }
  }
}

let allBtn = document.querySelectorAll(".btn")
for (btn of allBtn) {
  btn.addEventListener("click", btnPress)
}