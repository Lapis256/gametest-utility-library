# gametest-utility-library
gametestに便利な機能を提供するライブラリです。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [導入方法](#%E5%B0%8E%E5%85%A5%E6%96%B9%E6%B3%95)
- [使い方](#%E4%BD%BF%E3%81%84%E6%96%B9)
  - [import方法](#import%E6%96%B9%E6%B3%95)
  - [Event](#event)
  - [Tick](#tick)
    - [基本的な使い方](#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9)
    - [止める方法](#%E6%AD%A2%E3%82%81%E3%82%8B%E6%96%B9%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 導入方法
ダウンロードし scripts フォルダに以下のように貼り付けてください。
```
scripts
├gametest-utility-library (名前を変更しても構いません)
│                       ├src
│                       └index.js
└index.js (manifest.json の entry で指定したファイル)
```

## 使い方
### import方法
```js
// ライブラリのフォルダ名に合わせて変更してください。
import { <インポートするもの> } from "./gametest-utility-library/index.js";
```

### Event
イベントを簡潔に書けるようになります。
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
