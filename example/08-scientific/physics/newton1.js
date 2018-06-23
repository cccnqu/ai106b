var j6 = require('j6')

const G = 6.67408e-11
const xi = 0, yi=1, zi=2

class PhysicObject {
  constructor(params) {
    Object.assign(this, params)
  }
}

function gravity(o1, o2) {
  let d12 = o1.at.sub(o2.at)
  let r = d12.norm()
  let force = d12.mul((G * o1.m * o2.m) / (r*r))
  return force
}

var o1 = new PhysicObject({m: 1e5, at:[0, 0, 0], v:[0, 0, 0]})
var o2 = new PhysicObject({m: 100e5, at:[10,0,0], v:[0, 0, 0]})

console.log('gravity(o1,o2)=', gravity(o1, o2))
console.log('gravity(o2,o1)=', gravity(o2, o1))
