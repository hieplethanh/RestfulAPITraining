const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const rpgRouter = require('./routers/ActionRPGRouter');
const mobaRouter = require('./routers/MOBARouter');
const rtsRouter = require('./routers/RTSRouter');
const tpsRouter = require('./routers/TPSRouter');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("Server is running port:  " + port);
});

app.use(express.json());
app.use('/rpg',rpgRouter);
app.use('/moba',mobaRouter);
app.use('/rts',rtsRouter);
app.use('/tps',tpsRouter);

mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Cannot connect to MongoDB...'));

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
    isPublished: Boolean
});