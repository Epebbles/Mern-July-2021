const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get('/api/joke', JokeController.getAllJokes);
    app.post('/api/joke', JokeController.addNewJoke);
    app.get('/api/joke/:jokeId', JokeController.findSingleJoke);
    app.put('/api/joke/:jokeId', JokeController.updateJoke);
    app.delete('/api/joke/:jokeId', JokeController.deleteJoke);
}