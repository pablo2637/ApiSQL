const { Pool } = require('pg')


const pool = new Pool({
    host: POSTGRESQL_HOST,
    user: POSTGRESQL_USER,
    database: POSTGRESQL_DATABASE,
    password: POSTGRESQL_PASSWORD
});


module.exports = { pool }