var express = require('express');
var app = express();

// set the view engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');


app.get('/home', function(req, res) {
    res.render('index', {date: new Date()});

});

app.get('/',function(req,res){
   res.send('Hello Express && Jade') ;
});

app.listen(3000);