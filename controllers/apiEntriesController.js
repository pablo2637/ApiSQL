const {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry } = require('../models/entriesModel');


//Trae todas las entradas o si se especifica, las que coinciden con el email
const getEntriesC = async ({ body }, res) => {

    try {

        const data = await getEntries(body.email);

        if (!data.ok)
            res.status(500).json(data);

        else
            res.status(200).json(data);

    } catch (e) {

        res.status(500).json({
            ok: false,
            msg: 'Error getEntriesC',
            body,
            error: e
        });

    };
};


//Crea una entrada
const createEntryC = async ({ body }, res) => {

    try {

        const response = await createEntry(body);

        res.status(200).json({
            ok: true,
            response
        });

    } catch (e) {

        res.status(500).json({
            ok: false,
            msg: 'Error createEntryC',
            body,
            error: e
        });

    };
};


//Modifica una entrada
const updateEntryC = async ({ body, params }, res) => {

    try {

        const response = await updateEntry(body, params.id);

        if (!response.ok)
            res.status(500).json(response);

        else
            res.status(200).json(response);

    } catch (e) {

        res.status(500).json({
            ok: false,
            msg: 'Error updateEntryC',
            body,
            params,
            error: e
        });

    };
};


//Elimina la entrada
const deleteEntryC = async ({ params }, res) => {

    try {

        const response = await deleteEntry(params.id)

        if (!response.ok)
            res.status(500).json(response);

        else
            res.status(200).json(response);

    } catch (e) {

        res.status(500).json({
            ok: false,
            msg: 'Error deleteEntryC',
            params,
            error: e
        });

    };
};


module.exports = {
    getEntriesC,
    createEntryC,
    updateEntryC,
    deleteEntryC
}