const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api/entries', require('./routers/apiEntriesRoute'));
app.use('/api/authors', require('./routers/apiAuthorsRoute'));


app.listen(port, () => console.log(`Server listening on port ${port}...`));