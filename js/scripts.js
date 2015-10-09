$(function(){
  $("#blanks form").submit(function(event){
    var colorInput = $("input#color").val();
    var foodInput = $("input#food").val();
    var hobbyInput= $("input#hobby").val();
    var movieInput = $("input#movie").val();
    var televisionInput = $("input#television").val();
    var musicInput = $("input#music").val();


    $(".color").text(colorInput);
    $(".food").text(foodInput);
    $(".hobby").text(hobbyInput);
    $(".movie").text(movieInput);
    $(".television").text(televisionInput);
    $(".music").text(musicInput);

    $("#story").show();

    event.preventDefault();
  });
});
