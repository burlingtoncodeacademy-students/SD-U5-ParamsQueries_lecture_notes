const express = require('express');
const app = express();
const PORT = 4000;
//* IMPORTS
const routeController = require('./controllers/routes.controller');

//* MIDDLEWARE
app.use(express.json());

//* CONTROLLERS
app.use('/routes', routeController);

//* RUNNING
app.listen(PORT, () => console.log(`Running: ${PORT}`))
