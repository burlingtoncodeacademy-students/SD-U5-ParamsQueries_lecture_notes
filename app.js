const express = require('express');
const app = express();
const PORT = 4000;
//* IMPORTS

//* MIDDLEWARE
app.use(express.json());

//* CONTROLLERS


//* RUNNING
app.listen(PORT, () => console.log(`Running: ${PORT}`))
