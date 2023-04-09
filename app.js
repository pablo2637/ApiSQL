const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));   // Parse application/x-www-form-urlencoded
app.use(express.json());                             // Parse application/json

app.use(cors());                                    //Cors

//Routes
app.use('/api/entries', require('./routers/apiEntriesRoute'));
app.use('/api/authors', require('./routers/apiAuthorsRoute'));

//404
app.use((req, res, next) => { res.status(404).send({ msg: `Ruta no encontrada: ${req.url}` }); });


//Listener
app.listen(port, () => console.log(`Server listening on port ${port}...`));