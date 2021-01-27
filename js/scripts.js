$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();
    alert(beverage);
    const meal = $("input:radio[name=meal]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val(); 

    $("#output").text(result);
  });
});