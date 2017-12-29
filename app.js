const storage = new Storage();
const weatherLocation = storage.getLocation();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city, state);
  storage.setLocation(city, state);
  getWeather();
  // Close modal with jQuery
  $('#locModal').modal('hide');

});

function getWeather() {
  weather.getWeather()
    .then(results => ui.paint(results))
    .catch(e => console.log(e));
}