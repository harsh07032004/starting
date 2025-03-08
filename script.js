const api_key="507401d1323f3097d6fb114aec88dc19";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric";
 let city="ratu";
const search_box=document.querySelector(".search input");
const search_botton=document.querySelector(".search button");
search_botton.addEventListener("click", () => {
    city = search_box.value;
    checkwheater();
});
search_box.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        city = search_box.value;
        checkwheater();
    }
});
async function checkwheater()
{
    const respones =await fetch(api_url+`&appid=${api_key}&q=${city}`)
    var data =await respones.json();
    console.log(data);
    change_wheather_image(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=` ${Math.round(data.main.temp)} °C`;
    document.querySelector(".humidity").innerHTML=`${data.main.humidity} %`;
    document.querySelector(".wind2").innerHTML=`${data.wind.speed} kmph`;
} 
function change_wheather_image(data) {
    const image = document.querySelector(".weather2 img");
    const content_image=document.querySelector(".content");
    if(data.weather[0].main=="Rainy")
        {
            image.src = "https://static.vecteezy.com/system/resources/previews/020/235/675/large_2x/rainy-weather-icon-isolated-on-black-rainy-weather-symbol-suitable-for-graphic-design-and-websites-on-a-white-background-icon-free-vector.jpg";
            content_image.style.backgroundImage = "url('https://i.scdn.co/image/ab67616d0000b27391027e42977d144b3db3f705')";
        }
   else if(data.weather[0].main=="Clouds")
    {
        image.src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0";
        content_image.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.kd-2P4RTsoXKUjVAgqtT1QHaNK?rs=1&pid=ImgDetMain')";
       
    }
   else if(data.weather[0].main=="Clear")
        {
            image.src= "https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0";
            content_image.style.backgroundImage = "url('https://images3.alphacoders.com/119/thumb-1920-1195439.jpg')";
        }

}



