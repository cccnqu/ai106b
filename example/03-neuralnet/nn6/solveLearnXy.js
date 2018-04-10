const nn6 = require('nn6')

// 2x+y=3
//  x+y=2
// 解答： x=1, y=1
class Net1 extends nn6.net.Net {
  constructor () {
    super()
    let {a, b, x, y, f} = this.addVariables(['a', 'b', 'x', 'y', 'f'])
    this.setDumpVariables(['x', 'y', 'f'])
    this.inputs = [ a, b ]
    this.out = [f]
    this.gates = [
      new nn6.net.VDot([[a, b], [x, y]], f, this),
    ]
  }
}

nn6.GradientLearning(new Net1(), [[2, 1], [1, 1]], [[3], [2]], 300)