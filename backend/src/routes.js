const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/ongs", OngController.list);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.list);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.create);

module.exports = routes;