var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    root = (typeof process.argv[2] === 'string') && process.argv[2],
    port = process.argv[3] || 9000;

if (!root) {
    console.log('You have noot specified a root path. \n' +
                'Usage: node server.js <path to root> <port number [optional]>');
    process.exit();
}
app.use(express.static(root));

http.listen(port, function() {
    console.log('Serving ' + root + ' on port: ' + port);
});
