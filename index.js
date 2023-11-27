require('dotenv').config();
const express = require('express');
const app = express();
const cor_S = require('cors');
app.use(cor_S());
const port = process.env.PORT || 22000;
const body_parser = require('body-parser');
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.listen(port, () => {
  console.log(`The server is running @ ${port}`)
})