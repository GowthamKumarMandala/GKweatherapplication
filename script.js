const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0b83d74d53msh4dea3c750533e01p1ba564jsn0e098f1dc596",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city)=>{
	cityName.innerHTML = city
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  	.then(response => response.json())
  	.then((response) => {
    console.log(response);
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML 	= response.temp;
    temp2.innerHTML 	= response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getweather(city.value)
})
getweather("vizianagaram")

const getweather1 = (city)=>{
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  	.then(response => response.json())
  	.then((response) => {
    console.log(response);
    document.querySelector("#cp1").innerHTML = response.cloud_pct;
    document.querySelector("#tp1").innerHTML 	= response.temp;
    document.querySelector("#fl1").innerHTML = response.feels_like;
    document.querySelector("#h1").innerHTML = response.humidity;
    document.querySelector("#mnt1").innerHTML = response.min_temp;
    document.querySelector("#mxt1").innerHTML = response.max_temp;
    document.querySelector("#ws1").innerHTML = response.wind_speed;
    document.querySelector("#wd1").innerHTML = response.wind_degrees;
    document.querySelector("#sr1").innerHTML = response.sunrise;
    document.querySelector("#ss1").innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getweather1("delhi")

const getweather2 = (city)=>{
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  	.then(response => response.json())
  	.then((response) => {
    console.log(response);
    document.querySelector("#cp2").innerHTML = response.cloud_pct;
    document.querySelector("#tp2").innerHTML 	= response.temp;
    document.querySelector("#fl2").innerHTML = response.feels_like;
    document.querySelector("#h2").innerHTML = response.humidity;
    document.querySelector("#mnt2").innerHTML = response.min_temp;
    document.querySelector("#mxt2").innerHTML = response.max_temp;
    document.querySelector("#ws2").innerHTML = response.wind_speed;
    document.querySelector("#wd2").innerHTML = response.wind_degrees;
    document.querySelector("#sr2").innerHTML = response.sunrise;
    document.querySelector("#ss2").innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getweather2("bangalore")

const getweather3 = (city)=>{
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  	.then(response => response.json())
  	.then((response) => {
    console.log(response);
    document.querySelector("#cp3").innerHTML = response.cloud_pct;
    document.querySelector("#tp3").innerHTML 	= response.temp;
    document.querySelector("#fl3").innerHTML = response.feels_like;
    document.querySelector("#h3").innerHTML = response.humidity;
    document.querySelector("#mnt3").innerHTML = response.min_temp;
    document.querySelector("#mxt3").innerHTML = response.max_temp;
    document.querySelector("#ws3").innerHTML = response.wind_speed;
    document.querySelector("#wd3").innerHTML = response.wind_degrees;
    document.querySelector("#sr3").innerHTML = response.sunrise;
    document.querySelector("#ss3").innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getweather3("Hyderabad")

const getweather4 = (city)=>{
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  	.then(response => response.json())
  	.then((response) => {
    console.log(response);
    document.querySelector("#cp4").innerHTML = response.cloud_pct;
    document.querySelector("#tp4").innerHTML 	= response.temp;
    document.querySelector("#fl4").innerHTML = response.feels_like;
    document.querySelector("#h4").innerHTML = response.humidity;
    document.querySelector("#mnt4").innerHTML = response.min_temp;
    document.querySelector("#mxt4").innerHTML = response.max_temp;
    document.querySelector("#ws4").innerHTML = response.wind_speed;
    document.querySelector("#wd4").innerHTML = response.wind_degrees;
    document.querySelector("#sr4").innerHTML = response.sunrise;
    document.querySelector("#ss4").innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getweather4("kolkata")

const getweather5 = (city)=>{
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  	.then(response => response.json())
  	.then((response) => {
    console.log(response);
    document.querySelector("#cp5").innerHTML = response.cloud_pct;
    document.querySelector("#tp5").innerHTML 	= response.temp;
    document.querySelector("#fl5").innerHTML = response.feels_like;
    document.querySelector("#h5").innerHTML = response.humidity;
    document.querySelector("#mnt5").innerHTML = response.min_temp;
    document.querySelector("#mxt5").innerHTML = response.max_temp;
    document.querySelector("#ws5").innerHTML = response.wind_speed;
    document.querySelector("#wd5").innerHTML = response.wind_degrees;
    document.querySelector("#sr5").innerHTML = response.sunrise;
    document.querySelector("#ss5").innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getweather5("vizianagaram")

const getweather6 = (city)=>{
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  	.then(response => response.json())
  	.then((response) => {
    console.log(response);
    document.querySelector("#cp6").innerHTML = response.cloud_pct;
    document.querySelector("#tp6").innerHTML 	= response.temp;
    document.querySelector("#fl6").innerHTML = response.feels_like;
    document.querySelector("#h6").innerHTML = response.humidity;
    document.querySelector("#mnt6").innerHTML = response.min_temp;
    document.querySelector("#mxt6").innerHTML = response.max_temp;
    document.querySelector("#ws6").innerHTML = response.wind_speed;
    document.querySelector("#wd6").innerHTML = response.wind_degrees;
    document.querySelector("#sr6").innerHTML = response.sunrise;
    document.querySelector("#ss6").innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getweather6("Visakhapatnam")

let abt = document.querySelector("#abt")
abt.addEventListener("click",function(e){
  alert("This app is created by the gowtham and by using the RAPID API")
})
