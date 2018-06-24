var LSTM = require('./lstm')
var fs = require('fs')

var argv = process.argv
var maxLen = (argv.length >= 4) ? parseInt(argv[3]) : 100
LSTM.mode = (process.argv.length >= 5) ? process.argv[4] : 'char'
var json = fs.readFileSync(process.argv[2])
LSTM.fromJSON(json)
var sLines = ['', '\n']
LSTM.genLines(sLines, [], maxLen)
