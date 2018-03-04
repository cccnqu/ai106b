var dnn = require('dnn')

var x = [[0.4, 0.5, 0.5, 0.,  0.,  0.],
         [0.5, 0.3,  0.5, 0.,  0.,  0.],
         [0.4, 0.5, 0.5, 0.,  0.,  0.],
         [0.,  0.,  0.5, 0.3, 0.5, 0.],
         [0.,  0.,  0.5, 0.4, 0.5, 0.],
         [0.,  0.,  0.5, 0.5, 0.5, 0.]];

var y = [[1, 0],
         [1, 0],
         [1, 0],
         [0, 1],
         [0, 1],
         [0, 1]];

var cdbn = new dnn.CDBN({
    'input' : x,
    'label' : y,
    'n_ins' : 6,
    'n_outs' : 2,
    'hidden_layer_sizes' : [10,12,11,8,6,4]
});

cdbn.set('log level',1); // 0 : nothing, 1 : info, 2 : warning.

var pretrain_lr = 0.8, pretrain_epochs = 1600, k= 1, finetune_lr = 0.84, finetune_epochs = 10000;

// Pre-Training using using RBM, CRBM.
cdbn.pretrain({
    'lr' : pretrain_lr,
    'k' : k, // RBM CD-k.
    'epochs' : pretrain_epochs
});

// Fine-Tuning dbn using mlp backpropagation.
cdbn.finetune({
    'lr' : finetune_lr,
    'epochs' : finetune_epochs
});

/*
for(var i =0;i<6;i++) {
    console.log(i+1,"th layer W : ",cdbn.sigmoidLayers[i].W);
}
*/

a = [[0.5, 0.5, 0., 0., 0., 0.],
     [0., 0., 0., 0.5, 0.5, 0.],
     [0.1,0.2,0.4,0.4,0.3,0.6]];

console.log(cdbn.predict(a));