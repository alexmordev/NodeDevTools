const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/auth', router)
}

module.exports = routerApi;
