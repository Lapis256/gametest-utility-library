# gametest-utility-library
gametestに便利な機能を提供するライブラリです。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>目次</summary>

- [導入方法](#%E5%B0%8E%E5%85%A5%E6%96%B9%E6%B3%95)
- [使い方](#%E4%BD%BF%E3%81%84%E6%96%B9)
  - [import方法](#import%E6%96%B9%E6%B3%95)
  - [Event](#event)
    - [基本的な使い方](#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9)
    - [削除する方法](#%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)
  - [Tick](#tick)
    - [基本的な使い方](#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9-1)
    - [止める方法](#%E6%AD%A2%E3%82%81%E3%82%8B%E6%96%B9%E6%B3%95)
  - [Others](#others)
    - [print](#print)
    - [pprint](#pprint)
    - [error](#error)
    - [warn](#warn)
    - [toJson](#tojson)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 導入方法
ダウンロードし scripts フォルダに以下のように貼り付けてください。
```
scripts
├─ gametest-utility-library (名前を変更しても構いません)
│  ├─ index.js
│  └─ src
│     └─ ...
└─ index.js (manifest.json の entry で指定したファイル)
```

## 使い方
### import方法
```js
// ライブラリのフォルダ名に合わせて変更してください。
import { <インポートするもの> } from "./gametest-utility-library/index.js";
```

### Event
イベントを簡潔に書けるようになります。
#### 基本的な使い方
```js
import { Event } from "./gametest-utility-library/index.js";

Event.on("<イベント名>", eventData => {
    // 処理
});
```
チャットイベントの場合は以下のようになります。
```js
import { Event } from "./gametest-utility-library/index.js";

Event.on("beforeChat", eventData => {
    if(!eventData.message.startsWith(".neko")) return;
    eventData.message = "にゃーん";
});
```
#### 削除する方法
`Event.off`に登録したコールバック関数を渡す事で削除可能です。
```js
import { Event } from "./gametest-utility-library/index.js";

const callback = (eventData) => {
    // 処理
}

Event.on("<イベント名>", callback);

Event.off(callback);
```
### Tick
数tick毎、数tick後と言った処理を簡潔に書けるようになります。
#### 基本的な使い方
```js
import { Tick } from "./gametest-utility-library/index.js";

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
import { Tick } from "./gametest-utility-library/index.js";

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
import { print } from "./gametest-utility-library/index.js";

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
jsonの処理には`toJson`を使用しています。
```js
import { pprint } from "./gametest-utility-library/index.js";

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
#### error
`§4ERROE: `が先頭につくprintです。
```js
import { error } from "./gametest-utility-library/index.js";

error("text");
// §4ERROE: text
error(128);
// §4ERROE: 128
error([1, 1, 2, 3, 5, 8, 13])
// §4ERROE: 1,1,2,3,5,8,13
error({a: 2, b: 5, c: 6});
// §4ERROE: [object Object]
```
#### warn
`§eWARN: `が先頭につくprintです。
```js
import { warn } from "./gametest-utility-library/index.js";

warn("text");
// §eWARN: text
warn(128);
// §eWARN: 128
warn([1, 1, 2, 3, 5, 8, 13])
// §eWARN: 1,1,2,3,5,8,13
warn({a: 2, b: 5, c: 6});
// §eWARN: [object Object]
```
#### toJson
JSON.stringifyのラッパーです。  
インデントはデフォルトでスペース4つです。  
また、オブジェクト内に関数、クラスがあった場合値をそれぞれ`[function <Function Name>]`、`[class <Class Name>]`に置き換えて処理します。
```js
import { print, toJson } from "./gametest-utility-library/index.js";

print(toJson({a: 0}));
/*{
    "a": 0
}*/
print(toJson({a: 0}, 0));
/*{"a": 0}*/
print(toJson({a: function(){}, b: class {}}, 0));
/*{"a": "[function <Function Name>]", "b": "[class <Class Name>]"}*/
```
