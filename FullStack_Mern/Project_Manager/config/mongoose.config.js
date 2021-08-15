const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Welcome to the show!"))
    .catch(err => console.log("Something went wrong", err));