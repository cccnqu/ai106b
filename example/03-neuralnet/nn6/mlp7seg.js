const nn6 = require('nn6')

class Mlp7Seg extends nn6.net.Net {
  constructor () {
    super()
    let {a,b,c,d,e,f,g,b3,b2,b1,b0} = this.addVariables(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'b3', 'b2', 'b1', 'b0'])
    this.setDumpVariables(['b3', 'b2', 'b1', 'b0'])
    this.inputs = [ a, b, c, d, e, f, g ]
    this.out = [ b3, b2, b1, b0 ]
    this.gates = [
      new nn6.net.Mlp(this.inputs, 5, this.out, this)
    ]
  }
}

const inputs = [
// A B C D E F G 
  [1,1,1,1,1,1,0], // 0
  [0,1,1,0,0,0,0], // 1
  [1,1,0,1,1,0,1], // 2
  [1,1,1,1,0,0,1], // 3
  [0,1,1,0,0,1,1], // 4
  [1,0,1,1,0,1,1], // 5
  [1,0,1,1,1,1,1], // 6
  [1,1,1,0,0,0,0], // 7
  [1,1,1,1,1,1,1], // 8
  [1,1,1,1,0,1,1], // 9
]

const outs = [
   [0,0,0,0], // 0
   [0,0,0,1], // 1
   [0,0,1,0], // 2
   [0,0,1,1], // 3
   [0,1,0,0], // 4
   [0,1,0,1], // 5
   [0,1,1,0], // 6
   [0,1,1,1], // 7
   [1,0,0,0], // 8
   [1,0,0,1]  // 9
]

nn6.GradientLearning(new Mlp7Seg(), inputs, outs, 5000)
