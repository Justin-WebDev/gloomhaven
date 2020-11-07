const express = require('express');
const app = express();
const parser = require('body-parser');
const { getItems } = require('./axiosRequests');
const path = require('path');
//const axios = require('axios');

app.use(parser.json());
//app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/items', (req, res) => {
  getItems()
    .then(({ data }) => res.send(data))
    .catch(err => res.send(err));
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});