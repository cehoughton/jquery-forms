$(document).ready(function() {
  $("p").hide();
  $("form").submit(function(event) { //when form is submitted do something
    event.preventDefault(); //prevents default action
    $("p").fadeIn();
    var input = $("#animal_in").val(); //set the varible input from animal in
    var input2 = $("#name_in").val();
    var input3 = $("#verb_in").val();
    var input4 = $("#place_in").val();
    var input5 = $("#noun_in").val();

    $(".animal_out").text(input.toUpperCase()); //put variable input into paragraph
    $(".name_out").text(input2.toUpperCase());
    $(".verb_out").text(input3.toUpperCase());
    $(".place_out").text(input4.toUpperCase());
    $(".noun_out").text(input5.toUpperCase());


  });

});
