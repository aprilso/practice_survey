$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();
    const meal = $("input:radio[name=meal]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val(); 

    $("#output1").text(beverage);
    $("#output2").text(meal);
    $("#output3").text(dob);
    $("#output4").text(favoriteColor);
  });
});