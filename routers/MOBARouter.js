const express = require('express');
const mobaController = require('../controllers/MOBAController');

const router = express.Router();

router.route('/').post(mobaController.createGame);
router.route('/').post(mobaController.getGames);
router.route('/:id').post(mobaController.getGame);
router.route('/:id').post(mobaController.updateGame);
router.route('/:id').post(mobaController.deleteGame);

module.exports = router;