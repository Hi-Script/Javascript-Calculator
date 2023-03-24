//picking all the buttons
const sBtn = document.querySelector(".clr-el")
const inputEl = document.querySelector(".input-el")
const divisionBtn = document.querySelector(".division")
const multiplyBtn = document.querySelector(".multiply")
const substractBtn = document.querySelector(".substract")
const sevenBtn = document.querySelector(".seven")
const eightBtn = document.querySelector(".eight")
const nineBtn = document.querySelector(".nine")
const plusBtn = document.querySelector(".plus")
const fourBtn = document.querySelector(".four")
const fiveBtn = document.querySelector(".five")
const sixBtn = document.querySelector(".six")
const oneBtn = document.querySelector(".one")
const twoBtn = document.querySelector(".two")
const threeBtn = document.querySelector(".three")
const ansBtn = document.querySelector(".ans")
const zeroBtn = document.querySelector(".zero")
const dotBtn = document.querySelector(".dot")
const perBtn = document.querySelector(".percent")
const squareBtn = document.querySelector(".square")
const CubBtn = document.querySelector(".cube")


//add event to squareBtn
squareBtn.addEventListener("click", function() {
    inputEl.value = Math.sqrt(inputEl.value)
})

//add event to perBtn
perBtn.addEventListener("click", function() {
    inputEl.value += "%"
})

//add event to powerBtn
CubBtn.addEventListener("click", function(){
    inputEl.value = Math.cbrt(inputEl.value) 
})

//add event to sBtn
sBtn.addEventListener("click", function() {
    inputEl.value = ""


})

//add event to divisionBtn
divisionBtn.addEventListener("click", function() {
    inputEl.value += "/"


})

//add event to multiplyBtn
multiplyBtn.addEventListener("click", function() {
    inputEl.value += "*"


})

//add event to substractBtn
substractBtn.addEventListener("click", function() {
    inputEl.value += "-"


})

//add event to fiveBtn
fiveBtn.addEventListener("click", function() {
    inputEl.value += 5


})

//add event to fourBtn
fourBtn.addEventListener("click", function() {
    inputEl.value += 4


})

//add event to sevenBtn
sevenBtn.addEventListener("click", function() {
    inputEl.value += 7


})

//add event to eightBtn
eightBtn.addEventListener("click", function() {
    inputEl.value += 8


})

//add event to nineBtn
nineBtn.addEventListener("click", function() {
    inputEl.value += 9


})

//add event to oneBtn
oneBtn.addEventListener("click", function() {
    inputEl.value += 1


})

//add event to twoBtn
twoBtn.addEventListener("click", function() {
    inputEl.value += 2


})

//add event to threeBtn
threeBtn.addEventListener("click", function() {
    inputEl.value += 3


})


//add event to plusBtn
plusBtn.addEventListener("click", function() {
    inputEl.value += "+"


})

//add event to zeroBtn
zeroBtn.addEventListener("click", function() {
    inputEl.value += 0


})

//add event to sixBtn
sixBtn.addEventListener("click", function() {
    inputEl.value += 6


})





//add event to dotBtn
dotBtn.addEventListener("click", function() {
    inputEl.value += "."


})

//add event to ansBtn
ansBtn.addEventListener("click", function() {
    let gal  = eval (inputEl.value)
    inputEl.value = gal
    
    
})












