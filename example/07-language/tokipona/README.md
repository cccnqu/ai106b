# TokiPona 道本語

## 網頁版翻譯

* 展示網址 -- https://rawgit.com/cccnqu/ai106b/master/example/07-language/tokipona/web/tokipona.html


## 命令列翻譯

```
$ node mtLine tc tp 我 食 e 果
[ 'mi', 'moku', 'e', 'kili' ]
```

## 檔案翻譯系統

```
$ node mtFile tp tc test/test1.tp
# 2
我 好
你 食

# 3
它 li 好
果 li 食
蟲 li 好

# 4
我 食 e 果
蟲 li 食 e 食

# 6
食 好
人 小
人 大
果 小
你 死 e 蟲 小
蟲 li 食 e 物
```