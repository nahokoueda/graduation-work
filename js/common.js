//-----navハンバーガー　---------

$(function () {
  $("#open-button").on("click", function () {
    console.log("クリック");
    $("#open-button").toggleClass("active");
    $("#nav").toggleClass("active");
    $("#nav").toggleClass("slideRight");
  });
});

//-----ハンバーガー右に戻る---------
$(function () {
  $("#open-button.active").on("click", function () {
    console.log("clickだよ");
    $("#nav").addClass("SlideToRight");
  });
});

//-----to top button---------
$(function () {
  if ($("#scrollTop").length) {
    var topBtn;
    topBtn = $("#scrollTop");
    topBtn.hide();
    console.log("topBtn" + topBtn + "px");
  }

  $(window).scroll(function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if ($(this).scrollTop() > 1000) {
      console.log("大きい");
      topBtn.fadeIn();
    } else {
      console.log("小さい");
      topBtn.fadeOut();
    }
  });

  //-----ページスクロールでトップへ戻る---------
  topBtn.on("click", function (event) {
    event.preventDefault(); //aのリンクの挙動を切る

    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
