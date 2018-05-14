const mdo = require('mdo')
const MT = module.exports = {}

MT.load = function (langs, dictText) {
  var dict = mdo.parseTable(dictText);
  for (let lang of langs) MT[lang] = {}
  for (let word of dict) {
    for (let lang of langs) {
      let w = word[lang]
      MT[lang][w] = word
    }
  }
}

MT.s2t = function (w, s, t) {
  let word = MT[s][w]
  if (word == null) return w // 字典查不到，不翻了，照原文
  return word[t]
}

MT.mtArray = function (words, s, t) {
  let toWords = []
  for (let w of words) {
    toWords.push(MT.s2t(w, s, t))
  }
  return toWords
}


MT.mtText = function (text, s, t) {
  let words = text.match(/(\w+)|[\s\S]/g)
  return MT.mtArray(words, s, t).join('')
}
