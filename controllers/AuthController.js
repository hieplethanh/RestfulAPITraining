const config = require('config');
const jwt = require('jsonwebtoken');
const lodash = require('lodash');
const bcrypt = require('bcrypt');
const {User} = require('../models/UserModel');

exports.login = async (req, res) => {
    console.log('Request login with email: ' + req.body.email + ' and password: ' + req.body.password);
    try {
        let user = await User.findOne({ email:req.body.email });
        if (!user) {
            return res.status(400).send('User with email ' + req.body.email + ' not found.');
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Wrong password');
        }

        const token = user.generateAuthToken();
        res.send(token);
    }
    catch(error) {
		console.log(error);
    }
};