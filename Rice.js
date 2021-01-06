$(function () {
  $("#wrapper").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("#introduce").slideDown();
    } else {
      $("#introduce").slideUp();
    }
  });
  $(".slick01").slick({
    autoplay: true, //「オプション名: 値」の形式で書く
    autoplaySpeed: 4000,
    dots: true, //複数書く場合は「,」でつなぐ
    prevArrow: `<span><div class="fa-arrow-right"><img src="../image/right-arrow.svg" alt="アイコン右"></div></span>`,
    nextArrow: `<span><div class="fa-arrow-left"><img src="../image/left-arrow.svg" alt="アイコン左"></div></span>`
  });
  $(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 500; // ミリ秒で記述
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });
});
