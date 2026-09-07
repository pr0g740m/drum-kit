function removeTransition(e) {
  if (e.propertyName !== "transform") return
  e.target.classList.remove("playing")
}

function playSoundByKeyCode(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  if (!audio) return
  key.classList.add("playing")
  audio.currentTime = 0
  audio.play()
}

function playSoundOnKeydown(e) {
  console.log(e.keyCode)
  playSoundByKeyCode(e.keyCode)
}

function playSoundOnPointer(e) {
  e.preventDefault()
  const keyCode = this.getAttribute("data-key")
  playSoundByKeyCode(keyCode)
}

const keys = Array.from(document.querySelectorAll(".key"))
window.addEventListener("keydown", playSoundOnKeydown)

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition)
  key.addEventListener("click", playSoundOnPointer)
  key.addEventListener("touchstart", playSoundOnPointer, { passive: false })
})
