var P = require('./physics')

var World = class {
  constructor() {
    this.oMap = {}
    this.hookMap = {}
  }
  addObj(name, param) {
    let o = new P.Object(param)
    o.name = name
    this.oMap[name] = o
    return o
  }
  addHook(name, param) {
    let hook = new P.Hook(param)
    this.hookMap[name] = hook
  }
  gravity(o) {
    return P.totalGravity(o, this.oMap)
  }
  force(o) {
    let force = P.totalGravity(o, this.oMap)
    for (let k in this.hookMap) {
      let hook = this.hookMap[k]
      console.log('hook=', hook)
      let hForce = P.hookForce(o, hook)
      console.log('  hForce:', hForce)
      force = force.add(hForce)
    }
    return force
  }
}

var W = new World()

var o1 = W.addObj('o1', {m: 1e5, at:[0, 0, 0], v:[0, 0, 0]})
var o2 = W.addObj('o2', {m: 100e5, at:[10,0,0], v:[0, 0, 0]})
var o3 = W.addObj('o3', {m: 100e5, at:[0,10,0], v:[0, 0, 0]})
var h1 = W.addHook('h1', {o1: o1, o2:o2, L0:3, k:1})

console.log('gravity(o1,o2)=', P.gravity2(o1, o2))
console.log('gravity(o2,o1)=', P.gravity2(o2, o1))
console.log('totalGravity(o1)=', W.gravity(o1))
console.log('totalForce(o1)=', W.force(o1))