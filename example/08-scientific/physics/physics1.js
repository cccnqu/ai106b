var j6 = require('j6')

const Pi = Math.PI
const G = 6.67408e-11 // m3kg-1s-2 重力常數
const C0 = 2.99792458e8 // ms-1
const Ke = 8.98755e9  // N m2 c-2   庫倫常數
const Mu0 = 4*Pi*10e-7 // 真空磁導率
const E0 = 1.0/(Mu0*C0*C0) // =8.854e-12  // 真空電容率
const xi = 0, yi=1, zi=2

class PhysicsObject {
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

var o1 = new PhysicsObject({m: 1e5, at:[0, 0, 0], v:[0, 0, 0]})
var o2 = new PhysicsObject({m: 100e5, at:[10,0,0], v:[0, 0, 0]})
var o3 = new PhysicsObject({m: 100e5, at:[0,10,0], v:[0, 0, 0]})
var oList = [o1, o2, o3]

function totalGravity(o1, oList) {
  let force = [0,0,0]
  for (let o of oList) {
    if (o !== o1)
      force = force.add(gravity(o, o1))
  }
  return force
}

console.log('gravity(o1,o2)=', gravity(o1, o2))
console.log('gravity(o2,o1)=', gravity(o2, o1))
console.log('totalGravity(o1)=', totalGravity(o1, oList))
