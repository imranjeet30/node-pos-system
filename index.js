const express = require('express');
const app = express();
const routes = require('./app/routes');
const PORT = 3000;
app.use(routes);

app.listen(PORT, () => {
    console.log(`Node server is running at ${PORT}`)
})