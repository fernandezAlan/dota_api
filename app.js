const mongoose = require("mongoose")
require('./models/heroModels')
const hero = mongoose.model("hero")
const express = require('express');
const bodyParse = require("body-parser");
const app = express()
const http = require("http")
const morgan = require("morgan")
const router = require('./routes/index')
const port = 3000
const server = http.createServer(app)
const heroesEsp = require('./heroData/esp/index')
app.use(morgan('dev'))
app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json());
app.use('/',router)




mongoose.connect("mongodb://localhost/dotaData", function (err, res) {
  //hero.insertMany(heroesEsp).then(()=>{
  //  console.log(' insert '+ heroesEsp.length + ' heroes')
  //})
  if (err) {
    console.log("ERROR: connecting to Database. " + err);
  }
  app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
  });
});