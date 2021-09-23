const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const app = express();


mongoose.connect('mongodb+srv://listo_admin:Q5RAd8QgDcnxDdMb@cluster0.tgccr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Connexion à MongoDB échouée  : ' + error));

app.use(express.json());
app.use(express.raw());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/movie', (req, res, next) => { 
    delete req.body._id;   
    const movie = new Movie({...req.body});
    movie.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !', createdObj : movie}))
      .catch(error => res.status(400).json({ error }));
  });

  app.get('/api/movie/:dbId', (req, res, next) => {
      console.log("Getting " + req.params.dbId);
    Movie.findOne({ 'movieId': req.params.dbId })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });

  app.put('/api/movie/:id', (req, res, next) => {
    Movie.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;