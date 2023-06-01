const express = require('express');

const app = new express();

//Adding a middleware to set the path for all static pages
app.use(express.static('pages'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
