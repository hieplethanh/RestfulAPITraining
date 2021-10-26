const express = require('express');
const publisherController = require('../controllers/PublisherController');

const router = express.Router();

router.route('/').post(publisherController.createPublisher);
router.route('/').get(publisherController.getPublishers);
router.route('/:id').get(publisherController.getPublisher);
router.route('/:id').put(publisherController.updatePublisher);
router.route('/:id').post(publisherController.deletePublisher);

module.exports = router;