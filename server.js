// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.enable('trust proxy')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  var ip = req.ip;
  var language = req.acceptsLanguages()[0];
  var ua = req.headers['user-agent'];
  var software = ua.substring(ua.indexOf('(') + 1, ua.indexOf(')'));
  res.send({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
