


$(document).ready(function(){

  /*
    onclick of submit button
    grab value of input field and store to cityname var
    update weather var to include city name
    run ajax function
  */

  $("#submit-btn").click(function(e){
    e.preventDefault();
    var cityname = $("#city").val();
    console.log(cityname);

    var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&id=2543cb65a74c020d1fa27a213c4ff861&APPID=2543cb65a74c020d1fa27a213c4ff861";

    $.ajax({
      dataType: "jsonp",
      url: weather,
      success: function(data){
        console.log(data);
        $("h2").html(data.name);
        $("#temp").html(data.main.temp);
        $("#desc").html(data.weather[0].description)
      }
    });
  });

})