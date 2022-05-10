const express = require('express');

const usersRouter = require('./router.user');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/usuarios', usersRouter);
}

module.exports = routerApi;
