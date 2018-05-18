let sigmoid = function (x) {
  return 1.0 / (1.0 + Math.exp(-x)) // Math.pow(Math.E, -x)
}

let rand = function () {
  return Math.random() - 0.5
}

let rnn = function (x) {
  let r = 0.05
  let [wp, wc, wb] = [rand(), rand(), rand()]
  let l = x.length
  let nIn = Array(l).fill(0)
  let nOut = Array(l).fill(0)
  console.log('nIn=%j', nIn)
  console.log('nOut=%j', nOut)
  for (let h = 0; h < 10000; h++) {
    for (let i = 0; i < l - 1; i++) {
      nIn[i] = (wc * x[i]) + (wp * nOut[i]) + wb
      nOut[i + 1] = sigmoid(nIn[i])
    }
    for (let i = 0; i < l - 1; i++) {
      let dc
      for (let j = 0; j < i + 1; j++) {
        let k = (i - j)
        if (j === 0) {
          dc = nOut[k + 1] - x[k + 1]
        } else {
          dc = wp * nOut[k + 1] * (1 - nOut[k + 1]) * dc
        }
        wc = wc - (r * dc * x[k])
        wb = wb - (r * dc)
        wp = wp - (r * dc * nOut[k])
      }
    }
  }

  for (let i = 0; i < l - 1; i++) {
    nIn[i] = (wc * x[i]) + (wp * nOut[i]) + wb
    nOut[i + 1] = sigmoid(nIn[i])
  }
  console.log('x=%j', x)
  console.log('nOut=%j', nOut)
}

rnn([0, 0, 1, 0, 0, 1, 0, 0, 1])
