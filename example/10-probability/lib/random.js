const R = module.exports = {}

R.random = function (a,b) { 
  return a+Math.random()*(b-a); 
}

R.randomInt = function (a,b) { 
  return Math.floor(R.random(a,b)); 
}

R.randomChoose= function (a) {
  return a[randInt(0,a.length)]; 
}
