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
  if(msg.validate(req.body)) {
    console.log(req.body);
    msg.create(req.body.author, req.body.content);
    return res.send({response: 'OK'});
  } else {
    console.log('Invalid object');
    console.log(req.body);
    return res.send({response: 'Invalid POST data object'});
  }
});

app.get('/api/messages/:messageId', (req, res) => {
  return res.send(msg.getById(req.params.messageId));
});


app.listen(port, () => console.log(`Listening on port ${port}`));
