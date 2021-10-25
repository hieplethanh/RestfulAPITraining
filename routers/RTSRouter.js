const express = require('express');
const rtsController = require('../controllers/RTSController');

const router = express.Router();

router.route('/').post(rtsController.createGame);
router.route('/').post(rtsController.getGames);
router.route('/:id').post(rtsController.getGame);
router.route('/:id').post(rtsController.updateGame);
router.route('/:id').post(rtsController.deleteGame);

module.exports = router;