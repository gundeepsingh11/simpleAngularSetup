var express = require('express')
var path = require('path')
var bodyParser = require('body-parser'); 

var app = express();

// create application/json parser 
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies 
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})
 
// POST /api/users gets JSON bodies 
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body 
})

app.use(express.static(__dirname + '/'));



app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(9099,function(){ console.log("server listening on 9099")});



