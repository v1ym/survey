$(document).ready(function() {
  $("img").click(function() {
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
    var test = $('input[name="choice"]:checked').val();
    console.log(test)

    $(".card").css("visibility", "hidden");
    $("#submit").css("visibility", "hidden");
    $(".jumbotron").css("visibility", "hidden");
    $(".submission").fadeIn(300);
    // $(".submission").css("visibility", "visible");


  });//end of submit click
}); //end of ready function
