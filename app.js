
    const apiKey =`e0a49aebc34296c9991ddb430154bdeb`;
const loadData = ()=>{
    const cityName= document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayTempreser(data))
}

const innerText = (id, text)=>{
    document.getElementById(id).innerText= text;
   
  }
  
const displayTempreser = (data) =>{
    console.log(data.weather[0].icon)
    innerText('city', data.name)
    innerText('tempeatur',data.main.temp)
    innerText('condition-temp',data.weather[0].main )

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src',url);




    
}






// const displayTempreser = (data) =>{
    //     // console.log(data)
//     const cityName = document.getElementById('city-name').value;
//     const city = document.getElementById('city');
//     city.innerText=cityName;
//     const temp = document.getElementById('tempeatur')
//     temp.innerText= data.main.temp;
//     const conditionTemp = document.getElementById('condition-temp')
//     conditionTemp.innerText = data.weather[0].main;
    
    
// }