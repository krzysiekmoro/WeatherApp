$("#submitButton").click(function(e){

    let weather = "";

    e.preventDefault();

    let cityName = $("#city").val();
    console.log(cityName);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bfff717bbe8d8b668fdcc1c6869dd9c5`)
    
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        weather += `<p>The weather in ${cityName} is currently '${myJson.weather[0].description}'. The temperature is ${Math.floor(myJson.main.temp-273)}&deg;C.</p>`;
        console.log(weather);
        $("#weather").html(weather);
    });

})

