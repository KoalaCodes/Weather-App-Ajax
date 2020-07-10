
const key = "cf161c626e7d1da32cd590f1ca562efb";
//`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid={key}`
let weatherData, userInput; 

const $title = $("#title");
const $year =  $("#year");
const $temperatureValue = $("#temperature-value");
const $input = $("input[type='text']");

$("form").on("submit", handleGetData);

function handleGetData(event) {
    event.preventDefault();

    
    userInput = $input.val();
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}&units=imperial`
    }).then(
        (data) => {
            weatherData = data;
            console.log("DATA", data);
            render();
        },
        (error) => {
            console.log("ERROR", error);
        }
    ); 
}


function render() {
    $temperatureValue.html(weatherData.main.temp);
    
}
