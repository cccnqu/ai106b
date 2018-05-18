let fs = require('fs')
let S = module.exports = {}

S.statistics = function (file) {
  S.map1 = {}
  S.map2 = {}
  let text = fs.readFileSync(file, 'utf-8')
  let lines = text.split(/\r?\n/)
  for (var line of lines) {
    if (line.trim() !== '') S.doLine(line)
  }
}

S.doLine = function (line) {
  line = '^' + line + '$'
  for (let i = 0; i < line.length; i++) {
    let c1 = line[i]
    let c1count = S.map1[c1]
    S.map1[c1] = (c1count != null) ? c1count + 1 : 1
    if (i < 1) continue
    let c0 = line[i - 1]
    let c2 = c0 + c1
    let c2count = S.map2[c2]
    S.map2[c2] = (c2count != null) ? c2count + 1 : 1
  }
}

S.pcond = function (b, a) {
  return S.map2[a + b] / S.map1[a]
}

S.pcond2 = function (b, x, a) {
  return S.map2[a + b] / (S.map2[a + x[0]] + S.map2[a + x[1]])
}

S.print = function () {
  console.log('map1=' + JSON.stringify(S.map1, null, 1))
  console.log('map2=' + JSON.stringify(S.map2, null, 1))
  for (let ab in S.map2) {
    let a = ab[0]
    let b = ab[1]
    console.log('%s=>%s:%d', a, b, S.map2[ab] / S.map1[a])
  }
}

