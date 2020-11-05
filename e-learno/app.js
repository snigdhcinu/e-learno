const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT||8000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine','ejs')


// Root Route
app.get('/',function(req,res){
	res.render('landingPage');
})

app.listen(port,function(){
	console.log(`Server online on port no. ${port}`);
	console.log(`Access the website on localhost:${port}`)
})