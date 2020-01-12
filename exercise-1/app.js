const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9999;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.set('view engine', 'pug');
app.set('views', './src/views');

const mainRouter = require('./src/routes/index');
app.use('/', mainRouter);


module.exports = app.listen(port, () => {
  console.log(`Reckon Test 1 listening on port ${port}!`);
});
