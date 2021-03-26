const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = new express();
app.use(express.static('pages'))


app.listen(3333, () => {
  console.log(`Listening at http://localhost:3333`)
})