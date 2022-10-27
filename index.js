let count = 0
let counttwo = 0
let guestScore = document.getElementById("guest-score")
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function plus1(){
    count += 1
    homeEl.textContent = count
}

function plus2(){
    count += 2
    homeEl.textContent = count
}

function plus3(){
    count += 3
    homeEl.textContent = count
}

function gplus1(){
    counttwo += 1
    guestEl.textContent = counttwo
}

function gplus2(){
    counttwo += 2
    guestEl.textContent = counttwo
}

function gplus3(){
    counttwo += 3
    guestEl.textContent = counttwo
}



