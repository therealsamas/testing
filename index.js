const express = require('express');
const port = 8080;

const app = express();

const cors = require('cors');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

const expSession = require('express-session');


app.use(express.urlencoded({extended:true}));


app.use(express.static('./views/js'));
app.use(express.static('./views/css'));
app.use(express.static('./views/images'));
app.set('view-engine','ejs');
app.set('views','./views/pages');

app.use('/',require('./routes'));

app.listen(port,function(err){
	if(err){
		console.error(err);
	}
	console.log('Up and running on port : ', port);
});
