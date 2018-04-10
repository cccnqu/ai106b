var dl = require('deeplearn')
var a = dl.tensor1d([1, 2, 3]);
var b = dl.scalar(2);

var result = a.add(b); // a is not modified, result is a new tensor

// Option 1: With a Promise.
result.data().then(data => console.log(data)); // Float32Array([3, 4, 5])

// Option 2: Synchronous download of data. Blocks the UI.
console.log(result.dataSync());