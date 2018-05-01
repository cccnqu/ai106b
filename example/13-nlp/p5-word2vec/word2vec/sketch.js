// Daniel Shiffman
// Word2Vec
// Based on: https://github.com/turbomaze/word2vecjson

let wordVecs;

function setup() {
  createCanvas(100, 100);

  let loadHide = select("#loadHide");
  loadHide.hide();

  let nearWordInput = select('#nearword');
  let nearButton = select('#submit');
  let nearResults = select('#results');

  let betweenWordInput1 = select("#between1");
  let betweenWordInput2 = select("#between2");
  let betweenButton = select("#submit2");
  let betweenResults = select("#results2");

  let addInput1 = select("#isto1");
  let addInput2 = select("#isto2");
  let addInput3 = select("#isto3");
  let addButton = select("#submit3");
  let addResults = select("#results3");

  loadJSON('data/wordvecs10000.json', (data) => {
    wordVecs = data.vectors;
    console.log('loaded');
    loadHide.show();
    noLoop();
    noCanvas();
  });

  nearButton.mousePressed(() => {
    let word = nearWordInput.value();
    nearResults.html(findNearest(word, 10));
  });

  betweenButton.mousePressed(() => {
    let v1 = wordVecs[betweenWordInput1.value()];
    let v2 = wordVecs[betweenWordInput2.value()];
    if (!v1) {
      betweenResults.html("No word vector for first word");
      return;
    }
    if (!v2) {
      betweenResults.html("No word vector for second word");
      return;
    }
    let middle = Word2Vec.average(v1, v2);
    betweenResults.html(findNearest(middle, 10));
  });

  addButton.mousePressed(() => {
    let is1 = wordVecs[addInput1.value()];
    let to1 = wordVecs[addInput2.value()];
    let is2 = wordVecs[addInput3.value()];
    if (!is1) {
      addResults.html("No word vector for first word");
      return;
    }
    if (!to1) {
      addResults.html("No word vector for second word");
      return;
    }
    if (!is2) {
      addResults.html("No word vector for third word");
      return;
    }
    let difference = Word2Vec.subtract(to1, is1);
    let to2 = Word2Vec.add(is2, difference);
    addResults.html(findNearest(to2, 10));
  });
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  translate(width/2,height/2);
  rotate(frameCount * 0.5);
  line(0,0,width/2,0);
}

function findNearest(word, n=10) {
  let nearest = Word2Vec.nearest(word, 10);
  if (!nearest) {
    return 'No word vector found';
  }
  let output = '';
  for (let i = 0; i < nearest.length; i++) {
    output += nearest[i].word + '<br/>';
  }
  return output;
}
