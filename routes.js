const express = require("express");
const route = express.Router();
const personController = require("./controllers/PersonController");

route.get("/", personController.home );
route.post("/person", personController.create );
route.get("/person", personController.findAllPerson );
route.get("/person/:id", personController.findPerson );
route.patch("/person/:id", personController.updatePerson );


module.exports = route;