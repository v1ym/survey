$(document).ready(function() {
  $("img").click(function() {
    $("img").removeClass("active");
    $(this).toggleClass("active");
  }); //end of img click
  $("p").click(function() {
    $("img").removeClass("active");
    $(this).closest("label").prev().find("img").toggleClass("active");
  });//end of p click

  $("#submit").click(function() {
    var test = $('input[name="choice"]:checked').val();
    console.log(test)



  });//end of submit click

}); //end of ready function
