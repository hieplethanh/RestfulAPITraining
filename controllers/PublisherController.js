const Publisher = require('../models/publisherModel');

exports.createPublisher = async(req, res) => {
	try {
		let publisher = await Publisher.findOne({name: req.body.name});
		if (publisher)
		{
			return res.status(400).send('Publisher information existed.');
		}
		const newPublisher = await Publisher.create(req.body);
		console.log('New game publisher information created successful.');

		return res.status(200).json({
			status: 'create success',
			publishe: newPublisher
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getPublishers= async(req, res) => {
	try {
		const publishe = await Publisher.find();
		return res.status(200).json({
			status: 'get success',
			publisher
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getPublisher = async(req, res) => {
	try {
		const publisher = await Publisher.findById(req.params.id);
		return res.status(200).json({
			status: 'get success',
			publisher
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.updatePublisher = async(req, res) => {
	console.log('Update Publisher: ' + req.body.Publisher + ', year: ' + req.body.Year + 'publisher: ' + req.body.Founder);
	try {
		const publisher = await Publisher.findByIdAndUpdate(req.params.id,
			{
				Publisher: req.body.Publisher,
				Year: req.body.Year,
				Founder: req.body.Founder,
			}, {new:true});

		return res.status(200).json({
			status: 'update success',
			publisher: update,
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.deletePublisher = async(req, res) => {
	try {
		const publisher = await Publisher.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			status: 'delete success',
			publisher:remove,
		});
	}
	catch(error) {
		console.log(error);
	}
};