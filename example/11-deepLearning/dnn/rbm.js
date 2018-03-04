var dnn = require('dnn');
var data = [[1,1,1,0,0,0],
            [1,0,1,0,0,0],
            [1,1,1,0,0,0],
            [0,0,1,1,1,0],
            [0,0,1,1,0,0],
            [0,0,1,1,1,0]];

var rbm = new dnn.RBM({
    input : data,
    n_visible : 6,
    n_hidden : 2
});

rbm.set('log level',1); // 0 : nothing, 1 : info, 2 : warning.

var trainingEpochs = 500;

rbm.train({
    lr : 0.6,
    k : 1, // CD-k.
    epochs : trainingEpochs
});

var v = [[1, 1, 0, 0, 0, 0],
         [0, 0, 0, 1, 1, 0]];

console.log(rbm.reconstruct(v));
console.log(rbm.sampleHgivenV(v)[0]); // get hidden layer probabilities from visible unit.