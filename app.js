/*
/*	(apps.js):
/*	    "The entry point for our express app"
/*
/-------------------------------------------------------8<----------------------------------------------------*/


// * import necessary modules
var express = require('express');
var bp = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: "application/vnd.api+json "}));


var tables = [

];

var jsonParser = bp.json();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});
app.get('/tables', (req, res) => {
    res.sendFile(__dirname + '/tables.html');
});
app.get('/reserve', (req, res) => {
    res.sendFile(__dirname + '/reserve.html');
});
app.get('/list', (req, res) => {
    res.send(JSON.stringify(tables));    
});
app.get('/remaining', (req, res) => {

});
app.post('/add', jsonParser, (req, res) => {
    tables.push({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });
});
    res.sendFile(__dirname + '/tables.html');
});
app.post('/clear', jsonParser, (req,res) => {
    tables = [];
});

app.listen(PORT, function() {
    console.log('App listening on port: '+ PORT);
});