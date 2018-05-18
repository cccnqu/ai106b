# 第 1 課 -- 語言模型與生成語法

## 語言模型

[lib/grammar.js](lib/grammar.js)

```js
/*
S = NP?'VP?
NP = A* /N
VP = (V NP?)?
N = 人 | 魚
V = 愛 | 食
A = 藍 | 紅
*/
...

B.P = { NP: 0.7, VP: 0.7, VP_NP: 0.6, NP_A: 0.4, 
        '藍人': 0.1, '藍魚': 0.9, 
        '小人': 0.4, '小魚': 0.6 }

...
```

## 語言生成

```
D:\Dropbox\github\mt6\tool>node gen 10 tag
'
N'
N'V/
AAN'V/
'
N'V/
'
N'V/AN
N'V/
'V/

D:\Dropbox\github\mt6\tool>node gen 10
人'食/
小小人'食/
小魚'愛/
魚'食/
'食/魚
人'
魚'食/魚
'食/魚
'愛/小人
'

```
