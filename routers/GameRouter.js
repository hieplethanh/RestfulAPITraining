const express = require('express');
const gameController = require('../controllers/GameController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth.isTokenValidated);
router.route('/').post(gameController.createGame);
router.route('/').get(gameController.getGames);

router.use(auth.isAdminValidated);
router.route('/:id').get(gameController.getGame);
router.route('/:id').put(gameController.updateGame);
router.route('/:id').delete(gameController.deleteGame);

module.exports = router;