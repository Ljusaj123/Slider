$(window).on("load", () => {
  //event listener on the left button
  $(".right-button").click(() => {
    const firstImg = $(".first");

    firstImg.each((i, obj) => {
      if ($(obj).prev().length === 0) {
        $(obj).parent().children(":nth-last-child(1)").addClass("first");
      } else {
        $(obj).prev().addClass("first");
      }

      const firstImgWidth = $(obj).width() + 10;
      const rowImgWidth = $(obj).parent().width();
      let shift = rowImgWidth + 10 - firstImgWidth;
      const siblings = $(obj).siblings();

      siblings.animate({ left: `+=${firstImgWidth}` });
      $(obj).animate({ left: `-=${shift}` }, () => {
        $(obj).removeClass("first");
        $(obj).parent().children(".last").removeClass("last");
        $(obj).addClass("last");
      });
    });
  });

  //event listener on the right button
  $(".left-button").click(() => {
    const lastImg = $(".last");

    lastImg.each((i, obj) => {
      console.log($(obj).next());
      if ($(obj).next().length === 0) {
        $(obj).parent().children(":nth-child(1)").addClass("last");
      } else {
        $(obj).next().addClass("last");
      }

      const lastImgWidth = $(obj).width() + 10;
      const rowImgWidth = $(obj).parent().width();
      let shift = rowImgWidth + 10 - lastImgWidth;
      const siblings = $(obj).siblings();
      siblings.animate({ left: `-=${lastImgWidth}` });
      $(obj).animate({ left: `+=${shift}` }, () => {
        $(obj).removeClass("last");
        $(obj).parent().children(".first").removeClass("first");
        $(obj).addClass("first");
      });
    });
  });
});
