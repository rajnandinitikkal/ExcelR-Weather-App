const city_ip = document.getElementById("city_ip");
const search_btn = document.getElementById("search_btn");
const api_key = '21f10744539dbbf1f149c533fbc67eb3'
city_ip.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        getCity(e);
    }
});
search_btn.addEventListener("click", getCity);

async function getCity(e) {
  e.preventDefault(); // prevent default feature || disables refreshing
  const city = document.getElementById("city_ip").value;
  console.log(city);
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
  const { main, wind, weather } = response.data;
  console.log(main.temp , wind.speed, weather[0].main);
  document.getElementById("temp").innerHTML = (main.temp - 273.15).toFixed(2);
  document.getElementById("wind").innerHTML = wind.speed;
  document.getElementById("weather").innerHTML = weather[0].main;
  document.getElementById("humi").innerHTML = main.humidity;
}

// tabnine