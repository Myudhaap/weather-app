const btnSearch = document.querySelector('.search-btn')
const inputEl = document.querySelector('.search-input')
const key = 'bf58f7caeafd0f88fa354e4e5f2af01d';

const result = document.getElementById('result')


function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    generateUi(data)
  })
  .catch((error)=>{
    if(inputEl.value === ''){
      return result.innerHTML = '<h3>Input name of city!</h3>'
    }
    return result.innerHTML = '<h3>City has not found!</h3>'
  })
}

btnSearch.addEventListener('click', () => {
  getWeatherData(inputEl.value)
})

function generateUi(data){
  result.innerHTML = `
  <h2 class="result-title">${data.name}</h2>
  <p class="result-weather">${data.weather[0].main}</p>
  <p class="result-weather-title">${data.weather[0].description}</p>
  <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}" alt="Image Weather" class="result-img">
  <p class="result-celcius">${data.main.temp}<sup>o</sup></p>
  <div class="result-derajat">
    <div>
      <p>min</p>
      <p>${data.main.temp_min}<sup>o</sup></p>
    </div>
    <div>
      <p>max</p>
      <p>${data.main.temp_max}<sup>o</sup></p>
    </div>
  </div>
  `;
}