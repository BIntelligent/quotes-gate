let data;

(async () => {
    await fetch(`https://raw.githubusercontent.com/KarimX32/quotes-gate/main/configs/quotes.json`)
    .then(x => x.json())
    .then(x => data = x)
})()

console.log(data)

const btn = document.body //getElementById('btn')
// const quotes = [
//     "Don't be too much available for someone, otherwise you will lose you importance.",
//     "It doesn't matter how slow you do as long as you don't stop!",
//     "You can only live once, so never give up!",
//     "Anyone who never did a mistake, has never tried anything new.",
//     "Seek respect, not attention. It lasts longer."
// ]

function pickQuote() {
    const quote = data.motivation[Math.floor(Math.random() * data.motivation.length)]
    return quote
}


btn.addEventListener("click", () => {
    document.getElementById("quote").innerText = pickQuote()
})

document.body.onkeyup = function(x) {
    if(x.keyCode == 32 || x.keyCode == 13 || x.keyCode == 9){
        document.getElementById("quote").innerText = pickQuote()
    }
}

