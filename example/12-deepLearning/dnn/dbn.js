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

var pretrain_lr = 0.6, pretrain_epochs = 900, k = 1, finetune_lr = 0.6, finetune_epochs = 500;

var dbn = new dnn.DBN({
    'input' : x,
    'label' : y,
    'n_ins' : 6,
    'n_outs' : 2,
    'hidden_layer_sizes' : [10,12,11,8,6,4]
});

dbn.set('log level',1); // 0 : nothing, 1 : info, 2 : warning.

// Pre-Training using using RBM
dbn.pretrain({
    'lr' : pretrain_lr,
    'k' : k, // RBM CD-k.
    'epochs' : pretrain_epochs
});

// Fine-Tuning dbn using mlp backpropagation.
dbn.finetune({
    'lr' : finetune_lr,
    'epochs' : finetune_epochs
});

/*
for(var i =0;i<6;i++) {
    console.log(i+1,"th layer W : ",dbn.sigmoidLayers[i].W);
}
*/

x = [[1, 1, 0, 0, 0, 0],
     [0, 0, 0, 1, 1, 0],
     [1, 1, 1, 1, 1, 0]];

console.log(dbn.predict(x));