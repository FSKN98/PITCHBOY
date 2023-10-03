const express = require("express");
const router = express.Router();

// Importation des fichiers
const citiesRouter = require("./routes/city.routes");
const zipCodesRouter = require("./routes/zip.code");
const deleteCodePostalRouter = require("./routes/zip.delete");
const updateCodePostalRouter = require("./routes/zip.search.code");

router.get("/api/cities", citiesRouter);
router.get("/api/zip-codes", zipCodesRouter);
router.delete("/api/delete-zip-code", deleteCodePostalRouter);
router.put("/api/update-zip-code", updateCodePostalRouter);

module.exports = router;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution ${port}`);
});
