var j6 = require('j6')

var c = 3
var v = [1,2,3]
var v2 = [2,2,2]

console.log('cv=%j', v.mul(c))
console.log('v-v2=%j', v.sub(v2))
console.log('v.norm()=%j', v.norm())
