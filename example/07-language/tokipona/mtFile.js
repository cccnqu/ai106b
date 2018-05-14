const fs = require('fs')
const TP = require('./tokipona')

let s = process.argv[2]
let t = process.argv[3]
let file = process.argv[4]
let text = fs.readFileSync(file, 'utf-8')
let toText = TP.mtText(text, s, t)
console.log(toText)
fs.writeFileSync(file+'.'+t, toText, 'utf-8')
