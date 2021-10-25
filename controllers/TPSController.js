exports.createGame = async(req, res) => {
	try {
		let game = await ThirdPersonShooter.findOne({name: req.body.name});
		if (game)
		{
			return res.status(400).send('Game existed.');
		}
		const newGame = await ThirdPersonShooter.create(req.body);
		console.log('New game created successful.');

		return res.status(200).json({
			status: 'create success',
			game: newGame
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getGames= async(req, res) => {
	try {
		const game = await ThirdPersonShooter.find();
		return game.status(200).json({
			status: 'get success',
			game
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.getGame = async(req, res) => {
	try {
		const game = await ThirdPersonShooter.findById(req.params.id);
		return res.status(200).json({
			status: 'get success',
			game
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.updateGame = async(req, res) => {
	console.log('Update Game: ' + req.body.Game + ', year: ' + req.body.Year + 'publisher: ' + req.body.Publisher + ', studio: ' + req.body.Studio);
	try {
		const game = await ThirdPersonShooter.findByIdAndUpdate(req.params.id,
			{
				Game: req.body.Game,
				Year: req.body.Year,
				Publisher: req.body.Publisher,
				Studio: req.body.Studio,
			}, {new:true});

		return res.status(200).json({
			status: 'update success',
			game: update,
		});
	}
	catch(error) {
		console.log(error);
	}
};

exports.deleteGame = async(req, res) => {
	try {
		const game = await ThirdPersonShooter.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			status: 'delete success',
			game:remove,
		});
	}
	catch(error) {
		console.log(error);
	}
};