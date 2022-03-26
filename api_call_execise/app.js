// ** use js api to call outer api

// async function getJoke() {
//   let data = await fetch("https://v2.jokeapi.dev/joke/Any");
//   let parsedDate = await data.json(); // need to transform json
//   console.log(parsedDate);
// }

// getJoke();

// ** use js api to call outer api with authorization key
let myKey = "4b07ae7afac4ab6934cb1c0ecc551af8";
let city = "Taipei ";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function getWeather() {
  let d = await fetch(url);
  let dj = await d.json();
  console.log(dj);
}

getWeather();
