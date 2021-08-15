const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
const AllProductRoutes = require("./routes/product.routes");
AllProductRoutes(app);
app.listen(8000, () => {
    console.log("Listening for the bodies to hit the floor")
})