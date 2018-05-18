let S = require('../lib/statistics')
let L = {}

L.learn = function () {
  var P = { NP: 0, VP: 0, VP_NP: 0, NP_A: 0, '藍人': 0, '藍魚': 0, '小人': 0, '小魚': 0 }
  P.NP = (S.map2['.N'] + S.map2['.A']) / S.map1['.']
  P.VP = S.pcond('V', '\'')
  P.VP_NP = (S.map2['/N'] + S.map2['/A']) / S.map1['/']
  P.NP_A = S.map2['AA'] / S.map1['A']
  P['藍人'] = S.pcond2('人', ['人', '魚'], '藍')
  P['藍魚'] = S.pcond2('魚', ['人', '魚'], '藍')
  P['小人'] = S.pcond2('人', ['人', '魚'], '小')
  P['小魚'] = S.pcond2('魚', ['人', '魚'], '小')
  return P
}

S.statistics(process.argv[2])
S.print()

let P = L.learn()
console.log('P=' + JSON.stringify(P, null, 1))
