$(document).ready(function(){
  $("#penguin").click(function(){
    $(".face").fadeIn("slow");
    $("#penguin").fadeOut("slow");
  });

  $(".face").hover(function(){
    $(".sad").fadeIn("slow");
  });

  $("#submit-button").hover(function(){
  $(".contact-page").css({"background-color": "#F7E973"});

  });

  $("#submit-button").click(function(){
    $("label").text("THANK YOU!");
});



});
