const express = require('express');
const app = express();

const { config } = require('./config/index');
const articuleApi = require('./routes/data');

articuleApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
