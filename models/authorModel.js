const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'admin'
})

//Acceder a los autores por email
const getAuthByEmail = async () => {
    let client, rslt;
    try {
        client=await pool.connect();
        const data =await client.query(``)
    } catch (e) {

    } finally {

    }

    return rslt
}


//Traer todos los autores
//Crear autor
//Eliminar autor
//Actualziar autor