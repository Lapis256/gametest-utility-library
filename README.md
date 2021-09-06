# gametest-utility-library
gametestに便利な機能を提供するライブラリです。

## 導入方法
ダウンロードし scripts フォルダに以下のように貼り付けてください。
```
scripts
├gametest-utility-library (名前を変更しても構いません)
│                       ├src
│           └index.js
└index.js (manifest.json の entry で指定したファイル)
```

## 使い方
### import 方法
```js
// ライブラリのフォルダ名に合わせて変更してください。
import { <インポートするもの> } from "./gametest-utility-library/index.js";
```

### Event
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
