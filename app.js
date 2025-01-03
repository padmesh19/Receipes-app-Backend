const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/recipes", recipeRoutes);

module.exports = app;