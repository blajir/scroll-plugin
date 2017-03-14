# scroll-plugin

スクロールでCSSを適用するプラグイン
##概要
スクロールでCSSを適用するプラグインです。
任意の位置までスクロールすると任意の要素に、任意のCSSが適用できます。
##使い方
###HTML
    <a data-modal-title="AddImage" data-modal-text="モーダル2" class="modal" data-modal-image="http://placehold.jp/640x240.png">モーダル2</a>
  
###script
    $('.modal').on('click', function () {
      $(this).modal();
      easing: 'linear',
      animation: 'slideDown'
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
