const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3000, () => {
    console.log('listening on port ', server.address().port);
})



