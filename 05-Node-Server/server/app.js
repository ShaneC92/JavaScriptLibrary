require('dotenv').config();

var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontrollers');
var sequelize = require('./db');

app.listen(3001, function(){
    console.log('Hey Man!!')
});

sequelize.sync();

app.use(express.json());
app.use(require('./middleware/header'));
app.use('/test',test)
app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

// app.use('/test/about', function(req, res){
//     res.send("this is an about route");
// });

app.use('/api/user', user);
//Could also write it this way.
//app.use('/api/user', require('./controllers/usercontrollers'))

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);