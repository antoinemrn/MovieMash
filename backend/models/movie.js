const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({    
    title: { type: String, required: true },
    movieId: { type: Number, required: true },
    elo: { type: Number, required: true },
    nbGames: { type: Number, required: true }    
});

module.exports = mongoose.model('Movie', movieSchema);