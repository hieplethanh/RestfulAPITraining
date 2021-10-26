const express = require('express');
const mobaController = require('../controllers/MOBAController');

const router = express.Router();

router.route('/').post(mobaController.createGame);
router.route('/').get(mobaController.getGames);
router.route('/:id').get(mobaController.getGame);
router.route('/:id').put(mobaController.updateGame);
router.route('/:id').post(mobaController.deleteGame);

module.exports = router;