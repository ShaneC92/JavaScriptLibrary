var express = require('express'); 
var router = express.Router(); 
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');


router.post('/one', function(req, res) {
    res.send('Test 1 went through!')
});


router.post('/two', function(req, res) {
    let testData = "Test data for endpoint two";

    TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send("Test two went through!")
        })
});

router.post('/three', function(req, res) {
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
    res.send("Test three went through!")
    console.log("Test three went through")
});

router.post('/four', function(req, res){
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message() {
                res.send("Test 4 went through!");
            }
        );
});

router.post('/five', function(req, res){
    var testData = req.body.testdata.item;

    TestModel 
        .create({
            testdata: testData
        })
        .then(
            function message(data) {
                res.send(data);
            }
        );
});

router.post('/six', function(req, res){
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata) {
                res.json({
                    testdata: testdata
                })
            }
        );
});

router.post('/seven', function(req, res) {
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSucess(testdata){
                res.json({
                    testdata: testdata
                });
            },
            function createError(err){
                res.send(500, err.message);
            }
        );
});

router.get('/helloclient', function(req, res){
    res.send('This is a message from the server to the client.')
})


router.get('/one', function(req, res){
    TestModel
        .findAll({
            attributes: ['id', 'testdata']
        })
        .then(
            function findAllSuccess(data) {
                console.log('Controller data:', data);
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

// router.get('/', function (req, res) {
     
//     res.send("Hey!!! This is a test route!");
// });

// module.exports = router;

// //Adding /test/about section
// router.get('/about', function (req, res) {
//     res.send("This is an about route");
// });

// module.exports = router;

// //Passing in an object
// router.get('/contact', function(req, res) {
//     res.send({user: "Kenn", email: "kenn@beastmode.come"});
// });

// //Pass in an Array
// router.get('/projects', function(req, res){
//     res.send(['Project 1', 'Project 2']);
// });

// //Pass in an Array of Objects
// router.get('/mycontacts', function(req, res) {
//     res.send([
//         {user: "quincy", email: "kenn@beastmode.com"},
//         {user: "aaron", email: "aaron@beastmode.com"},
//         {user: "quincy", email: "quincy@beastmode.com"},
//         {user: "tom", email: "tom@beastmode.com"}
//     ]);
// });

module.exports = router;