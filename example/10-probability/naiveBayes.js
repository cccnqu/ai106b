function naiveBayes(prob, list) {
  let p = 1
  for (let e of list) p = p*prob[e]
  return p
}

const prob = {
  x: 0.5,
  y: 0.2,
  z: 0.3
}

console.log('P(x,y,z) = ', naiveBayes(prob, ['x','y','z']))
