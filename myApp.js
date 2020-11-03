var express = require('express');
var app = express();

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

app.get("/json", function(req, res) {
if(process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": "HELLO JSON"});
    } 
        res.json({"message": "Hello json"});
});

 module.exports = app;
