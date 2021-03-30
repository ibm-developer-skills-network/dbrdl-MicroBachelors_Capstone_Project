const express = require('express');

const app = new express();

//Adding a middleware to set the path for all static pages
app.use(express.static('pages'))

app.listen(8080, () => {
  console.log(`Listening at http://localhost:8080`)
})
