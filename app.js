const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from ICICI Prudential!");
});
 
module.exports.app = app;
