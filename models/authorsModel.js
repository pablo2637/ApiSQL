const { pool } = require('../configs/pool');
const queries = require('./queries');


//Acceder a los autores por email
const getAuthors = async (email) => {

    let client, rslt, data;

    try {

        client = await pool.connect();

        if (email)
            data = await client.query(queries.getAuthorByEmail, [email]);

        else
            data = await client.query(queries.getAllAuthors);

        rslt = data.rows;

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    if (data.rows == 0)
        return {
            ok: true,
            msg: 'No se encontraron registros'
        };

    return rslt;

};


//Crear una entrada
const createAuthor = async ({ name, surname, email, image }) => {

    let client, rslt;

    try {

        client = await pool.connect();

        rslt = await client.query(queries.createAuthor, [name, surname, email, image]);

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    return rslt.rows[0];

};


//Actualizar una entrada
const updateAuthor = async ({ name, surname, email, image }, id) => {

    let client, rslt;

    try {

        client = await pool.connect();

        rslt = await client.query(queries.updateAuthor, [name, surname, email, image, id]);

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    if (rslt.rowCount == 0)
        return {
            ok: false,
            response: {
                msg: 'Fallo al intentar modificar el registro.',
                id,
                rslt
            }
        };

    return {
        ok: true,
        response: rslt.rows[0]
    };

};


//Eliminar una entrada
const deleteAuthor = async (id) => {

    let client, rslt;

    try {

        client = await pool.connect();

        rslt = await client.query(queries.deleteAuthor, [id]);

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    if (rslt.rowCount == 0)
        return {
            ok: false,
            response: {
                msg: 'Fallo al intentar eliminar  el registro.',
                id,
                rslt
            }
        };

    return {
        ok: true,
        msg: `Registros eliminados: ${rslt.rowCount}`
    };

};


module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}