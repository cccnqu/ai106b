# 邏輯推論

## 實作：布林邏輯的推論引擎

* [kb.js](kb.js)
* [kbTest.js](kbTest.js)

```
$ node kbTest
["A<=B","B<=C&D","C<=E","D<=F","E","F","Z<=C&D&G",""]
rule:head=A terms=["B"]
rule:head=B terms=["C","D"]
rule:head=C terms=["E"]
rule:head=D terms=["F"]
rule:head=E terms=""
rule:head=F terms=""
rule:head=Z terms=["C","D","G"]
addFact(E)
addFact(F)
addFact(C)
addFact(D)
addFact(B)
addFact(A)
facts=["E","F","C","D","B","A"]
```

## 實作：專家系統 - 前向推論程式

* [kbReason.js](kbReason.js)

```
$ node kbReason animal_ostrich.kb
["哺乳類 <= 有毛","哺乳類 <= 泌乳","鳥類   <= 有羽毛","鳥類   <= 會飛 & 生蛋","
食肉類 <= 哺乳類 & 吃肉","食肉類 <= 有爪 & 利齒 & 兩眼前視","有蹄類 <= 哺乳類 &
有蹄","偶蹄類 <= 哺乳類 & 反芻","獵豹   <= 哺乳類 & 吃肉 & 斑點","老虎   <= 哺乳
類 & 吃肉 & 條紋","長頸鹿 <= 有蹄類 & 長腿 & 斑點","斑馬   <= 有蹄類 & 條紋","鴕
鳥   <= 鳥類 & 長腿","會飛","生蛋","長腿",""]
rule:head=哺乳類 terms=["有毛"]
rule:head=哺乳類 terms=["泌乳"]
rule:head=鳥類 terms=["有羽毛"]
rule:head=鳥類 terms=["會飛 "," 生蛋"]
rule:head=食肉類 terms=["哺乳類 "," 吃肉"]
rule:head=食肉類 terms=["有爪 "," 利齒 "," 兩眼前視"]
rule:head=有蹄類 terms=["哺乳類 "," 有蹄"]
rule:head=偶蹄類 terms=["哺乳類 "," 反芻"]
rule:head=獵豹 terms=["哺乳類 "," 吃肉 "," 斑點"]
rule:head=老虎 terms=["哺乳類 "," 吃肉 "," 條紋"]
rule:head=長頸鹿 terms=["有蹄類 "," 長腿 "," 斑點"]
rule:head=斑馬 terms=["有蹄類 "," 條紋"]
rule:head=鴕鳥 terms=["鳥類 "," 長腿"]
rule:head=會飛 terms=""
rule:head=生蛋 terms=""
rule:head=長腿 terms=""
addFact(會飛)
addFact(生蛋)
addFact(長腿)
addFact(鳥類)
addFact(鴕鳥)
facts=["會飛","生蛋","長腿","鳥類","鴕鳥"]
```

## 實作：專家系統 - 互動推論程式

* [kbQuery.js](kbQuery.js)

```
$ node kbQuery animal.kb
["哺乳類 <= 有毛","哺乳類 <= 泌乳","鳥類   <= 有羽毛","鳥類   <= 會飛 & 生蛋","
食肉類 <= 哺乳類 & 吃肉","食肉類 <= 有爪 & 利齒 & 兩眼前視","有蹄類 <= 哺乳類 &
有蹄","偶蹄類 <= 哺乳類 & 反芻","獵豹   <= 哺乳類 & 吃肉 & 斑點","老虎   <= 哺乳
類 & 吃肉 & 條紋","長頸鹿 <= 有蹄類 & 長腿 & 斑點","斑馬   <= 有蹄類 & 條紋","鴕
鳥   <= 鳥類 & 長腿",""]
rule:head=哺乳類 terms=["有毛"]
rule:head=哺乳類 terms=["泌乳"]
rule:head=鳥類 terms=["有羽毛"]
rule:head=鳥類 terms=["會飛 "," 生蛋"]
rule:head=食肉類 terms=["哺乳類 "," 吃肉"]
rule:head=食肉類 terms=["有爪 "," 利齒 "," 兩眼前視"]
rule:head=有蹄類 terms=["哺乳類 "," 有蹄"]
rule:head=偶蹄類 terms=["哺乳類 "," 反芻"]
rule:head=獵豹 terms=["哺乳類 "," 吃肉 "," 斑點"]
rule:head=老虎 terms=["哺乳類 "," 吃肉 "," 條紋"]
rule:head=長頸鹿 terms=["有蹄類 "," 長腿 "," 斑點"]
rule:head=斑馬 terms=["有蹄類 "," 條紋"]
rule:head=鴕鳥 terms=["鳥類 "," 長腿"]
facts=[]
?- 有毛
addFact(有毛)
addFact(哺乳類)
facts=["有毛","哺乳類"]
?- 吃肉
addFact(吃肉)
addFact(食肉類)
facts=["有毛","哺乳類","吃肉","食肉類"]
?- 條紋
addFact(條紋)
addFact(老虎)
facts=["有毛","哺乳類","吃肉","食肉類","條紋","老虎"]
?-
```

## 實作：謂詞邏輯的推論引擎

* [pkbReason.js](pkbReason.js)

```
$ node pkbReason family.pkb
["parent(x,y)<=father(x,y)","parent(x,y)<=mother(x,y)","ancestor(x,y)<=parent(x,
y)","ancestor(x,z)<=ancestor(x,y)&parent(y,z)","father(John,Johnson)","mother(Ma
ry,Johnson)","father(George,John)","father(John,Jake)",""]
addRule:parent(x,y)<=father(x,y){}
addRule:parent(x,y)<=mother(x,y){}
addRule:ancestor(x,y)<=parent(x,y){}
addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){}
addFact:father(John,Johnson)
addFact:mother(Mary,Johnson)
addFact:father(George,John)
addFact:father(John,Jake)
=====facts========
father(John,Johnson)
mother(Mary,Johnson)
father(George,John)
father(John,Jake)
========rules=======
parent(x,y)<=father(x,y){}
parent(x,y)<=mother(x,y){}
ancestor(x,y)<=parent(x,y){}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){}
======forwardChaining============
addFact:parent(John,Johnson)
  parent(x,y)<=father(x,y){};father(John,Johnson)

addFact:parent(Mary,Johnson)
  parent(x,y)<=mother(x,y){};mother(Mary,Johnson)

addFact:parent(George,John)
  parent(x,y)<=father(x,y){};father(George,John)

addFact:parent(John,Jake)
  parent(x,y)<=father(x,y){};father(John,Jake)

addFact:ancestor(John,Johnson)
  ancestor(x,y)<=parent(x,y){};parent(John,Johnson)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"John","z":"Johnson"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};parent(John,Johnson)

addFact:ancestor(Mary,Johnson)
  ancestor(x,y)<=parent(x,y){};parent(Mary,Johnson)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"Mary","z":"Johnson"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};parent(Mary,Johnson)

addFact:ancestor(George,John)
  ancestor(x,y)<=parent(x,y){};parent(George,John)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"George","z":"John"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};parent(George,John)

addFact:ancestor(John,Jake)
  ancestor(x,y)<=parent(x,y){};parent(John,Jake)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"John","z":"Jake"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};parent(John,Jake)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"John","y":"Johnson"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};ancestor(John,Johnson)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"Mary","y":"Johnson"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};ancestor(Mary,Johnson)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"George","y":"John"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};ancestor(George,John)

addFact:ancestor(George,Johnson)
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"John","z":"Johnson"};ancestor(Ge
orge,John)

addFact:ancestor(George,Jake)
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"John","z":"Jake"};ancestor(Georg
e,John)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"John","y":"Jake"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};ancestor(John,Jake)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"George","y":"Johnson"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};ancestor(George,Johnson)

addRule:ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"George","y":"Jake"}
  ancestor(x,z)<=ancestor(x,y)&parent(y,z){};ancestor(George,Jake)

======forwardChaining============
=====facts========
father(John,Johnson)
mother(Mary,Johnson)
father(George,John)
father(John,Jake)
parent(John,Johnson)
parent(Mary,Johnson)
parent(George,John)
parent(John,Jake)
ancestor(John,Johnson)
ancestor(Mary,Johnson)
ancestor(George,John)
ancestor(John,Jake)
ancestor(George,Johnson)
ancestor(George,Jake)
========rules=======
parent(x,y)<=father(x,y){}
parent(x,y)<=mother(x,y){}
ancestor(x,y)<=parent(x,y){}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"John","z":"Johnson"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"Mary","z":"Johnson"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"George","z":"John"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"y":"John","z":"Jake"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"John","y":"Johnson"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"Mary","y":"Johnson"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"George","y":"John"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"John","y":"Jake"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"George","y":"Johnson"}
ancestor(x,z)<=ancestor(x,y)&parent(y,z){"x":"George","y":"Jake"}
```
