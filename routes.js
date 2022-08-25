const express = require("express");
const route = express.Router();
const personController = require("./controllers/PersonController");

route.get("/", personController.home );
route.post("/person", personController.create );

module.exports = route;