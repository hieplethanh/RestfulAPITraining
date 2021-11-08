const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const conffig = require('config');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "User name canot be emptied"],
        minlength:5,
        maxlength:100
    },
    email:{
        type: String,
        required: [true, "User e-mail canot be emptied"],
        minlength:5,
        maxlength:255
    },
    password:{
        type: String,
        required: [true, "User password canot be emptied"],
        minlength:5,
        maxlength:255
    },
    passwordConfirm:{
        type: String,
        required: [true, "User password conrirmation canot be emptied"],
        minlength:5,
        maxlength:255
    },
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id, isAdmin:this.isAdmin}, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = joi.object({
        name: joi.string().min(5).max(100).required(),
        email: joi.string().min(5).max(255).required(),
        password: joi.string().min(5).max(255).required(),
        passwordConfirm: joi.string().min(5).max(255).required(),
        isAdmin: joi.boolean().required()
    });
}

exports.User = User;
exports.validate = validateUser;