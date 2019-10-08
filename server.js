const express = require('express');
const bodyParser = require('body-parser');

const message = require('./api/message');

const app = express();
const port = process.env.port || 5000;

const msg = new message();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/messages', (req, res) => {
  return res.send(msg.getAll());
});

app.post('/api/messages', (req, res) => {
  console.log(req.body);
  msg.create(req.body.author, req.body.content);
  return res.send({response: 'OK'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
