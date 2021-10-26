const express = require('express');
const rpgController = require('../controllers/ActionRPGController');

const router = express.Router();

router.route('/').post(rpgController.createGame);
router.route('/').get(rpgController.getGames);
router.route('/:id').get(rpgController.getGame);
router.route('/:id').put(rpgController.updateGame);
router.route('/:id').post(rpgController.deleteGame);

module.exports = router;