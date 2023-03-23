const {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor } = require('../models/authorsModel');

const getAuthorsC = async ({ body }, res) => {
    try {
        const data = await getAuthors(body.email);

        if (!data.ok) res.status(500).json(data);
        else res.status(200).json(data);

    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error getAuthorsC',
            body,
            error: e
        });
    }
}

const createAuthorC = async ({ body }, res) => {
    try {
        const response = await createAuthor(body);

        res.status(200).json({
            ok: true,
            response
        });
    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error createAuthorC',
            body,
            error: e
        });
    }
}


const updateAuthorC = async ({ body, params }, res) => {
    try {
        const response = await updateAuthor(body, params.id);

        if (!response.ok) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error updateAuthorC',
            body,
            params,
            error: e
        });
    }
}

const deleteAuthorC = async ({ params }, res) => {
    try {
        const response = await deleteAuthor(params.id);

        if (!response.ok) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error deleteAuthorC',
            params,
            error: e
        });
    }
}

module.exports = {
    getAuthorsC,
    createAuthorC,
    updateAuthorC,
    deleteAuthorC
}