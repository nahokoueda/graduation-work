//-----画像のfadeUp---------

$(function () {
  if ($("#gallery-photo_main > figure img").length) {
    var gallerymainImgBar;
    gallerymainImgBar = $("#gallery-photo_main > figure img").offset().top;
    console.log("gallerymainImgBar" + gallerymainImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerymainImgBar < $(window).height() + dy) {
      console.log("犬");
      $("#gallery-photo_main > figure img").addClass("fadeFade");
    } else {
      console.log("猫");
      $("#gallery-photo_main > figure img").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#gallery-photo_main2 > figure img").length) {
    var gallerymain2ImgBar;
    gallerymain2ImgBar = $("#gallery-photo_main2 > figure img").offset().top;
    console.log("gallerymain2ImgBar" + gallerymain2ImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerymain2ImgBar < $(window).height() + dy) {
      console.log("犬");
      $("#gallery-photo_main2 > figure img").addClass("fadeFade");
    } else {
      console.log("猫");
      $("#gallery-photo_main2 > figure img").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#gallery-photo_main3 > figure img").length) {
    var gallerymain3ImgBar;
    gallerymain3ImgBar = $("#gallery-photo_main3 > figure img").offset().top;
    console.log("gallerymain3ImgBar" + gallerymain3ImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerymain3ImgBar < $(window).height() + dy) {
      console.log("犬");
      $("#gallery-photo_main3 > figure img").addClass("fadeFade");
    } else {
      console.log("猫");
      $("#gallery-photo_main3 > figure img").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#gallery-photo_main4 > figure img").length) {
    var gallerymain4ImgBar;
    gallerymain4ImgBar = $("#gallery-photo_main4 > figure img").offset().top;
    console.log("gallerymain4ImgBar" + gallerymain4ImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerymain4ImgBar < $(window).height() + dy) {
      console.log("犬");
      $("#gallery-photo_main4 > figure img").addClass("fadeFade");
    } else {
      console.log("猫");
      $("#gallery-photo_main4 > figure img").removeClass("fadeFade");
    }
  });
});

//-----画像のランダム表示---------
$(function () {
  if ($("#small-photo__area > div figure img").length) {
    var gallerySmallImgBar;
    gallerySmallImgBar = $("#small-photo__area > div figure img").offset().top;
    console.log("gallerySmallImgBar" + gallerySmallImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerySmallImgBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#small-photo__area > div figure img").addClass("FadeUpUp");
    } else {
      console.log("たま");
      $("#small-photo__area > div figure img").removeClass("FadeUpUp");
    }
  });
});

$(function () {
  if ($("#small-photo__area2 > div figure img").length) {
    var gallerySmall2ImgBar;
    gallerySmall2ImgBar = $("#small-photo__area2 > div figure img").offset()
      .top;
    console.log("gallerySmall2ImgBar" + gallerySmall2ImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerySmall2ImgBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#small-photo__area2 > div figure img").addClass("FadeUpUp");
    } else {
      console.log("たま");
      $("#small-photo__area2 > div figure img").removeClass("FadeUpUp");
    }
  });
});

$(function () {
  if ($("#small-photo__area3 > div figure img").length) {
    var gallerySmall3ImgBar;
    gallerySmall3ImgBar = $("#small-photo__area3 > div figure img").offset()
      .top;
    console.log("gallerySmall3ImgBar" + gallerySmall3ImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerySmall3ImgBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#small-photo__area3 > div figure img").addClass("FadeUpUp");
    } else {
      console.log("たま");
      $("#small-photo__area3 > div figure img").removeClass("FadeUpUp");
    }
  });
});

$(function () {
  if ($("#small-photo__area4 > div figure img").length) {
    var gallerySmall4ImgBar;
    gallerySmall4ImgBar = $("#small-photo__area4 > div figure img").offset()
      .top;
    console.log("gallerySmall4ImgBar" + gallerySmall4ImgBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (gallerySmall4ImgBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#small-photo__area4 > div figure img").addClass("FadeUpUp");
    } else {
      console.log("たま");
      $("#small-photo__area4 > div figure img").removeClass("FadeUpUp");
    }
  });
});

//-----画像の切り替え---------

// $(function () {
//   var smallImg01 = $("#smallImage01").attr("src");
//   var smallImg02 = $("#smallImage02").attr("src");
//   var smallImg03 = $("#smallImage03").attr("src");
//   var smallImg04 = $("#smallImage04").attr("src");
//   var smallImg05 = $("#smallImage05").attr("src");

//   console.log("画像1:" + smallImg01);
//   console.log("画像2:" + smallImg02);
//   console.log("画像3:" + smallImg03);
//   console.log("画像4:" + smallImg04);
//   console.log("画像5:" + smallImg05);

//   $("#smallImage01").on("click", function () {
//     console.log("gazou1");
//     $("#mainImage").attr("src", smallImg01);
//   });
//   $("#smallImage02").on("click", function () {
//     console.log("gazou2");
//     $("#mainImage").attr("src", smallImg02);
//   });
//   $("#smallImage03").on("click", function () {
//     console.log("gazou3");
//     $("#mainImage").attr("src", smallImg03);
//   });
//   $("#smallImage04").on("click", function () {
//     console.log("gazou4");
//     $("#mainImage").attr("src", smallImg04);
//   });
//   $("#smallImage05").on("click", function () {
//     console.log("gazou5");
//     $("#mainImage").attr("src", smallImg05);
//   });
// });

$(function () {
  var smallImg01 = $("#smallImage-m01").attr("src");
  var smallImg02 = $("#smallImage-m02").attr("src");
  var smallImg03 = $("#smallImage-m03").attr("src");
  var smallImg04 = $("#smallImage-m04").attr("src");
  var smallImg05 = $("#smallImage-m05").attr("src");

  console.log("画像1:" + smallImg01);
  console.log("画像2:" + smallImg02);
  console.log("画像3:" + smallImg03);
  console.log("画像4:" + smallImg04);
  console.log("画像5:" + smallImg05);

  $("#smallImage-m01").on("click", function () {
    console.log("gazou1");
    $("#mainImage2").attr("src", smallImg01);
    // $("#mainImage2").fadeOut(50, function () {
    //   $("#smallImage-m01")
    //     .attr("src", img)
    //     .on("load", function () {
    //       $(this).fadeIn(1000);
    //     });
    // });
  });

  $("#smallImage-m02").on("click", function () {
    console.log("gazou2");
    $("#mainImage2").attr("src", smallImg02);
  });
  $("#smallImage-m03").on("click", function () {
    console.log("gazou3");
    $("#mainImage2").attr("src", smallImg03);
  });
  $("#smallImage-m04").on("click", function () {
    console.log("gazou4");
    $("#mainImage2").attr("src", smallImg04);
  });
  $("#smallImage-m05").on("click", function () {
    console.log("gazou5");
    $("#mainImage2").attr("src", smallImg05);
  });
});

$(function () {
  var smallImg01 = $("#smallImage-l01").attr("src");
  var smallImg02 = $("#smallImage-l02").attr("src");
  var smallImg03 = $("#smallImage-l03").attr("src");

  console.log("画像1:" + smallImg01);
  console.log("画像2:" + smallImg02);
  console.log("画像3:" + smallImg03);

  $("#smallImage-l01").on("click", function () {
    console.log("gazou1");
    $("#mainImage3").attr("src", smallImg01);
  });
  $("#smallImage-l02").on("click", function () {
    console.log("gazou2");
    $("#mainImage3").attr("src", smallImg02);
  });
  $("#smallImage-l03").on("click", function () {
    console.log("gazou3");
    $("#mainImage3").attr("src", smallImg03);
  });
});

$(function () {
  var smallImg01 = $("#smallImage-men01").attr("src");
  var smallImg02 = $("#smallImage-men02").attr("src");
  var smallImg03 = $("#smallImage-men03").attr("src");
  var smallImg04 = $("#smallImage-men04").attr("src");

  console.log("画像1:" + smallImg01);
  console.log("画像2:" + smallImg02);
  console.log("画像3:" + smallImg03);
  console.log("画像4:" + smallImg04);

  $("#smallImage-men01").on("click", function () {
    console.log("gazou1");
    $("#mainImage4").attr("src", smallImg01);
  });
  $("#smallImage-men02").on("click", function () {
    console.log("gazou2");
    $("#mainImage4").attr("src", smallImg02);
  });
  $("#smallImage-men03").on("click", function () {
    console.log("gazou3");
    $("#mainImage4").attr("src", smallImg03);
  });
  $("#smallImage-men04").on("click", function () {
    console.log("gazou4");
    $("#mainImage4").attr("src", smallImg04);
  });
});
