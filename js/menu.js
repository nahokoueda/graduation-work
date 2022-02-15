//-----下から文字がUp---------

$(function () {
  //   if ($("#display-flex__allArea > div").length) {
  var menuCutBar;
  menuCutBar = $("#display-flex__allArea > .cut-detail").offset().top;
  console.log("menuCutBar" + menuCutBar + "px");
  //   }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuCutBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#display-flex__allArea > .cut-detail").addClass("fadeFade");
    } else {
      console.log("たま");
      $("#display-flex__allArea > .cut-detail").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#color-area > .color-price").length) {
    var menuColorBar;
    menuColorBar = $("#color-area > .color-price").offset().top;
    console.log("menuColorBar" + menuColorBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuColorBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#color-area > .color-price").addClass("fadeFade");
    } else {
      console.log("たま");
      $("#color-area > .color-price").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#perm-price").length) {
    var menuPermBar;
    menuPermBar = $("#perm-price").offset().top;
    console.log("menuPermBar" + menuPermBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuPermBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#perm-price").addClass("fadeFade");
    } else {
      console.log("たま");
      $("#perm-price").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#display-flex__allArea2 > .haircare-area").length) {
    var menuHaircareBar;
    menuHaircareBar = $("#display-flex__allArea2 > .haircare-area").offset()
      .top;
    console.log("menuHaircareBar" + menuHaircareBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuHaircareBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#display-flex__allArea2 > .haircare-area").addClass("fadeFade");
    } else {
      console.log("たま");
      $("#display-flex__allArea2 > .haircare-area").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#spaArea").length) {
    var menuSpaBar;
    menuSpaBar = $("#spaArea").offset().top;
    console.log("menuSpaBar" + menuSpaBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuSpaBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#spaArea").addClass("fadeFade");
    } else {
      console.log("たま");
      $("#spaArea").removeClass("fadeFade");
    }
  });
});

$(function () {
  if ($("#infoArea").length) {
    var menuInfoBar;
    menuInfoBar = $("#infoArea").offset().top;
    console.log("menuInfoBar" + menuInfoBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuInfoBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#infoArea").addClass("fadeFade");
    } else {
      console.log("たま");
      $("#infoArea").removeClass("fadeFade");
    }
  });
});

//-----画像がふわ---------

$(function () {
  if ($("#cutImage > figure img").length) {
    var menuCutImageBar;
    menuCutImageBar = $("#cutImage > figure img").offset().top;
    console.log("menuCutImageBar" + menuCutImageBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuCutImageBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#cutImage > figure img").addClass("fade-in");
    } else {
      console.log("たま");
      $("#cutImage > figure img").removeClass("fade-in");
    }
  });
});

$(function () {
  if ($("#haircarePhoto > figure img").length) {
    var menuCareImageBar;
    menuCareImageBar = $("#haircarePhoto > figure img").offset().top;
    console.log("menuCareImageBar" + menuCareImageBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuCareImageBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#haircarePhoto > figure img").addClass("fade-in");
    } else {
      console.log("たま");
      $("#haircarePhoto > figure img").removeClass("fade-in");
    }
  });
});

$(function () {
  if ($("#spaPhoto > figure img").length) {
    var menuSpaImageBar;
    menuSpaImageBar = $("#spaPhoto > figure img").offset().top;
    console.log("menuSpaImageBar" + menuSpaImageBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuSpaImageBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#spaPhoto > figure img").addClass("fade-in");
    } else {
      console.log("たま");
      $("#spaPhoto > figure img").removeClass("fade-in");
    }
  });
});

$(function () {
  if ($("#infoPhoto > figure img").length) {
    var menuInfoImageBar;
    menuInfoImageBar = $("#infoPhoto > figure img").offset().top;
    console.log("menuInfoImageBar" + menuInfoImageBar + "px");
  }

  $(window).on("scroll", function () {
    var dy = $(this).scrollTop();
    console.log("スクロールの値:" + dy);

    if (menuInfoImageBar < $(window).height() + dy) {
      console.log("ぽち");
      $("#infoPhoto > figure img").addClass("fade-in");
    } else {
      console.log("たま");
      $("#infoPhoto > figure img").removeClass("fade-in");
    }
  });
});
