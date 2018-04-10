class Variable {
  constructor(value, grad) {
    this.value = value // 前向函數執行結果 Gate Output
    this.grad = grad   // 反向傳播梯度 Gradient
  }
}

class Mul {
  forward (x, y) {
    this.x = x
    this.y = y
    this.out = new Variable(x.value * y.value, 0.0)
    return this.out
  }
  backward () {
    this.x.grad += this.x.value * this.out.grad
    this.y.grad += this.y.value * this.out.grad
  }
}

class Add {
  forward (x, y) {
    this.x = x
    this.y = y
    this.out = new Variable(x.value + y.value, 0.0)
    return this.out
  }
  backward () {
    this.x.grad += 1 * this.out.grad
    this.y.grad += 1 * this.out.grad
  }
}

class Sum {
  forward (list) {
    this.list = list
    let s = 0
    for (let x of list) s += x.value
    this.out = new Variable(s, 0.0)
    return this.out
  }
  backward () {
    for (let x of this.list) {
      x.grad +=  1 * this.out.grad
    }
  }
}

class Product {
  forward (list) {
    this.list = list
    let s = 1
    for (let x of list) s *= x.value
    this.out = new Variable(s, 0.0)
    return this.out
  }
  backward () {
    let s = 1
    for (let x of this.list) s *= x.value
    for (let x of this.list) {
      x.grad += (s / x.value) * this.out.grad
    }
  }
}

class Sigmoid {
  sig(x) {
    return 1 / (1 + Math.exp(-x))
  }
  forward (x) {
    this.x = x
    this.out = new Variable(this.sig(this.x.value), 0.0)
    return this.out
  }
  backward () {
    var s = this.sig(this.x.value);
    this.x.grad += (s * (1 - s)) * this.out.grad
  }
}

module.exports = {
  Sigmoid,
  Variable,
  Add,
  Mul,
  Sum,
  Product
}