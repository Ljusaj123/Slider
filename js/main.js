"use strict";

$(window).on("load", function () {
  // $(".firstClone").each((i, obj) => {
  //   const firstCloneSize = $(obj).width();
  //   $(obj)
  //     .parent()
  //     .css("transform", "translateX(" + firstCloneSize + "px)");
  // });
  //event listener on the left button
  $(".left-button").click(function () {
    var counterImg = $(".counter");
    counterImg.each(function (i, obj) {
      var lastClone = $(obj).prev().prev().hasClass("lastClone");
      var firstClone = $(obj).parent().children(":nth-last-child(1)");
      var imagesOfRow = $(obj).parent().children();

      if (lastClone) {
        var firstCloneWidth = firstClone.width();
        imagesOfRow.animate({
          left: -firstCloneWidth
        }, 500);
        firstClone.addClass("counter");
      } else {
        var counterimgWidth = $(obj).width() + 8;
        imagesOfRow.animate({
          left: "+=" + counterimgWidth
        }, 500);
        $(obj).prev().addClass("counter");
      }

      $(obj).removeClass("counter");
    });
  }); //event listener on the right button

  $(".right-button").click(function () {
    var counterImg = $(".counter");
    counterImg.each(function (i, obj) {
      var isFirstClone = $(obj).hasClass("firstClone");
      var hasTopRow = $(obj).parent().hasClass("top-row");
      var row = $(obj).parent().width();
      var wrapper = $(obj).parent().parent().width();
      var botRowLastCloneWidth = $(".bot-row .lastClone").width();
      var imagesOfRow = $(obj).parent().children();

      if (isFirstClone) {
        var width = 0;

        if (hasTopRow) {
          width = row - wrapper + 24;
        } else {
          width = row - wrapper - botRowLastCloneWidth + 4;
        }

        imagesOfRow.animate({
          left: "+=" + width
        }, 500);
        $(obj).parent().children(":nth-child(3)").addClass("counter");
      } else {
        var imgWidth = $(obj).next().width() + 8;
        imagesOfRow.animate({
          left: "-=" + imgWidth
        }, 500);
        $(obj).next().addClass("counter");
      }

      $(obj).removeClass("counter");
    });
  });
});