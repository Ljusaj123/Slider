$(window).on("load", () => {
  $(".firstClone").each((i, obj) => {
    const firstCloneSize = $(obj).width();
    $(obj)
      .parent()
      .css("transform", "translateX(" + firstCloneSize + "px)");
  });

  //event listener on the left button
  $(".left-icon").click(() => {
    const counterImg = $(".counter");
    counterImg.each((i, obj) => {
      const lastClone = $(obj).prev().prev().hasClass("lastClone");
      const firstClone = $(obj).parent().children(":nth-last-child(1)");
      const imagesOfRow = $(obj).parent().children();

      if (lastClone) {
        const firstCloneWidth = firstClone.width();
        imagesOfRow.animate({ left: -firstCloneWidth }, 500);
        firstClone.addClass("counter");
      } else {
        const counterimgWidth = $(obj).width() + 8;
        imagesOfRow.animate({ left: `+=${counterimgWidth}` }, 500);
        $(obj).prev().addClass("counter");
      }
      $(obj).removeClass("counter");
    });
  });

  //event listener on the right button
  $(".right-icon").click(() => {
    const counterImg = $(".counter");
    counterImg.each((i, obj) => {
      const isFirstClone = $(obj).hasClass("firstClone");
      const hasTopRow = $(obj).parent().hasClass("top-row");
      const row = $(obj).parent().width();
      const wrapper = $(obj).parent().parent().width();
      const botRowLastCloneWidth = $(".bot-row .lastClone").width();
      const imagesOfRow = $(obj).parent().children();

      if (isFirstClone) {
        let width = 0;
        if (hasTopRow) {
          width = row - wrapper + 24;
        } else {
          width = row - wrapper - botRowLastCloneWidth + 4;
        }
        imagesOfRow.animate({ left: `+=${width}` }, 500);
        $(obj).parent().children(":nth-child(3)").addClass("counter");
      } else {
        const imgWidth = $(obj).next().width() + 8;
        imagesOfRow.animate({ left: `-=${imgWidth}` }, 500);
        $(obj).next().addClass("counter");
      }
      $(obj).removeClass("counter");
    });
  });
});
