const Genre = require('../models/GameGenreModel');

exports.createGenre = async(req, res) => {
	try {
		let gen = await Genre.findOne({name: req.body.name});
		if (gen)
		{
			return res.status(400).send('Game genre existed.');
		}
		const newGen = await Genre.create(req.body);
		console.log('New genre created successful.');

		return res.status(200).json({
			status: 'create success',
			gen: newGen
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getGenres= async(req, res) => {
	try {
		const gen = await Genre.find();
		return res.status(200).json({
			status: 'get success',
			gen
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getGenre = async(req, res) => {
	try {
		const gen = await Genre.findById(req.params.id);
		return res.status(200).json({
			status: 'get success',
			gen
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.updateGenre = async(req, res) => {
	console.log('Update GameGenre: ' + req.body.GameGenre + ', FirstGame: ' + req.body.FirstGame + 'CurrentPopularity: ' + req.body.CurrentPopularity);
	try {
		const gen = await Genre.findByIdAndUpdate(req.params.id,
			{
				GameGenre: req.body.GameGenre,
				FirstGame: req.body.FirstGame,
				CurrentPopularity: req.body.CurrentPopularity,
			}, {new:true});

		return res.status(200).json({
			status: 'update success',
			gen: update,
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.deleteGenre = async(req, res) => {
	try {
		const gen = await Genre.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			status: 'delete success',
			gen:remove,
		});
	}
	catch(error) {
		console.log(error);
	}
};