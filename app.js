//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

//const flash = require('connect-flash');

var app = express();

//portNo
const portNo = 3000;

const route = require('./routes/route');


//adding middleware -cors

app.use(cors());

//body-parser

app.use(bodyparser.json());

//routes

app.use('/api',route);

//static files

app.use(express.static(path.join(__dirname,'public')));


// connect to mongodb

mongoose.connect('mongodb://localhost:27017/employeelist');

//on successfull connection

mongoose.connection.on('connected',()=>{
	console.log('connected successfully');
});


mongoose.connection.on('error',(err)=>{
	if(err){
		console.log('error in connection'+ '' + err);
	}
});


app.get('/',(req,res)=>{
	res.send('foobar');
});

//testing

app.listen(portNo,()=>{
	console.log('browser started at port number' + portNo);
})