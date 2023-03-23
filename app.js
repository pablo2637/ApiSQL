const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }))    // Parse application/x-www-form-urlencoded
app.use(express.json())                             // Parse application/json

app.use('/api/entries', require('./routers/apiEntriesRoute'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})