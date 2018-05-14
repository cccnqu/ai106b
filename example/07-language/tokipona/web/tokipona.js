(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"mdo":3}],2:[function(require,module,exports){
TP = require('./mt')
TP.mdo = `tc|sc|en|tp|tag
--|--|--|--|---
e|e|e|e|c|
pi|pi|of|pi|c|
li|li|li|li|c|
o|o|o|o|c|
我|我|I|mi|N|
它|它|it|ona|N|
你|你|you|sina|N|
啊|啊|ah|a|a|
愛|爱|love|olin|V|
白|白|white|walo|a|
也|也|also|kin|a|
棒|棒|rod|palisa|N|
包|包|bag|poki|N|
手|手|arm|luka|N|
變|变|change|ante|a|
冰|冰|cold|lete|a|
食|食|eat|moku|V|
蟲|虫|bug|pipi|N|
源|源|from|tan|c|
大|大|big|suli|a|
只|只|only|taso|c|
道|道|way|nasin|N|
趨|趋|go|tawa|V|
多|多|many|mute|a|
聽|听|ear|kute|N|
泥|泥|clay|ko|N|
否|否|no|ala|a|
感|感|feel|pilin|N|
給|给|give|pana|V|
工|工|work|pali|V|
怪|怪|crazy|nasa|a|
蜥|蜥|lizard|akesi|N|
果|果|fruit|kili|N|
好|好|good|pona|a|
黑|黑|black|pimeja|a|
紅|红|red|loje|a|
後|后|back|monsi|N|
圖|图|image|sitelen|N|
壞|坏|bad|ike|a|
黃|黄|yellow|jelo|a|
火|火|fire|seli|a|
糟|糟|damage|pakala|a|
器|器|tool|ilo|N|
開|开|open|open|V|
看|看|look|lukin|N|
皮|皮|skin|selo|N|
孔|孔|hole|lupa|N|
口|口|mouth|uta|N|
啦|啦|that|la|c|
來|来|here|kama|V|
藍|蓝|blue|laso|a|
力|力|power|wawa|a|
獵|猎|hunt|alasa|V|
商|商|shop|esun|N|
榖|榖|grain|pan|N|
面|面|surface|supa|N|
木|木|plant|kasi|N|
這|这|that|ni|a|
男|男|male|mije|N|
鬧|闹|noice|mu|a|
內|内|inside|insa|N|
可|可|can|ken|V|
鳥|鸟|bird|waso|N|
女|女|female|meli|N|
旁|旁|aside|poka|N|
氣|气|air|kon|N|
前|前|front|sinpin|N|
和|和|and|en|c|
親|亲|parent|mama|N|
球|球|ball|sike|N|
全|全|all|ale|a|
全|全|all|ali|a|
群|群|group|kulupu|N|
人|人|guy|jan|N|
日|日|sun|suno|N|
色|色|color|kule|a|
啥|啥|what|seme|N|
山|山|hill|nena|N|
上|上|top|sewi|N|
身|身|body|sijelo|N|
繩|绳|rope|linja|N|
時|时|time|tenpo|N|
獸|兽|beast|soweli|N|
數|数|number|nanpa|N|
水|水|water|telo|N|
說|说|say|toki|V|
死|死|dead|moli|a|
甜|甜|sweet|suwi|a|
停|停|kept|awen|a|
頭|头|head|lawa|N|
土|土|land|ma|N|
遠|远|far|weka|a|
玩|玩|play|musi|a|
尾|尾|tail|pini|a|
文|文|text|nimi|N|
物|物|thing|ijo|N|
下|下|down|anpa|a|
像|像|similar|sama|a|
小|小|small|lili|a|
增|增|new|sin|a|
性|性|sex|unpa|V|
休|休|sleep|lape|a|
或|或|or|anu|c|
屋|屋|house|tomo|N|
眼|眼|eye|oko|N|
要|要|want|wile|V|
頁|页|page|lipu|N|
衣|衣|cloth|len|N|
音|音|sound|kalama|V|
石|石|rock|kiwen|N|
靠|靠|with|kepeken|V|
有|有|have|jo|V|
魚|鱼|fish|kala|N|
財|财|money|mani|N|
月|月|moon|mun|N|
在|在|at|lon|V|
髒|髒|dirty|jaki|a|
戰|战|fight|utala|V|
知|知|know|sona|V|
足|足|foot|noka|N|
1|1|1|wan|N|
2|2|2|tu|N|`

TP.load(['en', 'tc', 'tp'], TP.mdo)

},{"./mt":1}],3:[function(require,module,exports){
var M = module.exports = {}

M.parseJson = function (json) { // Simplified JSON
  json = json.replace(/(\W)(\w+):/gm, '$1"$2":') // id: => "id":
  return JSON.parse(json)
}

M.parseValue = function (value) {
  var json
  try {
    if (value.match(/.*\|.*\n\|?-+\|[|-]+\n/)) {
      json = M.parseTable(value)
    } else {
      json = M.parseJson(value)
    }
  } catch (e) {
    json = value
  }
  return json
}

M.parseTable = function (table, skipFields) {
  skipFields = skipFields || []
//  console.log('table.length=', table.length, 'typeof table=', typeof table)
  var lines = table.split(/\r?\n/)
  var len = lines.length
  var jsonTable = []
  var types = []
  var fields = lines[0].split(/\s*\|\s*/)
  for (var i = 0; i < fields.length; i++) {
    var tokens = fields[i].split(':')
    fields[i] = tokens[0].trim()
    types[i] = (tokens.length >= 2) ? tokens[1].trim() : 'string'
  }
  for (i = 2; i < len; i++) {
    var line = lines[i].split('//')[0]
    if (line.length === 0) continue
    var values = line.split('|')
    var vlen = values.length
    var json = {}
    for (var vi = 0; vi < vlen; vi++) {
      var value = values[vi].trim()
      switch (types[vi]) {
        case 'json' : value = M.parseJson(value); break
        case 'number': value = parseFloat(value); break
        case 'boolean': value = JSON.parse(value); break
        case 'date' : value = (new Date(value)).toJSON(); break
      }
      if (skipFields.indexOf(fields[vi]) < 0 && value.length > 0 && fields[vi].length > 0) {
        json[fields[vi]] = value
      }
    }
    jsonTable.push(json)
  }
  return jsonTable
}

M.list2str = function (objs, fields) {
  var lines = []
  var head = fields.join('|')
  lines.push(head)
  lines.push(head.replace(/[^|]/g, '-'))
  for (var i in objs) {
    var obj = objs[i]
    var line = ''
    for (var fi in fields) {
      var value = obj[fields[fi]] || ''
      line += '|' + value
    }
    lines.push(line.substring(1))
  }
  return lines.join('\n')
}

M.tableReorder = function(table, fields) {
  var objs = M.parseTable(table)
  return M.list2str(objs, fields)
}

M.parseMdo = function (mdo) {
  var obj = {}
  var field
  var valueLines = []
  var lines = mdo.split(/\r?\n/)
  for (var i = 0, len = lines.length; i < len; i++) {
    var line = lines[i]
    var m = line.match(/^([^\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./<=>?@[\]^`{|}~]+)\s*:\s*(.*)$/)
    if (m) {
      if (typeof field !== 'undefined') {
        obj[field] = M.parseValue(valueLines.join('\n').trim())
      }
      field = m[1]
      valueLines = [ m[2] ]
    } else {
      valueLines.push(line)
    }
  }
  if (valueLines.length > 0 && typeof field !== 'undefined') {
    obj[field] = M.parseValue(valueLines.join('\n').trim())
  }
  return obj
}

M.index = function (jsons, field, append) {
  append = append || false
  var map = {}
  for (var i in jsons) {
    var json = jsons[i]
    var key = json[field]
    if (append || typeof map[key] === 'undefined') {
      map[key] = json
    }
  }
  return map
}

},{}]},{},[2]);
