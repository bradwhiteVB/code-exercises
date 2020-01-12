const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');

const mainRouter = require('./src/routes/main');
app.use('/', mainRouter);

module.exports = app.listen(port, () => {
  console.log(`Reckon Test 2 listening on port ${port}!`);
  console.log('Use http://127.0.0.1:'+port+'/ [GET]');
});
