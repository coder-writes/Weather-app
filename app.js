const appid = "03dbdd141a0e2c401e888eee3c3ca161";
const appUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-input-box");
const searchbtn = document.querySelector(".search-btn");

// console.log(searchBox);

async function fetchWeather(city) {
    const response = await fetch(appUrl + city + `&appid=${appid}`);
    if(response.status==404){
        alert("Wrong City name. Please check the City name again.");
    }else{

        var data = await response.json();
        
        
        var temperature = Math.round(data.main.temp) 
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".c").innerHTML = temperature + "°C";
        document.querySelector(".div").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelectorAll(".div")[1].innerHTML = Math.round(data.wind.speed) + " m/s";
        console.log(data);
        
        
        const element = document.querySelector('.icon-sun-1');
        if(temperature < 10){
            element.setAttribute('src', './images/snow.png');
        }
        else if(temperature < 25){
        element.setAttribute('src', './images/cloud.png');
    }
    else {
        element.setAttribute('src', './images/sun.png');
    }
    
    document.querySelector(".middle").style.display = "flex";
    document.querySelector(".info-footer").style.display = "flex";
}
}

searchbtn.addEventListener("click",()=>{
    fetchWeather(searchBox.value);
})
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchWeather(searchBox.value);
    }
});
