// 參考： 自然語言處理 -- Hidden Markov Model 
// http://cpmarkchang.logdown.com/posts/192352

const P = {
  '0': 0.2,
  '1': 0.8,
  '0,0': 0.3,
  '0,1': 0.7,
  '1,0': 0.6,
  '1,1': 0.4
}

function markov(s) {
  let p = P[s[0]]
  for (let i=1; i<s.length; i++) {
    let key = s[i-1]+','+s[i]
    p = p * P[key]
  }
  return p
}

const seq = [1, 0, 1, 1]

console.log('P(%j)=%d', seq, markov(seq))