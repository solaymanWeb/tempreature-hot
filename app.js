
    const apiKey =`e0a49aebc34296c9991ddb430154bdeb`;
const loadData = ()=>{
    const cityName= document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayTempreser(data))
}

const displayTempreser = (data) =>{
    console.log(data)
}