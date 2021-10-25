const express = require('express');
const rpgController = require('../controllers/ActionRPGController');

const router = express.Router();

router.route('/').post(rpgController.createGame);
router.route('/').post(rpgController.getGames);
router.route('/:id').post(rpgController.getGame);
router.route('/:id').post(rpgController.updateGame);
router.route('/:id').post(rpgController.deleteGame);

module.exports = router;