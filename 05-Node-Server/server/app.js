var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');
//3         //4
app.listen(3001, function(){
    console.log('Hey Man!!')//5
});

app.use('/test',test)
app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

// app.use('/test/about', function(req, res){
//     res.send("this is an about route");
// });
