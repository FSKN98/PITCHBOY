// Importation express
const express = require("express");
const router = express.Router();

// Récupération données des villes
const citiesData = require("../test-technique/resources/laposte_hexasmal.json");

router.get("/villes", (req, res) => {
  // Renvoi de la liste complète des villes au format JSON
  res.json(citiesData);
});

module.exports = router;
