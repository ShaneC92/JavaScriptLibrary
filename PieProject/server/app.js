//env file
require('dotenv').config();

//EXPRESS
const express = require('express');
const app = express();

//CONTROLLERS
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');

//DATABASE
const sequelize = require('./db');
sequelize.sync(); //to drop tables ---> {force: true} inside sync() Allows for refreshing tables in case of typos
app.use(express.json()); //Needed for PUT and POST requests
app.use(require('./middleware/headers'));

//Listen
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));


//ROUTES
app.use('/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/pies', pies);


//PUBLIC FILE --- in case needed to work on during a live server. Shows an error screen
// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));

