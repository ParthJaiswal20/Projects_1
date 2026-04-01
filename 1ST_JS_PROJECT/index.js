let count = 0

let countEl = document.getElementById("count-el")
let

// CREADTED THE FUNCTION INCREMENT , 
// WHICH WILL TRIGGER WHEN THE BUTTON WILL BE PRESSED 
function increment() {
    count += 1
    countEl.innerText = count
}

function save(){
    countEl.textContent = 0
    count = 0
}