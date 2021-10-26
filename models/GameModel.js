const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    Game:{
        type: String,
        required: [true, "Name cannot be emptied."],
        minlength: 3,
        maxlength: 100,
        unique: true
    },
    Year: Number,
    Publisher: String,
    Studio: String,
    Genre: String,
    isPublished: Boolean
});

const Game = mongoose.model('Game', gameSchema);
exports.Game = Game;