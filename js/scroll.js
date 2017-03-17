(function ($) {
  $.fn.scroll = function(options) {
    var common = common || {};

    return this.each(function () {
      // デフォルト値とオプション値をマージ
      var setting = $.extend({
        target: this,
        distance: 100,
        cssName: ''
      }, options);

      // console.log(setting);
      // console.log($(setting.target).offset().top);

      // 要素の退避
      var $this = this;

      // scroll関数
      common.scroll = function (params) {
        // 要素の位置を取得
        var targetPosition = $(params.target).offset().top;

        // スクロール量を取得
        var scrollPosition = $(window).scrollTop();

        // スクロール量+任意の値params.distanceがターゲット位置まで移動した時
        if (scrollPosition + params.distance > targetPosition) {
          // 要素に任意のクラスを適用
          $(params.target).addClass(params.cssName);
        }
      }


      // スクロール時に実行する内容
      $(window).on('scroll', function () {
        // scroll関数の実行
        common.scroll(setting);
      });

    });
  };
}(jQuery));
