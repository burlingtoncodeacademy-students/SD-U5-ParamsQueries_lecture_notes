const express = require('express');
const app = express();
const PORT = 4000;
//* IMPORTS

//* MIDDLEWARE
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded());

//* CONTROLLERS


//* RUNNING
app.listen(PORT, () => console.log(`Running: ${PORT}`))
