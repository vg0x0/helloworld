const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM Cloud!");
});
 
module.exports.app = app;
