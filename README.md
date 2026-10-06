# 『Chrome拡張機能開発 入門』（くじらいど）見本のコード

Kindle本『Chrome拡張機能開発 入門』で使っている見本の拡張機能です。
フォルダごとに Chrome の `chrome://extensions` →［デベロッパー モード］をオン →［パッケージ化されていない拡張機能を読み込む］で読み込めます。

| フォルダ | 本の場所 | 中身 |
|---|---|---|
| `hello-world` | 2-3 | Google 公式チュートリアル「Hello World」 |
| `page-color` | 2-5 | 開いたページの色を変える（コンテンツスクリプト） |
| `icon-color` | 2-6 | アイコンをクリックしたタブだけ色を変える（Service Worker・activeTab） |
| `error-demo` | 2-7 | わざと `scripting` の権限を書き忘れた見本（エラーの見方の練習用） |
| `memo` | 第3章 | かんたんメモ帳（ポップアップ＋chrome.storage） |
| `memo-count` | 3-6 課題1 | 文字数を出す |
| `memo-clear` | 3-6 課題2 | 「全部消す」ボタン |
| `memo-color` | 3-6 課題3 | 付せんの色にする |
| `memo-options` | 3-7 | 設定画面（オプションページ）を足す |

2026年10月、Chrome 154 で動作を確認しています。

## ライセンス
- `hello-world` は Google の [chrome-extensions-samples](https://github.com/GoogleChrome/chrome-extensions-samples)（Apache License 2.0）のチュートリアルのコードです
- それ以外のフォルダは、この本のために書いたコードです。MIT License で自由に使えます

ブログ：https://kujiride.com/
