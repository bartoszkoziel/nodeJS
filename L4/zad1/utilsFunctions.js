//różne funkcje pomocnicze

const rand = (x) => { return Math.random() * x }
const randfix = (y) => Math.random().toFixed(y)
function sum(a, b) {
    return a + b
}

module.exports = { rand, randfix, sum }