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


var tables = [];


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});
app.get('/tables', (req, res) => {
    res.sendFile(__dirname + '/tables.html');
});
app.get('/reserve', (req, res) => {
    res.sendFile(__dirname + '/reserve.html');
});




app.listen(PORT, function() {
    console.log('App listening on port: '+ PORT);
});