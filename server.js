'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var result = {
        ipaddress: req.ip.replace('::ffff:', ''),
        browser: req.headers['user-agent'].match(/\(.*?\)/)[0].replace(/\(|\)/g, '').replace(/_/g, '.'),
        language: req.headers['accept-language'].match(/^[^,]*/)[0]
    };
    res.send(JSON.stringify(result));
});


app.listen(process.env.PORT || 8080);