// 參考 https://en.wikipedia.org/wiki/Q-learning
// https://morvanzhou.github.io/tutorials/machine-learning/reinforcement-learning/2-1-general-rl/
const R = require('./rand')
const Q = {}

let q = []
let S_MAX = 6
// let goal = 6
let goal = 2
let s = 2
let alpha = 0.1 // learning rate
let gamma = 0.5 // discount factor, 0 - 短視, 1 - 非常注重長期
const MAX_LOOPS = 200

Q.learning = function () {
  Q.init()
  for (let loop=0; loop < MAX_LOOPS; loop ++) {
    let s = Q.getStart()
    while (s !== goal) {
      let a = Q.chooseAction(s)
      let {s1, r} = Q.doAction(s, a)
      q[s][a] = (1-alpha) * q[s][a] + alpha * (r + gamma * Q.argmax(q[s1])) // Q.argmax(q[s1]) 是下個狀態的最大報酬
      s = s1
    }
    console.log('====%d=====\n%s', loop, Q.dump())
  }
}

// 隨機初始化 q 表
Q.init = function () {
  for (let i=0; i<=S_MAX; i++) {
    q[i] = {left:0, right:0}
  }
}

// 取得起始點
Q.getStart = function () {
  return R.randInt(0, S_MAX+1)
}

Q.chooseAction = function(s) {
  let a = R.randChoose(['left', 'right'])
  if (s <= 0) return 'right'
  if (s >= S_MAX) return 'left'
  return a
}

// 在狀態 s 做 a 動作時，會跑到 s1 狀態，並得到 reward r
Q.doAction = function (s, a) {
  let s1 = (a === 'right') ? s+1 : s-1
  let r = (s1 === goal) ? 1 : 0
  return {s1, r}
}

Q.argmax = function (qs) {
  // console.log('qs=%j', qs)
  let max = Number.NEGATIVE_INFINITY
  for (let k in qs) {
    if (qs[k] > max) max = qs[k]
  }
  return max
}

Q.dump = function () {
  let r = []
  for (let i=0; i<q.length; i++) {
    r.push(i + ':l=' + q[i].left.toFixed(4) + ' r=' + q[i].right.toFixed(4))
  }
  return r.join('\n')
}

Q.learning()
