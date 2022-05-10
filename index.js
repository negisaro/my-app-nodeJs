const express = require('express');
const routerApi = require('./routes/index');
const path = require('path');

const app = express();
const port = 3500;

app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('Soy el Puerto: ' + port);
});
