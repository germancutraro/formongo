const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes')

const port = config.port;

const app = express();

// Middlewares
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// view engine
app.set('view engine', 'ejs');

mongoose.connect(config.db, {useMongoClient: true}, (err, res) => console.log(err ? 'Unable to connect to the database!' : 'Connected!'));

app.get('/', routes.index);
app.get('/add', routes.add);
app.get('/contacts', routes.contacts);

app.post('/save', routes.save);

app.listen(port, err => console.log(err ? 'Unable to connect!' : `App running on port ${port}`));
