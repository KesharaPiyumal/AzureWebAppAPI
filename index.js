const express = require('express');
const app = express();
const db = require('./config/database');
const http = require('http');

db.authenticate()
  .then(() => console.log('MySQL DB Connected..!'))
  .catch(err => console.log('Error: ' + err));

// routes for the all requests
app.use('/persons', require('./routes/personR'));

const port = process.env.PORT || 1337;
app.listen(port, console.log('Server started on PORT: '  + port));

console.log("Server running at http://localhost:%d", port);
