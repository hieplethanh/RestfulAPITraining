const express = require('express');
const studioController = require('../controllers/StudioController');

const router = express.Router();

router.route('/').post(studioController.createStudio);
router.route('/').get(studioController.getStudios);
router.route('/:id').get(studioController.getStudio);
router.route('/:id').put(studioController.updateStudio);
router.route('/:id').post(studioController.deleteStudio);

module.exports = router;