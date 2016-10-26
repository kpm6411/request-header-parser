const express = require('express');
const app = express();
var output = {"ipaddress": null, "language": null, "software": null}

app.get('/', function (req, res) {
  output.ipaddress = req.headers['x-forwarded-for'];
  output.language = req.headers['accept-language'].split(',')[0];
  output.software = req.headers['user-agent'].split(')')[0].split('(')[1];
  res.json(output);
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});