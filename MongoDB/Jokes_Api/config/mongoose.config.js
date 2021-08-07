const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("You are at Express! Damnit Jim!"))
    .catch(err => console.log("Nice try bud", err));