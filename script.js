const puppet = document.querySelector('.puppet')
const head = document.querySelector('.head')
const leftArm = document.querySelector('.leftArm')
const rightArm = document.querySelector('.rightArm')
const body = document.querySelector('.body')
const belt = document.querySelector('.belt')
const zip = document.querySelector('.zip')
const leftLeg = document.querySelector('.leftLeg')
const rightLeg = document.querySelector('.rightLeg')
const leftFoot = document.querySelector('.leftFoot')
const rightFoot = document.querySelector('.rightFoot')
const hp = document.querySelector('.hp')
let hpValue = document.querySelector('.hpValue')
const img = document.querySelector('.img')

let hpAmount = 100

function upDateValue(a) {
  if (a <= 0) {
    puppet.classList.add('disappear')
    hp.style.width = `0%`
    img.classList.add('show')
  }
  hpValue.textContent = `${a}hp`
  hp.style.width = `${a}%`
}

function addAnimation(a) {
  a.classList.add('hit')
  setTimeout(() => {
    a.classList.remove('hit')
  }, 300)
}

head.onclick = () => {
  hpAmount -= 100
  upDateValue(hpAmount)
  addAnimation(head)
}

leftArm.onclick = () => {
  hpAmount -= 30
  upDateValue(hpAmount)
  addAnimation(leftArm)
}

rightArm.onclick = () => {
  hpAmount -= 30
  upDateValue(hpAmount)
  addAnimation(rightArm)
}

body.onclick = () => {
  hpAmount -= 15
  upDateValue(hpAmount)
  addAnimation(body)
}

belt.onclick = () => {
  hpAmount -= 5
  upDateValue(hpAmount)
  addAnimation(belt)
}

zip.onclick = () => {
  hpAmount -= 40
  upDateValue(hpAmount)
  addAnimation(zip)
}

leftLeg.onclick = () => {
  hpAmount -= 20
  upDateValue(hpAmount)
  addAnimation(leftLeg)
}

rightLeg.onclick = () => {
  hpAmount -= 20
  upDateValue(hpAmount)
  addAnimation(rightLeg)
}

leftFoot.onclick = () => {
  hpAmount -= 3
  upDateValue(hpAmount)
  addAnimation(leftFoot)
}

rightFoot.onclick = () => {
  hpAmount -= 3
  upDateValue(hpAmount)
  addAnimation(rightFoot)
}
