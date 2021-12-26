const app = require('express')();
const consign = require('consign');
const db = require('./config/db');

app.db = db;

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

const port = 3000;
app.listen(port, () => {
  console.log(`BackEnd is running at :${port}`);
});
