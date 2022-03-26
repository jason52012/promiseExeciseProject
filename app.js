const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");
const fetch = require("node-fetch");
// import fetch from "node-fetch";
let myKey = "4b07ae7afac4ab6934cb1c0ecc551af8";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// K to cel
function ktoC(k) {
  return k - 273.15;
}

// ** ReferenceError: fetch is not defined
// app.get("/:city", async (req, res) => {
//   let { city } = req.params;
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
//   let data = await fetch(url); // fetch api doesn't exist in node.js
//   let pData = data.json();
//   console.log(pData);
//   res.render("weather.ejs", { city: city });
// });
// ** ReferenceError: fetch is not defined

//**  get request made by node.js
// app.get("/:city", (req, res) => {
//   let { city } = req.params;
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

//   https
//     .get(url, (response) => {
//       console.log("statusCode:", response.statusCode);
//       console.log("headers:", response.headers);

//       response.on("data", (d) => {
//         let djs = JSON.parse(d); // JSON.parse(d); is sync function
//         let temp = ktoC(djs.main.temp);
//         djs.main.temp = temp.toFixed(2);
//         res.render("weather.ejs", { djs: djs });
//       });
//     })
//     .on("error", (e) => {
//       console.log(e);
//     });
// });
//**  get request made by node.js

//**  get request node-fetch
app.get("/:city", async (req, res) => {
  let { city } = req.params;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

  let d = await fetch(url);
  let djs = await d.json();
  let temp = ktoC(djs.main.temp);
  djs.main.temp = temp.toFixed(2);
  res.render("weather.ejs", { djs: djs });
  //   fetch(url)
  //     .then((d) => d.json())
  //     .then((djs) => {
  //       let temp = ktoC(djs.main.temp);
  //       djs.main.temp = temp.toFixed(2);
  //       res.render("weather.ejs", { djs: djs });
  //     });
});
//**  get request node-fetch

app.listen(3000, () => {
  console.log("running in server 3000");
});
