const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    Publisher:{
        type: String,
        required: [true, "Name cannot be emptied."],
        minlength: 3,
        maxlength: 100,
        unique: true
    },
    Year: Number,
    Founder: String,
    isPublished: Boolean
});

const Publisher = mongoose.model('Publisher', publisherSchema);
exports.Publisher = Publisher;