var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello Tarun Sir, You are watching this at:' + dt.myDateTime() + 'hope you are good')
  res.write(' \n Any other idea ?')
  res.end();
}).listen(8080);