const config = require('config');
const jwt = require('jsonwebtoken');
const lodash = require('lodash');
const bcrypt = require('bcrypt');

const {User, validate} = require('../models/UserModel');

exports.createUser = async(req, res) => {
    try {
        const {error} = validate(req, body);
        if (error) {
            return res.status(400).send('' + error);
        }

        let user = await User.findOne({ email:req.body.email });
        if (user) {
            return res.status(400).send('Email ' + req.body.email + ' was used.');
        }

        if (!(req.body.password === req.body.passwordConfirm)) {
            return res.status(400).send('Confirmation password doesn"t match user password.');
        }

        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password.salt);
        req.body.passwordConfirm = await bcrypt.hash(req.body.passwordConfirm.salt);
        const newUser = await User.create(req.body);

        console.log('New user with email:' + req.body.email + ' was created successfully.');

        return res.status(200).json({
			status: 'create success',
			User: newUser
		});
    }
    catch(error) {
		console.log(error);
	}
};

exports.getUsers = async(req, res) => {
    try {
        const user = await User.find();
        return res.status(200).json({
            status: 'Get all users successful.',
            user
        });
    }
    catch (error) {
        console.log(error);
    }
};



