# gametest-utility-library
gametestに便利な機能を提供するライブラリです。

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
