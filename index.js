var express = require('express');
var app = express();

app.use('/about', (req, res) => {
  res.send('This is the about page.');
});

app.use('/login', (req, res) => {
  res.send('This is the login page.');
});

app.use( /*default*/ (req, res) => {
  res.status(404).send('Not found!');
});

app.use('/', (req, res) => {
  var name = req.query.name; // e.g. /?name=devesh
  res.status(200).type('html');
  if (name) {
    res.write('Hi, ' + name + " it's nice to see you.");
  } else {
    res.write('Welcome, guest!');
  }
  res.end();
});

var port = process.env.PORT;
var IP = process.env.IP;
app.listen(port, IP, () => {
  console.log('Listening on port '+process.env.PORT);
});
