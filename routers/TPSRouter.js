const express = require('express');
const tpsController = require('../controllers/TPSController');

const router = express.Router();

router.route('/').post(tpsController.createGame);
router.route('/').get(tpsController.getGames);
router.route('/:id').get(tpsController.getGame);
router.route('/:id').put(tpsController.updateGame);
router.route('/:id').post(tpsController.deleteGame);

module.exports = router;