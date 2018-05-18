let B = require('../lib/grammar')
// run : node gen 100000 tag > tag.100000
//       node gen 100000 > word.100000
B.mode = process.argv[3]
B.gen(parseInt(process.argv[2]))
