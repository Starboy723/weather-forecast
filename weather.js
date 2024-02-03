let userinput=document.getElementById("search");
let body=document.querySelector("body");
let img=document.getElementById("img");
let date=document.getElementById("date");
let number=document.getElementById("number");
let div=document.getElementById("weatherinfo");
let valid=document.getElementById("valid");
let clouds=document.getElementById("clouds");
let div1=document.getElementById("temperature");
let div2=document.getElementById("inside");
let humidity=document.getElementById("humidity");
let visibility=document.getElementById("visibility");
let wind=document.getElementById("wind");;
let icon=document.getElementById("icon");
let searchicon=document.getElementById("searchicon");
const accesskey="";//your unsplash access key
let date2=new Date();
date.textContent=date2.toDateString();
async function getweatherinfo(){
    try{
    let city=document.getElementById("city1");
    let url=`https://api.unsplash.com/search/photos?page=${Math.floor(Math.random()*1)}&query=${userinput.value} tourist places&client_id=${accesskey}`;
    let responce=await fetch(url);
    let weatherresponce=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput.value}&units=metric&appid=`);//your weather api id
    let weatherdata=await weatherresponce.json();
    console.log(weatherdata);
    let data=await responce.json();
    console.log(data);
    if(weatherresponce.ok){
        div.style.display="flex";
        div1.style.display="flex";
        div2.style.display="flex";
    city.textContent=userinput.value.toUpperCase();
    userinput.value='';
    let imgs=data.results[Math.floor(Math.random()*data.results.length)];
   body.style.backgroundImage=`url(${imgs.urls.regular})`;
     console.log(weatherdata);
     number.textContent=weatherdata.main.temp+"°";
     valid.style.display="none";
     clouds.textContent=weatherdata.weather[0].description;
     wind.textContent=`${Math.trunc(weatherdata.wind.speed)} km/h`;
     humidity.textContent=`${weatherdata.main.humidity}%`;
     visibility.textContent=`${weatherdata.visibility/1000} km`;
      icon.src=`images/${getsky(weatherdata.weather[0].main)}`; 
    }
 else{
    body.style.backgroundImage="none";
    valid.style.display="block";
    div.style.display="none";
    }
}
    catch(error){
        console.log(error);

    }  
}
function getsky(information){
    let obj={
      Clear:"clear.png",
      Clouds:"clouds.png",
      Rain:"rain",
      Thunderstorm:"thunderstorm.png",
      Drizzle:"drizzle.png",
      Snow:"snow.png",
      Fog:"fog.png",
      Mist:"mist.png",
      Haze:"haze.png",
      Smoke:"smoke.png",
    }
    return obj[information];
}
searchicon.addEventListener("click",(e)=>{
    div2.style.display="none";
    div1.style.display="none";
    div.style.display="none";
    getweatherinfo();

});
