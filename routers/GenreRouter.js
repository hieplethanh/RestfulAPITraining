const express = require('express');
const genController = require('../controllers/GenreController');

const router = express.Router();

router.route('/').post(genController.createGenre);
router.route('/').get(genController.getGenres);
router.route('/:id').get(genController.getGenre);
router.route('/:id').put(genController.updateGenre);
router.route('/:id').post(genController.deleteGenre);

module.exports = router;