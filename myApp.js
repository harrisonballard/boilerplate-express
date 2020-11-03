var express = require('express');
var app = express();

app.get('/json', function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
    })

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// })

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/views/index.html");
//     });

// app.use(express.static('public'))

// app.get("/json", function(req, res) {
//        res.json({"message": "Hello json"});
//   });

// app.get("/json", function(req, res) {
// if(process.env.MESSAGE_STYLE === 'uppercase') {
//     res.json({"message": "HELLO JSON"});
//     } 
//         res.json({"message": "Hello json"});
// });

app.get('/now', function(req, res, next) {
    req.time = new Date().toString()
next();
}, function(req, res) {
    res.send({time: req.time});
})

 module.exports = app;
