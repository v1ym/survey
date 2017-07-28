$(document).ready(function() {
  $("img").click(function() {
    $(".error").css("display", "none");
    $("img").removeClass("active");
    $("img").addClass("inactive");
    $(this).removeClass("inactive");
    $(this).toggleClass("active");
  }); //end of img click
  $("p").click(function() {
    $("img").removeClass("active");
    $(this).closest("label").prev().find("img").toggleClass("active");
  });//end of p click

  $("#submit").click(function() {
    var choice = $('input[name="choice"]:checked').val();
    if (choice == undefined) {
      $(".error").fadeIn("fast");
    }
    else if (choice !== undefined) {
      $(".card").css("visibility", "hidden");
      $("#submit").css("visibility", "hidden");
      $(".jumbotron").css("visibility", "hidden");
      $(".submission").fadeIn(300);
    };
  });//end of submit click
  $("#close").click(function() {
    window.close();
  });

}); //end of ready function
