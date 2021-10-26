const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

//const rpgRouter = require('./routers/ActionRPGRouter');
//const mobaRouter = require('./routers/MOBARouter');
//const rtsRouter = require('./routers/RTSRouter');
//const tpsRouter = require('./routers/TPSRouter');
var gameRouter = require('./routers/GameRouter');
const studioRouter = require('./routers/StudioRouter');
const publisherRouter = require('./routers/PublisherRouter');
const genreRouter = require('./routers/GenreRouter');

const app = express();

const port = 3001;

//app.use(express.json());
//app.use('/rpg',rpgRouter);
//app.use('/moba',mobaRouter);
//app.use('/rts',rtsRouter);
//app.use('/tps',tpsRouter);

app.use('/game',gameRouter);
app.use('/studio',studioRouter);
app.use('/publisher',publisherRouter);
app.use('/genre',genreRouter);

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("Server is running port:  " + port);
});

mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Cannot connect to MongoDB...'));