var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    port = process.argv[3] || 9000,
    config = require('./config.js'),
    path = config[process.argv[2]]['path'],
    request = require('request');

if (!path) {
    console.log('You have noot specified an application. \n' +
                'Usage: node server.js <appName> <port number [optional]>');
    process.exit();
}

app.use(express.static(path));

// app.use(function(req, res, next) {
//     res.end();
// });

http.listen(port, function() {
    console.log('Serving ' + path + ' on port: ' + port);
});
