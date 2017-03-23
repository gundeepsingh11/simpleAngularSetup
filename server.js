var express = require('express')
var path = require('path')
var bodyParser = require('body-parser'); 

var app = express();

// create application/json parser 
var jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser 
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/api/login', validateRequest,function(req, res) {
	if((req.body.email === "demo@gmail.com")&&(req.body.password === "123")){

		res.send({status:200,message:"user succesfully loggedIn"});
	}else{
		res.send({status:401,message:"user credential is missing"});
	}
});

function validateRequest(req,res,next){
	if (req&&req.body) {
		next();
	}else{
		res.send({status:401,message:"Not a valid Request!"});
	}
}

// POST /login gets urlencoded bodies 
// app.post('/api/login', urlencodedParser, function (req, res) {
// 	console.log(res);
// 	if((req.body.email === "demo@gmail.com")&&(req.body.password === "123")){
// 		res.send({status:200,message:"user succesfully loggedIn"});
// 	}else{
// 		res.send({status:401,message:"user credential is missing"});
// 	}
//   // if (!req.body) 
//   // 	return res.sendStatus(400)
//   // res.send({status:200,message:"user succesfully loggedIn"})
// });
 
// POST /api/users gets JSON bodies 
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body 
});

app.use(express.static(__dirname + '/'));



app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(9099,function(){ console.log("server listening on 9099")});



