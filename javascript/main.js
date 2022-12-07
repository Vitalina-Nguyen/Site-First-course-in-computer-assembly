const nav = document.querySelector('#nav')
const navBurgerBtn = document.querySelector('#nav-burger-btn')
const navBurgerImg = document.querySelector('#nav-burger-img')
const dayEl = document.querySelector('#day')
const hourEl = document.querySelector('#hour')
const minEl = document.querySelector('#min')
const secEl = document.querySelector('#sec')

let day = 1
let hour = 1
let min = 1
let sec = 3

setTimeout()

// Фун-ция установки Таймера
function setTimeout() {

    if (sec < 10) {
        secEl.innerHTML = `0${sec}`
    } else secEl.innerHTML = `${sec}`

    if (min < 10) {
        minEl.innerHTML = `0${min}`
    } else minEl.innerHTML = `${min}`

    if (hour < 10) {
        hourEl.innerHTML = `0${hour}`
    } else minEl.innerHTML = `${hour}`

    dayEl.innerHTML = `${day}`
}

// Фун-ция меняющая знак бургера на крестик
navBurgerBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBurgerImg.src = "./pic/navbar/navbar-burder-close.png"

    } else {
        navBurgerImg.src = "./pic/navbar/navbar-burder.png"
    }
}


//Реализания отсчёта таймера

setInterval(decreaseTime, 1000)


function decreaseTime() {
    if (sec > 0) {

        if (sec < 10) {
            secEl.innerHTML = `0${sec}`
        } else secEl.innerHTML = `${sec}`
        sec--
    }
    else if (sec === 0) {
        if (min > 0) {
            min--
            sec = 59

            secEl.innerHTML = `${sec}`

            if (min < 10) {
                minEl.innerHTML = `0${min}`
            } else minEl.innerHTML = `${min}`
        }
        else if (min === 0) {
            if (hour > 0) {
                hour--
                min = 59

                minEl.innerHTML = `${min}`

                if (hour < 10) {
                    hourEl.innerHTML = `0${hour}`
                } else hourEl.innerHTML = `${hour}`
            }
            else if (hour === 0) {
                if (day > 0){
                    day--
                    hour = 24
                    hourEl.innerHTML = `${hour}`
                } else if (day+hour+min+sec === 0){
                    sec = 0
                    secEl.innerHTML = `0${sec}`
                    return 0
                }
            }
        }
    }
}

