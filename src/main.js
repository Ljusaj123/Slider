$(window).on("load", () => {
  //event listener on the left button
  $(".right-button").click(() => {
    const lastImg = $(".last");
    const firstImg = $(".first");

    firstImg.each((i, obj) => {
      firstImg.prev().addClass("first");

      if (firstImg.prev().length === 0) {
        $(obj).parent().children(":nth-last-child(1)").addClass("first");
      }
      lastImg.removeClass("last");
      firstImg.addClass("last");
      firstImg.removeClass("first");
    });
  });

  //event listener on the right button
  $(".left-button").click(() => {
    const lastImg = $(".last");
    const firstImg = $(".first");

    lastImg.each((i, obj) => {
      lastImg.next().addClass("last");

      if (lastImg.next().length === 0) {
        $(obj).parent().children(":nth-child(1)").addClass("last");
      }
      firstImg.removeClass("first");
      lastImg.removeClass("last");
      lastImg.addClass("first");
    });
  });
});
