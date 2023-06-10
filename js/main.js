let h1 = document.querySelector("h1")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let reset = document.querySelector(".reset")
let on10 = document.querySelector(".on-10")
let on50 = document.querySelector(".on-50")
let on100 = document.querySelector(".on-100")

let count = Number(localStorage.getItem("count"));

count == null ? count = 0 : count

const update = () => {
    localStorage.setItem("count", count)
    count = Number(localStorage.getItem("count"))
    h1.textContent = count
}

update()

plus.addEventListener("click", e => {
    count++
    update()
})

minus.addEventListener("click", e => {
    count--
    update()
})

reset.addEventListener("click", e => {
    count = 0
    update()
})

on10.addEventListener("click", e => {
    count += 10
    update()
})

on50.addEventListener("click", e => {
    count += 50
    update()
})

on100.addEventListener("click", e => {
    count += 100
    update()
})