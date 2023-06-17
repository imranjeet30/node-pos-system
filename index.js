const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const routes = require('./app/routes');
const PORT = 3000;

var jsonParser = bodyParser.json()
app.use(jsonParser);
app.use(routes);
// create application/x-www-form-urlencoded parser
app.listen(PORT, () => {
    console.log(`Node server is running at ${PORT}`)
})