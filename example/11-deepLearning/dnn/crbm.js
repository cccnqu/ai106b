var dnn = require('dnn');
var data = [[0.4, 0.5, 0.5, 0.,  0.,  0.7],
            [0.5, 0.3,  0.5, 0.,  1,  0.6],
            [0.4, 0.5, 0.5, 0.,  1,  0.9],
            [0.,  0.,  0., 0.3, 0.5, 0.],
            [0.,  0.,  0., 0.4, 0.5, 0.],
            [0.,  0.,  0., 0.5, 0.5, 0.]];

var crbm = new dnn.CRBM({
    input : data,
    n_visible : 6,
    n_hidden : 5
});

crbm.set('log level',1); // 0 : nothing, 1 : info, 2 : warning.

crbm.train({
    lr : 0.6,
    k : 1, // CD-k.
    epochs : 1500
});

var v = [[0.5, 0.5, 0., 0., 0., 0.],
         [0., 0., 0., 0.5, 0.5, 0.]];

console.log(crbm.reconstruct(v));
console.log(crbm.sampleHgivenV(v)[0]); // get hidden layer probabilities from visible unit.