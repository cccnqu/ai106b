// https://gist.github.com/aparrish/2f562e3737544cf29aaf1af30362f469

let colorData;
let colors = {};

function preload() {
  colorData = loadJSON('xkcd.json');
}

function setup() {
  noCanvas();
  prepData();

  let d1 = distance(colors['red'], colors['green']);
  let d2 = distance(colors['red'], colors['pink']);

  console.log(d1, d2);
  console.log(d1 > d2);
  console.log(closest(colors['red']));

  let v = colorToVector(color(150, 60, 150));
  console.log(closest(v));

  let v1 = colors['purple'];
  let v2 = colors['red'];
  console.log(closest(p5.Vector.sub(v1, v2)));

  let v3 = colors['blue'];
  let v4 = colors['green'];
  console.log(closest(p5.Vector.add(v3, v4)));

  let colorList = [colors['black'], colors['white']];
  console.log(closest(meanV(colorList)));


  // an analogy: pink is to red as _______ is to blue
  let pink_to_red = p5.Vector.sub(colors['pink'], colors['red']);
  console.log(closest(p5.Vector.add(pink_to_red, colors['blue'])));

  // Navy is to blue as _______ is to green:
  let navy_to_blue = p5.Vector.sub(colors['navy'], colors['blue']);
  console.log(closest(p5.Vector.add(navy_to_blue, colors['green'])));


  let r = colors['red'];
  let b = colors['blue'];
  let interval = setInterval(poemIt, 500);
  let count = 0;
  function poemIt() {
    let rednames = closest(r);
    let bluenames = closest(b);
    let newR = rednames.splice(0,1)[0];
    let newB = bluenames.splice(0,1)[0];
    let span = createSpan('Roses are ' + newR + ', violets are ' + newB + '.<br/>');
    span.parent('poem');
    r = colors[random(rednames)];
    b = colors[random(bluenames)];
    count++;
    if (count > 14) {
      clearInterval(interval);
    }
  }

}

function colorToVector(col) {
  return createVector(red(col), green(col), blue(col));
}

function vectorToColor(v) {
  return color(v.x, v.y, v.z);
}


function closest(colorVector, limit = 10) {

  let keys = Object.keys(colors);
  let closest = [];

  // New ES6 arrow syntax!!!!!
  keys.sort((a, b) => {
    let d1 = distance(colorVector, colors[a]);
    let d2 = distance(colorVector, colors[b]);
    return d1 - d2;
  });

  for (let i = 0; i < limit; i++) {
    closest.push(keys[i]);
  }
  return closest;
}


function prepData() {
  for (let i = 0; i < colorData.colors.length; i++) {
    let key = colorData.colors[i].color;
    let p5color = color(colorData.colors[i].hex)
    let value = createVector(red(p5color), green(p5color), blue(p5color));
    colors[key] = value;
  }
}

function distance(color1, color2) {
  return p5.Vector.dist(color1, color2);
}

function meanV(vectors) {
  let sumv = createVector(0, 0, 0);
  for (let i = 0; i < vectors.length; i++) {
    sumv.add(vectors[i]);
  }
  sumv.div(vectors.length);
  return sumv;
}
