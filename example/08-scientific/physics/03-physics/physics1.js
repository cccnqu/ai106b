var j6 = require('j6')

var P = {
  xi: 0, yi:1, zi:2,
  Pi: Math.PI,
  G : 6.67408e-11,  // m3kg-1s-2 重力常數
  C0: 2.99792458e8, // ms-1
  Ke: 8.98755e9,    // N m2 c-2   庫倫常數
}

P.Mu0 = 4*P.Pi*10e-7,  // 真空磁導率
P.E0 =  1.0/(P.Mu0*P.C0*P.C0), // =8.854e-12  // 真空電容率

P.Object = class {
  constructor(params) {
    Object.assign(this, params)
  }
}

// 兩質點間的重力 f(m1, m2) = (G*m1*m2)/(r^2)
P.gravity2 = function (o1, o2) {
  let d12 = o1.at.sub(o2.at)
  let r = d12.norm()
  let force = d12.mul((P.G * o1.m * o2.m) / (r*r))
  return force
}

P.totalGravity = function (o1, oList) {
  let force = [0,0,0]
  for (let o of oList) {
    if (o !== o1)
      force = force.add(P.gravity2(o, o1))
  }
  return force
}

var o1 = new P.Object({m: 1e5, at:[0, 0, 0], v:[0, 0, 0]})
var o2 = new P.Object({m: 100e5, at:[10,0,0], v:[0, 0, 0]})
var o3 = new P.Object({m: 100e5, at:[0,10,0], v:[0, 0, 0]})
var oList = [o1, o2, o3]

console.log('gravity(o1,o2)=', P.gravity2(o1, o2))
console.log('gravity(o2,o1)=', P.gravity2(o2, o1))
console.log('totalGravity(o1)=', P.totalGravity(o1, oList))
