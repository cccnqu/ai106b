function argmax(list) {
  let max = Number.NEGATIVE_INFINITY, index = null
  for (let k in list) {
    if (list[k] > max) { index=k; max=list[k] }
  }
  return {max, index}
}

module.exports = argmax