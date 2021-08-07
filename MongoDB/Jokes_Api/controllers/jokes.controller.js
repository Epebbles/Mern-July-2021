const Joke = require("../models/jokes.model");

const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json({ jokes: allJokes }))
        .catch((err) => res.json({ errMsg: err }));
};

const addNewJoke = (req, res) => {
    Joke.create({
        name: req.body.name,
        rating: req.body.rating,
    })
        .then((newJoke) => res.json({ newJoke: newJoke }))
        .catch((err) => res.json({ errMsg: err }));
};

const findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.jokeId })
        .then((joke) => res.json({ joke: joke }))
        .catch((err) => res.json({ errMsg: err }));
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.jokeId }, 
        {rating: req.body.rating},
        { new: true, runValidators: true },
    )
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.json({ errMsg: err }));
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.jokeId })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ errMsg: err }));
};

module.exports = {
    getAllJokes,
    addNewJoke,
    findSingleJoke,
    updateJoke,
    deleteJoke,
};