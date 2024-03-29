const config = require('config');
const jwt = require('jsonwebtoken');

function isTokenValidated(req, res, next) 
{
	const token = req.header('x-auth-token');
	if (!token)
	{
		console.error('Access denied. No Token provided.');
		return res.status(401).send("Access denied. No token provided.");
	}

	try 
	{
		const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
		req.user = decoded;
		next();
	}
	catch (error)
	{
		console.error('Invalid Token.');
		return res.status(400).send('Invalid Token.');
		
	}
}

function isAdminValidated(req, res, next) {
	// 401 Unauthorized
	// 403 Forbidden

	if (!req.user.isAdmin) {
		return res.status(403).send('Access denied.');
	}
	next();
}

exports.isTokenValidated = isTokenValidated;
exports.isAdminValidated = isAdminValidated;