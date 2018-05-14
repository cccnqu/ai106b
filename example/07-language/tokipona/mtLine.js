const TP = require('./tokipona')

let s = process.argv[2]
let t = process.argv[3]
let words = process.argv.slice(4)

console.log(TP.mtArray(words, s, t))