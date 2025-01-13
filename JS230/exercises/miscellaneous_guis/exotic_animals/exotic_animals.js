$(() => {
  let timeoutID;
  $('figure').on("mouseenter mouseleave", function (e) {
    if (e.type === 'mouseenter') {
      $this = $(this);
      timeoutID = setTimeout(() => {
        $this.find('figcaption').addClass('show');
      }, 2000)
    } else {
      clearTimeout(timeoutID);
      $(this).find('figcaption').removeClass('show');
    }
  });
});