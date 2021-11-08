const {Studio} = require('../models/StudioModel');

exports.createStudio = async(req, res) => {
	try {
		let studio = await Studio.findOne({name: req.body.name});
		if (studio)
		{
			return res.status(400).send('Studio information existed.');
		}
		const newStudio = await Studio.create(req.body);
		console.log('New studio information created successful.');

		return res.status(200).json({
			status: 'create success',
			studio: newStudio
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getStudios= async(req, res) => {
	try {
		const studio = await Studio.find();
		return res.status(200).json({
			status: 'get success',
			studio
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getStudio = async(req, res) => {
	try {
		const studio = await Studio.findById(req.params.id);
		return res.status(200).json({
			status: 'get success',
			studio
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.updateStudio = async(req, res) => {
	console.log('Update Studio: ' + req.body.Studio + ', year: ' + req.body.Year + 'founder: ' + req.body.Founder + ', first game: ' + req.body.FirstGame);
	try {
		const studio = await Studio.findByIdAndUpdate(req.params.id,
			{
				Studio: req.body.Studio,
				Year: req.body.Year,
				Founder: req.body.Founder,
				FirstGame: req.body.FirstGame,
			}, {new:true});

		return res.status(200).json({
			status: 'update success',
			studio: update,
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.deleteStudio = async(req, res) => {
	try {
		const studio = await Studio.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			status: 'delete success',
			studio:remove,
		});
	}
	catch(error) {
		console.log(error);
	}
};