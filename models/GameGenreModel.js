const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    GameGenre:{
        type: String,
        required: [true, "Name cannot be emptied."],
        minlength: 3,
        maxlength: 100,
        unique: true
    },
    FirstGame: String,
    CurrentPopularity: Number,
    isPublished: Boolean
});

const Genre = mongoose.model('GameGenre', genreSchema);
exports.Genre = Genre;