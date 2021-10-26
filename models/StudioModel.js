const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
    Studio:{
        type: String,
        required: [true, "Name cannot be emptied."],
        minlength: 3,
        maxlength: 100,
        unique: true
    },
    Year: Number,
    Founder: String,
    FirstGame: String,
    isPublished: Boolean
});

const Studio = mongoose.model('GameStudio', studioSchema);
exports.Studio = Studio;