# scroll-plugin

スクロールでCSSを適用するプラグイン
##概要
スクロール用のプラグインです。
任意の要素に対し、任意の位置までスクロールすると、任意のCSSを適用することができます。　　
##使い方　　
###HTML　　
  　　<div class="box1 animate"></div>
  
###script　　
    $('.box1').scroll({
      cssName: 'is-success', // 適用したいCSS
      distance: 0 // アニメーション発火距離
    });

対象のDOM要素に対して、実行します。
## 必要とするもの
・jQuery 1.7以上
## プラグインオプション
```distance: 100 ```

アニメーションが発生するための余剰距離。デフォルト値は100
***

```cssName: '' ```

適用したいCSS名。デフォルト値は''
***


## デモページ
[基本サンプル](https://blajir.github.io/scroll-plugin/)
