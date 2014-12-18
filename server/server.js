var express = require('express');
var proxy = require('express-http-proxy');

var root = __dirname + '/../client';
var port = process.env.port || 3000;

var app = express();

app.use('/client', express.static(root));

app.get('/xapi', function(req, res) {
    res.send('Hello API');
});

var PROXY_PATH = '/api';
var TARGET_PATH = '/--/data';
app.all(PROXY_PATH + '/*', proxy('http://www.castrosf.org', {
    forwardPath: function(req, res) {
        var path = require('url').parse(req.url).path;
        return path.replace(PROXY_PATH, TARGET_PATH);
    }
}));

console.log('serving ' + root);
app.listen(port);
