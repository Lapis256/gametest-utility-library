# gametest-utility-library
gametestに便利な機能を提供するライブラリです。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>目次</summary>

- [導入方法](#%E5%B0%8E%E5%85%A5%E6%96%B9%E6%B3%95)
- [使い方](#%E4%BD%BF%E3%81%84%E6%96%B9)
  - [import方法](#import%E6%96%B9%E6%B3%95)
  - [Tick](#tick)
    - [基本的な使い方](#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9)
    - [止める方法](#%E6%AD%A2%E3%82%81%E3%82%8B%E6%96%B9%E6%B3%95)
  - [Others](#others)
    - [print](#print)
    - [pprint](#pprint)
    - [toJson](#tojson)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 導入方法
[Releases](https://github.com/Lapis256/gametest-utility-library/releases)からダウンロードし`scripts`フォルダ内に入れてください。入れる際に名前を変更することも可能ですが、インポート時に変更した名前を使う必要があります。
## 使い方
### import方法
```js
// ライブラリのフォルダ名に合わせて変更してください。
import { <インポートするもの> } from "./gametest-utility-lib.js";
```

### Tick
数tick毎、数tick後と言った処理を簡潔に書けるようになります。
#### 基本的な使い方
```js
import { Tick } from "./gametest-utility-lib.js";

Tick.setInterval(() => {
    // 20tick毎に実行する処理
}, 20);

Tick.setTimeout(() => {
    // 500tick後に実行する処理
}, 500);
```
#### 止める方法
`Tick.setInterval`と`Tick.setTimeout`はidを返し、それぞれのidを`Tick.clearInterval`、`Tick.clearTimeout`に渡すことで止めることができます。
```js
import { Tick } from "./gametest-utility-lib.js";

const ID = Tick.setInterval(() => {
    // 20tick毎に実行する処理
}, 20);

Tick.setTimeout(() => {
    Tick.clearInterval(ID);
}, 500);
```
### Others
#### print
指定したオブジェクトをチャットに表示します。
```js
import { print } from "./gametest-utility-lib.js";

print("text");
// text
print(128);
// 128
print([1, 1, 2, 3, 5, 8, 13])
// 1,1,2,3,5,8,13
print({a: 2, b: 5, c: 6});
// [object Object]
```
複数指定することが可能で、空白で区切られて表示されます。
```js
print("text", "text2");
// text text2
```
#### pprint
連想配列をjsonとして処理してprintします。  
jsonの処理には[toJson](#tojson)を使用しています。
```js
import { pprint } from "./gametest-utility-lib.js";

pprint("text");
// "text"
pprint(128);
// 128
pprint([1, 1, 2, 3, 5, 8, 13])
// 1,1,2,3,5,8,13
pprint({a: 2, b: 5, c: 6});
/*{
    "a": 2,
    "b": 5,
    "c": 6
}*/
```

#### toJson
JSON.stringifyのラッパーです。  
インデントはデフォルトでスペース4つです。  
また、オブジェクト内に関数、クラスがあった場合値をそれぞれ`[function <Function Name>]`、`[class <Class Name>]`に置き換えて処理します。
```js
import { print, toJson } from "./gametest-utility-lib.js";

print(toJson({a: 0}));
/*{
    "a": 0
}*/
print(toJson({a: 0}, 0));
/*{"a": 0}*/
print(toJson({a: function(){}, b: class {}}, 0));
/*{"a": "[function <Function Name>]", "b": "[class <Class Name>]"}*/
```
