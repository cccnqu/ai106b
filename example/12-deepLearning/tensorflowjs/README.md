# Tensorflow.js

// 注意看 Model 的用法 -- https://js.tensorflow.org/api/0.10.0/#class:Model

試用： https://playground.tensorflow.org/

範例來源： https://github.com/tensorflow/tfjs-examples

討論區： https://groups.google.com/a/tensorflow.org/forum/#!forum/tfjs

課程： https://angularfirebase.com/lessons/tensorflow-js-quick-start/#Step-4-Build-a-Machine-Learning-Model

訊息: https://medium.com/@tensorflow

* [记录一下关于 tensorflow.js 的了解](https://www.linpx.com/p/you-want-to-know-that-everything-about-tensorflowjs-is-here.html)

## 參考專案

* https://hpssjellis.github.io/beginner-tensorflowjs-examples-in-javascript/ (超讚!)
  * https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript
  * https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tf-examples
* https://www.npmjs.com/package/tfjs-yolo-tiny
  * https://pjreddie.com/darknet/yolo/
  * [Deep learning in your browser: A brisk guide](https://towardsdatascience.com/deep-learning-in-your-browser-a-brisk-guide-ca06c2198846)
* https://alantian.net/ganshowcase/
* https://github.com/tensorflow/tfjs-examples/tree/master/mobilenet
  * https://storage.googleapis.com/tfjs-examples/mobilenet/dist/index.html
* https://github.com/iwe7/iwe7-tfjs (@tensorflow/tfjs 初探)

## 文章

* [A Gentle Introduction to TensorFlow.js](https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702)
* [Getting started with TensorFlow.js — Simple AND Gate Implementation](https://www.linkedin.com/pulse/getting-started-tensorflowjs-simple-gate-sam-alsmadi)
  * https://github.com/lntelliMed/tensorflow-add-js/blob/master/src/App.js
* https://groups.google.com/a/tensorflow.org/forum/#!topic/tfjs/TnIOqbAroWM

I interned in Google last year in Google Cloud, and I want to share my opinion about TypeScript. I think it's a great language when you're working on big projects. Working with multiple libraries becomes much easier - programming and debugging is way faster thanks to the language. You're able to catch bugs before compiling your project. I had my doubts at the beginning, but I found TypeScript to be a great time saver. It does solve many problems that there are in JavaScript. I don't know if there are any performance or architecture benefits specifically for tfjs.

## 影片

* [TensorFlow.js Quick Start](https://www.youtube.com/watch?v=Y_XM3Bu-4yc)
* [Tensorflow.js Explained](https://www.youtube.com/watch?v=Nc8kZABv-KE)
  * Siraj Raval -- https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A

## 範例 1 -- nmist-core

注意： 在 windows 中執行下列 yarn watch 時會失敗

```js
cd mnist-core
yarn
yarn watch
```

因為 package.json 當中的 NODE_ENV=production 會執行失敗。

```js
  "scripts": {
    "watch": "NODE_ENV=development parcel --no-hmr --open index.html ",
    "build": "NODE_ENV=production parcel build index.html  --no-minify --public-url ./"
  },
```

最簡易的解決辦法是使用 cross-env 這個套件

參考： [使用cross-env解决跨平台设置NODE_ENV的问题](https://segmentfault.com/a/1190000005811347)

先安裝 cross-env 之後，把上面的 script 段改成

```
  "scripts": {
    "watch": "cross-env NODE_ENV=development parcel --no-hmr --open index.html ",
    "build": "cross-env NODE_ENV=production parcel build index.html  --no-minify --public-url ./"
  },
```

這樣就可以用 yarn watch 執行了！ 結果如下：

![](img/nmist-core.png)

## deepLearn.js -- 已過期，改為 tensorflow.js 了

* https://deeplearnjs.org/
  * https://github.com/PAIR-code/deeplearnjs

deeplearn.js is an open-source library that brings performant machine learning building blocks to the web, allowing you to train neural networks in a browser or run pre-trained models in inference mode.

## ES6 使用展示範例

* https://github.com/PAIR-code/deeplearnjs/tree/master/starter/es6/

