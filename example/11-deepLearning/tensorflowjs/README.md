# Tensorflow.js

範例來源： https://github.com/tensorflow/tfjs-examples

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

