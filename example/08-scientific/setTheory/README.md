# 集合論

* https://ccckmit.gitbooks.io/rlab/content/set.html

## es6setmap.js

```
$ node .\es6setmap.js
bloodSet.has(A)= true
bloodSet.has(C)= false
bloodMap.has(A)= true
bloodMap.has(C)= false
bloodMap.get(A)= 隨興
bloodMap.get(C)= undefined
```

## setTheoryTest.js

```
PS D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory> node .\setTheoryTest
S10.sample(5)= [ 7, 4, 3, 7, 6 ]
Float.sample(5)= [ 0, -1, -1, 0, 1 ]
Z.sample(5)= [ -1, -5, 6, -5, 6 ]
Even.sample(5)= [ 8, 10, 10, 6, 14 ]
Odd.sample(5)= [ 13, 7, 7, 15, 13 ]
Prime.sample(5)= [ 19, 5, 37, 3, 19 ]
Prime.enumerate()= [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]
Empty.sample(5)= [ undefined, undefined, undefined, undefined, undefined ]
OddPrime.sample(5)= [ 7, 7, 13, 5, 3 ]
OddPrime.has(71)= true
OddPrime.has(70)= false
OddPrime.has(69)= false
OddXPrime.has([9,71])= true
OddXPrime.has([8,71])= false
OddXPrime.has(71)= false
RussellSet.has(Odd)= true
D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221
S.RussellSet.has=function(e) { return !e.has(e) }
                         ^

RangeError: Maximum call stack size exceeded
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:26)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
    at EnumSet.S.RussellSet.has (D:\Dropbox\course\ai106b\example\10-scientificComputing\setTheory\setTheory.js:221:42)
```