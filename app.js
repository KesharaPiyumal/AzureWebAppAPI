const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('./config/database');
// const assetsDir = require('path').join(__dirname, '/assets');


// Test mySql connection
// db.authenticate()
//     .then(() => console.log('MySQL DB Connected..!'))
//     .catch(err => console.log('Error: ' + err));


const app = express();
const corsOptions = {
    origin: 'http://localhost:4227',
    optionsSuccessStatus: 200
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// access to assets folder
// app.use(express.static(assetsDir));

// routes for the all requests
// app.use('/users', require('./api/routes/usersR'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log('Server started on PORT: ' + PORT));
