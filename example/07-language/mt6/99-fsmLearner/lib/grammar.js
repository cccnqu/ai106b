let R = require('./random')
let B = module.exports = {mode: 'tag'}

/*
S = NP?'VP?
NP = A* /N
VP = (V NP?)?
N = 人 | 魚
V = 愛 | 食
A = 藍 | 紅
*/

B.map = {
  N: ['人', '魚'],
  V: ['愛', '食'],
  A: ['藍', '小']
}

B.P = { NP: 0.7, VP: 0.7, VP_NP: 0.6, NP_A: 0.4, '藍人': 0.1, '藍魚': 0.9, '小人': 0.4, '小魚': 0.6 }

B.S = function () {
  var result = ''
  B.word = '.'
  result += B.repeats(B.NP, '?', B.P.NP)
  result += B.sample(['\''])
  result += B.repeats(B.VP, '?', B.P.VP)
  return result.trim()
}

B.NP = function () {
  return B.repeats(B.A, '*', B.P.NP_A) + B.N()
}

B.VP = function () {
  var result = ''
  B.state = 'V'
  result += B.V()
  result += B.sample(['/'])
  B.state = 'O'
  result += B.repeats(B.NP, '?', B.P.VP_NP)
  B.state = '.'
  return result
}

B.sample = function (a) {
  B.word = R.sample(a)
  return B.word
}

B.V = function () { return (B.mode === 'tag') ? 'V' : B.sample(B.map.V) }

B.N = function () {
  if (B.mode === 'tag') return 'N'
  var A = B.word
  var N
  if (['.', '\'', '/'].indexOf(A) >= 0) {
    N = B.sample(B.map.N)
  } else {
//    console.log('A=%s', A)
    N = R.sample(['人', '魚'], [B.P[A + '人'], 1])
//    N = (R.random(0, 1) < B.P[A + '人']) ? '人' : '魚'
    B.word = N
  }
  return N
}

B.A = function () { return (B.mode === 'tag') ? 'A' : B.sample(B.map.A) }

B.repeats = function (f, pattern, prob) {
  var list = []
  if (pattern === '+') {
    list.push(f())
  }
  if (pattern === '?') {
    if (R.random(0, 1) < prob) list.push(f())
  } else {
    while (R.random(0, 1) < prob) {
      list.push(f())
    }
  }
  return list.join('')
}

B.gen = function (n) {
  for (let i = 0; i < n; i++) {
    console.log(B.S())
  }
}
