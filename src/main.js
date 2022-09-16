$(window).on("load", () => {
  //event listener on the left button
  $(".right-button").click(() => {
    const firstImg = $(".first");

    firstImg.each((i, obj) => {
      const siblings = $(obj).siblings();
      const rowImgWidth = $(obj).parent().width();

      if ($(obj).prev().length === 0) {
        $(obj).parent().children(":nth-last-child(1)").addClass("first");
      } else {
        $(obj).prev().addClass("first");
      }

      const firstImgWidth = $(obj).width() + 10;
      let shift = rowImgWidth + 10;

      siblings.animate({ left: `+=${firstImgWidth}` });
      $(obj).animate({ left: `+=${firstImgWidth}`, opacity: 0 });
      $(obj).animate({ left: `-=${shift}` }, () => {
        $(obj).removeClass("first");
        $(obj).parent().children(".last").removeClass("last");
        $(obj).addClass("last");
        $(obj).css("opacity", "1");
      });
    });
  });

  //event listener on the right button
  $(".left-button").click(() => {
    const lastImg = $(".last");

    lastImg.each((i, obj) => {
      const siblings = $(obj).siblings();
      const rowImgWidth = $(obj).parent().width();

      if ($(obj).next().length === 0) {
        $(obj).parent().children(":nth-child(1)").addClass("last");
      } else {
        $(obj).next().addClass("last");
      }

      const lastImgWidth = $(obj).width() + 10;
      let shift = rowImgWidth + 10 - lastImgWidth;

      $(obj).css("opacity", "0");
      siblings.animate({ left: `-=${lastImgWidth}` });
      $(obj).animate({ left: `+=${shift}` });
      $(obj).animate({ opacity: 1 }, 200, () => {
        $(obj).removeClass("last");
        $(obj).parent().children(".first").removeClass("first");
        $(obj).addClass("first");
      });
    });
  });
});
