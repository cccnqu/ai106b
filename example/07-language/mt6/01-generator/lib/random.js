var R = module.exports = {}

R.random = function (a, b) {
  return a + (Math.random() * (b - a))
}

R.randInt = function (a, b) {
  return Math.floor(R.random(a, b))
}

R.sample = function (a, probs) {
  if (probs == null) return a[R.randInt(0, a.length)]
  let p = R.random(0, 1)
  let sump = 0
  for (let i = 0; i < a.length; i++) {
    sump += probs[i]
    if (p <= sump) return a[i]
  }
  throw new Error('R.sample fail!')
}
