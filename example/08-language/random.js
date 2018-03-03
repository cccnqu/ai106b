function rand(a,b) { 
  return a+Math.random()*(b-a); 
}

function randInt(a,b) { 
  return Math.floor(a+Math.random()*(b-a)); 
}

function randSelect(a) { 
  return a[randInt(0,a.length)]; 
}

function randChar(str) {
  var len = str.length;
  var i = randInt(0, len-1);
  return str[i];
}

module.exports = { 
  rand: rand, 
  randInt: randInt, 
  randSelect: randSelect,
  randChar: randChar
}
