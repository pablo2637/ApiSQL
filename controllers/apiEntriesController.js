const {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry } = require('../models/entriesModel')

const getEntriesC = async ({ query }, res) => {
    try {
        const data = await getEntries(query.email);
        res.status(200).json({
            ok: true,
            data
        })
    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error getEntriesC',
            query,
            e
        })
    }
}

const createEntryC = async ({ body }, res) => {
    try {
        const response = await createEntry(body)
        res.status(200).json({
            ok: true,
            response
        })
    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error createEntryC',
            body,
            e
        })
    }
}

const updateEntryC = async ({ body, params }, res) => {
    try {
        const response = await updateEntry(body, params.id)
        res.status(200).json({
            ok: true,
            response
        })
    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error updateEntryC',
            body,
            params,
            e
        })
    }
}

const deleteEntryC = async ({ params }, res) => {
    try {
        const response = await deleteEntry(params.id)
        res.status(200).json({
            ok: true,
            response
        })
    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'Error deleteEntryC',
            params,
            e
        })
    }
}

module.exports = {
    getEntriesC,
    createEntryC,
    updateEntryC,
    deleteEntryC
}