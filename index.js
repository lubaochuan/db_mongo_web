var express = require('express');
var app = express();

app.use('/', (req, res) => {
  res.send('Hello World!');
});

var port = process.env.PORT;
var IP = process.env.IP;
app.listen(port, IP, () => {
  console.log('Listening on port '+process.env.PORT);
});
