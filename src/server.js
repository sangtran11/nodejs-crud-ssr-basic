const express = require('express');
import configViewEngine from './configs/viewEngine';
require('dotenv').config()

const app = express();
const port  = process.env.PORT || 3000;

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/about', (req, res) => {
  res.send('<h1>I\'m Hani Kawaiiiii</h1>')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})