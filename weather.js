

        const apikey="b6fa740e7358ae6f904d56ee946692dc";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const weathericon=document.querySelector(".weathericon")




        async function checkweather(city) {
            const res=await fetch(apiurl+city+`&appid=${apikey}`);
            var data=await res.json();
            console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"℃";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
            if(data.weather[0].main == "Clouds"){
                weathericon.src= "clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weathericon.src="clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weathericon.src="rain.png";
            }
            else if(data.weather[0].main == "Mist"){
                weathericon.src="mist.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weathericon.src="drizzle.png";
            }
        }
        checkweather();
        searchBtn.addEventListener("click",()=>{
             checkweather(searchBox.value);
        })
    
