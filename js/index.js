var addClassFlag = false;

//-----コンセプト---------

//-----要素の位置を取得---------
$(function () {
  var conceptBar;
  conceptBar = $("#conceptPic > img").offset().top;
  console.log("conceptBar" + conceptBar + "px");

  //-----スクロール位置を取得---------
  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    //-----条件分---------
    if (conceptBar < $(window).height() + dy) {
      console.log("大きい");
      $("#conceptPic > img").addClass("fade-in");
    } else {
      console.log("小さい");
      $("#conceptPic > img").removeClass("fade-in");
    }
  });
});
//-----文字のflow---------
$(function () {
  if ($("#conceptH1 > div").length) {
    var conceptH1Bar;
    conceptH1Bar = $("#conceptH1 > div").offset().top;
    console.log("conceptH1Bar" + conceptH1Bar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (conceptH1Bar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#conceptH1 > div").addClass("wordFlow");
    } else {
      console.log("小さいだよ");
      $("#conceptH1 > div").removeClass("wordFlow");
    }
  });
});

$(function () {
  if ($("#stylistH1 > div > h1").length) {
    var stylistH1Bar;
    stylistH1Bar = $("#stylistH1 > div > h1").offset().top;
    console.log("stylistH1Bar" + stylistH1Bar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (stylistH1Bar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#stylistH1 > div > h1").addClass("wordFlow2");
    } else {
      console.log("小さいだよ");
      $("#stylistH1 > div h1").removeClass("wordFlow2");
    }
  });
});
//-----文章のfadeUp---------
$(function () {
  if ($("#conceptH1 > .conceptParagraph").length) {
    var conceptPBar;
    conceptPBar = $("#conceptH1 > .conceptParagraph").offset().top;
    console.log("conceptPBar" + conceptPBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (conceptPBar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#conceptH1 > .conceptParagraph").addClass("fadeUp");
    } else {
      console.log("小さいだよ");
      $("#conceptH1 > .conceptParagraph").removeClass("fadeUp");
    }
  });
});

$(function () {
  if ($("#stylistH1 > ul").length) {
    var stylistPBar;
    stylistPBar = $("#stylistH1 > ul").offset().top;
    console.log("stylistPBar" + stylistPBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (stylistPBar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#stylistH1 > ul").addClass("fadeUp");
    } else {
      console.log("小さいだよ");
      $("#stylistH1 > ul").removeClass("fadeUp");
    }
  });
});

$(function () {
  if ($("#news > div").length) {
    var NewsBar;
    NewsBar = $("#news > div").offset().top;
    console.log("NewsBar" + NewsBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (NewsBar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#news > div").addClass("fadeUp");
    } else {
      console.log("小さいだよ");
      $("#news > div").removeClass("fadeUp");
    }
  });
});

$(function () {
  if ($("#clendarUp > div").length) {
    var calendarBar;
    calendarBar = $("#clendarUp > div").offset().top;
    console.log("calendarBar" + calendarBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (calendarBar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#clendarUp > div").addClass("fadeUp");
    } else {
      console.log("小さいだよ");
      $("#clendarUp > div").removeClass("fadeUp");
    }
  });
});

$(function () {
  if ($("#Reserve > div").length) {
    var ReserveBar;
    ReserveBar = $("#Reserve > div").offset().top;
    console.log("ReserveBar" + ReserveBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (ReserveBar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#Reserve > div").addClass("fadeUp");
    } else {
      console.log("小さいだよ");
      $("#Reserve > div").removeClass("fadeUp");
    }
  });
});

$(function () {
  if ($("#accessUp > div").length) {
    var accessBar;
    accessBar = $("#accessUp > div").offset().top;
    console.log("accessBar" + accessBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (accessBar < $(window).height() + dy) {
      console.log("大きいだよ");
      $("#accessUp > div").addClass("fadeUp");
    } else {
      console.log("小さいだよ");
      $("#accessUp > div").removeClass("fadeUp");
    }
  });
});
//-----スタイリスト---------
$(function () {
  var stylistBar;
  stylistBar = $("#stylist-area__photo > img").offset().top;
  console.log("stylistBar" + stylistBar + "px");

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (stylistBar < $(window).height() + dy) {
      console.log("over");
      $("#stylist-area__photo > img").addClass("fade-in");
    } else {
      console.log("small");
      $("#stylist-area__photo > img").removeClass("fade-in");
    }
  });
});
//-----スタイリストBg左から---------
$(function () {
  var stylistBgBar;
  stylistBgBar = $("#stylist-bgArea > div").offset().top;
  console.log("stylistBgBar" + stylistBgBar + "px");

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (stylistBgBar < $(window).height() + dy) {
      console.log("大");
      $("#stylist-bgArea > div").addClass("stylist-bgArea_jq");
    } else {
      console.log("小");
      $("#stylist-bgArea > div").removeClass("stylist-bgArea_jq");
    }
  });
});
//-----cuting-area---------
$(function () {
  if ($("#cutting-photo__Area > figure img").length) {
    var cuttingImgBar;
    cuttingImgBar = $("#cutting-photo__Area > figure img").offset().top;
    console.log("cuttingImgBar" + cuttingImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (cuttingImgBar < $(window).height() + dy) {
      console.log("犬");
      $("#cutting-photo__Area > figure img").addClass("fadeFade");
    } else {
      console.log("猫");
      $("#cutting-photo__Area > figure img").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#cutting-Area > div").length) {
    var cuttingBGBar;
    cuttingBGBar = $("#cutting-Area > div").offset().top;
    console.log("cuttingBGBar" + cuttingBGBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (cuttingBGBar < $(window).height() + dy) {
      console.log("キリン");
      $("#cutting-Area > div").addClass("sliderBGBrown");
    } else {
      console.log("象");
      $("#cutting-Area > div").removeClass("sliderBGBrown");
    }
  });
});

//-----calendar-area---------

//-----svgアニメーション---------

stroke = new Vivus("mask", {
  //svgに指定したid名
  type: "scenario-sync", // アニメーションのタイプを設定
  duration: 110, //アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
  forceRender: false, //パスが更新された場合に再レンダリングさせない
  animTimingFunction: Vivus.EASE_OUT, //動きの加速減速設定
});

//-----スライダー---------

// function checkBreakPoint() {
//   w = $(window).width();
//   if (w <= 960) {
//     $("#Top-photo-area").not(".slick-initialized").slick({
//       fade: true, //切り替えをフェードで行う。初期値はfalse。
//       autoplay: true, //自動的に動き出すか。初期値はfalse。
//       autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
//       speed: 1000, //スライドの動きのスピード。初期値は300。
//       infinite: true, //スライドをループさせるかどうか。初期値はtrue。
//       slidesToShow: 1, //スライドを画面に3枚見せる
//       slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
//     });
//   } else {
//     $("#Top-photo-area.slick-initialized").slick("unslick");
//   }
// }
// $(window).resize(function () {
//   checkBreakPoint();
// });
// checkBreakPoint();

$(document).ready(function () {
  $("#Top-photo-area").slick({
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false, //矢印部分PreviewのHTMLを変更
    nextArrow: false,
  });
});

// $(function () {
//   if (window.matchMedia("(max-width: 960px)").matches)
function checkBreakPoint() {
  w = $(window).width();
  if (w <= 960) {
    $(".calendar-container__wrap").not(".slick-initialized").slick({
      fade: false, //切り替えをフェードで行う。初期値はfalse。
      autoplaySpeed: 2000, //次のスライドに切り替わる待ち時間
      speed: 1000, //スライドの動きのスピード。初期値は300。
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      slidesToShow: 1, //スライドを画面に3枚見せる
      slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
      arrows: true, //左右の矢印あり
      prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
      dots: false, //下部ドットナビゲーションの表示
      pauseOnFocus: false, //フォーカスで一時停止を無効
      pauseOnHover: false, //マウスホバーで一時停止を無効
      pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
    });
  } else {
    $(".calendar-container__wrap.slick-initialized").slick("unslick");
  }
}
$(window).resize(function () {
  checkBreakPoint();
});
checkBreakPoint();
