var dnn = require('dnn');
var x = [[1,1,1,0,0,0],
         [1,0,1,0,0,0],
         [1,1,1,0,0,0],
         [0,0,1,1,1,0],
         [0,0,1,1,0,0],
         [0,0,1,1,1,0]];
var y = [[1, 0],
         [1, 0],
         [1, 0],
         [0, 1],
         [0, 1],
         [0, 1]];

var lrClassifier = new dnn.LogisticRegression({
    'input' : x,
    'label' : y,
    'n_in' : 6,
    'n_out' : 2
});

lrClassifier.set('log level',1); // 0 : nothing, 1 : info, 2 : warning.

var training_epochs = 800, lr = 0.01;

lrClassifier.train({
    'lr' : lr,
    'epochs' : training_epochs
});

x = [[1, 1, 0, 0, 0, 0],
     [0, 0, 0, 1, 1, 0],
     [1, 1, 1, 1, 1, 0]];

console.log("Result : ",lrClassifier.predict(x));