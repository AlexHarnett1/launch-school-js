console.log("Hello");

$().ready(function () {
  let $anchor = $("a");
  console.log('ITE WOREKWJRWE');

  $("form").submit(function (event) {
    event.preventDefault();
    let input = $("input[type='text']").val();
    console.log(input);
    $(document).off('keypress').on('keypress', function (e) {
      if (e.key !== input) return;
      $anchor.trigger("click");
    });
  });

  $($anchor).click(function (event) {
    event.preventDefault();
    $("#accordion").slideToggle();
  });
})