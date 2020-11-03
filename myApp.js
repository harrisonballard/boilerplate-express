var express = require('express');
var app = express();

app.get('/json', function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
    })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/name', function(req, res) {
    // Handle the data in the request
    var firstName = req.body.first;
    var lastName = req.body.last;
    res.send({"name": firstName + " " + lastName})
});

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

app.post("/name", function(req, res){
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.send({"name": firstName + " " + lastName});
  });
  

 module.exports = app;
