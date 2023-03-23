const { Pool } = require('pg')

const queries = require('./queries')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'admin'
})

//Accede a todas las entradas o si se especifica, las que coincidan con el email
const getEntries = async (email) => {
    let client, rslt, data;
    try {
        client = await pool.connect();
        if (email) data = await client.query(queries.getEntriesByEmail, [email]);
        else data = await client.query(queries.getAllEntries);

        rslt = data.rows;
    } catch (e) {
        throw error
    } finally {
        client.release();
    }
    return rslt
}

//Crear una entrada
const createEntry = async ({ title, content, category, email }) => {
    let client, rslt;
    try {
        client = await pool.connect();
        rslt = await client.query(queries.createEntry, [title, content, email, category]);
    } catch (e) {
        throw e
    } finally {
        client.release();
    }
    return `Registros insertados: ${rslt.rowCount}`;
}

//Actualizar una entrada
const updateEntry = async ({ title, content, category }, id) => {
    let client, rslt;
    console.log(title, content, category, id)
    try {
        client = await pool.connect();
        rslt = await client.query(queries.updateEntry, [title, content, category, id]);        
    } catch (e) {
        throw e
    } finally {
        client.release();
    }
    return `Registros modificados: ${rslt.rowCount}`;
}

//Eliminar una entrada
const deleteEntry = async (id) => {
    let client, rslt;
    try {
        client = await pool.connect();
        rslt = await client.query(queries.deleteEntry, [id]);
    } catch (e) {
        throw e
    } finally {
        client.release();
    }
    return `Registros eliminados: ${rslt.rowCount}`;
}


module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
}