//jshint esversion:7
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
  //res.send('<h1>BMI Calculator</h1>');
});

app.post('/', (req, res) => {

  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = Math.round(weight / (height ** 2 ) * 10) / 10;
  res.send(`Your BMI index is ${bmi}`);
});

app.listen('3000', () => {
  console.log(`Port 3000 is being listened now`);
});