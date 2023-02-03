const express = require('express');
const app = express();

app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 + num2;
  res.send(`The result of ${num1} + ${num2} is ${result}.`);
});

app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 - num2;
  res.send(`The result of ${num1} - ${num2} is ${result}.`);
});

app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 * num2;
  res.send(`The result of ${num1} * ${num2} is ${result}.`);
});

app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 / num2;
  res.send(`The result of ${num1} / ${num2} is ${result}.`);

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}.`);
});
