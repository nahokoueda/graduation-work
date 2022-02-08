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
