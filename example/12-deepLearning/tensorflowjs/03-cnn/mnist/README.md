# TensorFlow.js Example: Training MNIST

This project is modified from the Tensorflow.js examples from the follow url: 

https://github.com/tensorflow/tfjs-examples

No ES6 syntax preprocessing is allowed. Just start a server and use Chrome browser to visit index.html.

## Original README.md

This example shows you how to train MNIST (using the layers API).

You can check out the tutorial that accompanies this example [here](https://js.tensorflow.org/tutorials/mnist.html).

This model will compute accuracy over 1000 random test set examples every 5
steps, plotting loss and accuracy as the model is training. Training time can
be reduced by computing accuracy over fewer examples less often.

Note: currently the entire dataset of MNIST images is stored in a PNG image we have
sprited, and the code in `data.js` is responsible for converting it into
`Tensor`s. This will become much simpler in the near future.

[See this example live!](https://rawgit.com/ccckmit/tfjs-chrome/master/mnist/index.html)

## License

```
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

```