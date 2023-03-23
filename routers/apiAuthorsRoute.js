const express = require('express');
const router = express.Router();

const {
    getAuthorsC,
    createAuthorC,
    updateAuthorC,
    deleteAuthorC } = require('../controllers/apiAuthorsController')

router.get('/', getAuthorsC);
router.post('/', createAuthorC);
router.put('/:id', updateAuthorC);
router.delete('/:id', deleteAuthorC);

module.exports = router;