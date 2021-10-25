const express = require('express');
const tpsController = require('../controllers/TPSController');

const router = express.Router();

router.route('/').post(tpsController.createGame);
router.route('/').post(tpsController.getGames);
router.route('/:id').post(tpsController.getGame);
router.route('/:id').post(tpsController.updateGame);
router.route('/:id').post(tpsController.deleteGame);

module.exports = router;