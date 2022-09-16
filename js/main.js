"use strict";

$(window).on("load", function () {
  //event listener on the left button
  $(".right-button").click(function () {
    var firstImg = $(".first");
    firstImg.each(function (i, obj) {
      if ($(obj).prev().length === 0) {
        $(obj).parent().children(":nth-last-child(1)").addClass("first");
      } else {
        $(obj).prev().addClass("first");
      }

      var firstImgWidth = $(obj).width() + 10;
      var rowImgWidth = $(obj).parent().width();
      var shift = rowImgWidth + 10 - firstImgWidth;
      var siblings = $(obj).siblings();
      siblings.animate({
        left: "+=" + firstImgWidth
      });
      $(obj).animate({
        left: "-=" + shift
      }, function () {
        $(obj).removeClass("first");
        $(obj).parent().children(".last").removeClass("last");
        $(obj).addClass("last");
      });
    });
  }); //event listener on the right button

  $(".left-button").click(function () {
    var lastImg = $(".last");
    lastImg.each(function (i, obj) {
      console.log($(obj).next());

      if ($(obj).next().length === 0) {
        $(obj).parent().children(":nth-child(1)").addClass("last");
      } else {
        $(obj).next().addClass("last");
      }

      var lastImgWidth = $(obj).width() + 10;
      var rowImgWidth = $(obj).parent().width();
      var shift = rowImgWidth + 10 - lastImgWidth;
      var siblings = $(obj).siblings();
      siblings.animate({
        left: "-=" + lastImgWidth
      });
      $(obj).animate({
        left: "+=" + shift
      }, function () {
        $(obj).removeClass("last");
        $(obj).parent().children(".first").removeClass("first");
        $(obj).addClass("first");
      });
    });
  });
});