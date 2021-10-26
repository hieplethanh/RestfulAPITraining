const express = require('express');
const rtsController = require('../controllers/RTSController');

const router = express.Router();

router.route('/').post(rtsController.createGame);
router.route('/').get(rtsController.getGames);
router.route('/:id').get(rtsController.getGame);
router.route('/:id').put(rtsController.updateGame);
router.route('/:id').post(rtsController.deleteGame);

module.exports = router;