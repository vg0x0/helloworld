const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from ICICI Prudential Life Insurance!");
});
 
module.exports.app = app;
