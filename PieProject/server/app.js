require('dotenv').config();

const express = require('express');
const app = express();

const pies = require('./controllers/piecontroller');

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

app.use('/pies', pies);

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));

