const N = require('./neuron')

// f(x,y) = x^2 + y^2 + x + y
// 在 x=-1/2 y=-1/2 時，有最小值 -1/2
class Optimize {
  constructor (x, y) {
    // create input units
    this.x = new N.Variable(x, 0.0);
    this.y = new N.Variable(y, 0.0);
    // create the gates
    this.mulxx = new N.Product();
    this.mulyy = new N.Product();
    this.sumf = new N.Sum()
  }
  forward () {
    let xx = this.mulxx.forward([this.x, this.x]);
    let yy = this.mulyy.forward([this.y, this.y]);
    let f = this.sumf.forward([xx, yy, this.x, this.y])
    return f
  }
  backward () {
    this.sumf.backward();
    this.mulyy.backward();
    this.mulxx.backward();
  }
  adjust (step) {
    this.x.value += step * this.x.grad;
    this.y.value += step * this.y.grad;
  }
}

let net = new Optimize(1,2)

var lastValue = 9999

for (let i=0; i<300; i++) {
  var out = gradientDescendent(-0.01)
  // console.log('  x=%j y=%j', net.x, net.y)
  console.log('%d:out=%d', i, out.value)
  if (out.value > lastValue) break
  lastValue = out.value
}

function gradientDescendent(step) {
  let out = net.forward()
  // console.log('x=%j\ny=%j\nout=%j', net.x, net.y, out)
  net.x.grad = 0
  net.y.grad = 0
  out.grad = 1.0
  net.backward()
  net.adjust(step)
  return out
}
