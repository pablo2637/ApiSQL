const express = require('express');
const router = express.Router();

const {
    getEntriesC,
    createEntryC,
    updateEntryC,
    deleteEntryC } = require('../controllers/apiEntriesController')

    
router.get('/', getEntriesC);


router.post('/', createEntryC);


router.put('/:id', updateEntryC);


router.delete('/:id', deleteEntryC);


module.exports = router;