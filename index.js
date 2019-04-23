var express = require('express');
var app = express();

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
