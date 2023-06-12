// find element in DOM tree

let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let reset = document.querySelector(".reset")
let on_10 = document.querySelector(".on-10")
let on_50 = document.querySelector(".on-50")
let on_100 = document.querySelector(".on-100")
let h1 = document.querySelector("h1")

// create variable and logistics for variable

let count = localStorage.getItem("count")
count == null ? count = 0 : count

// create function update

const update = () => {
    localStorage.setItem("count", count)
    count = Number(localStorage.getItem("count"))
    h1.textContent = count
}

update()

// add event for element

minus.addEventListener("click", e => {
    count--
    update()
})

plus.addEventListener("click", e => {
    count++
    update()
})

reset.addEventListener("click", e => {
    count = 0
    update()
})

on_10.addEventListener("click", e => {
    count += 10
    update()
})

on_50.addEventListener("click", e => {
    count += 50
    update()
})

on_100.addEventListener("click", e => {
    count += 100
    update()
})