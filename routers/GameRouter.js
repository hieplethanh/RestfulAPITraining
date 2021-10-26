const express = require('express');
const gameController = require('../controllers/GameController');

const router = express.Router();

router.route('/').post(gameController.createGame);
router.route('/').get(gameController.getGames);
router.route('/:id').get(gameController.getGame);
router.route('/:id').put(gameController.updateGame);
router.route('/:id').delete(gameController.deleteGame);

module.exports = router;