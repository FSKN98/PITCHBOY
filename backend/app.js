const express = require("express");
const app = express();

// Importqtion des fichiers
const citiesRouter = require("./routes/cities.routes");
const zipCodesRouter = require("./routes/zipCodes.routes");
const deleteCodePostalRouter = require("./routes/deleteCodePostal.routes");
const updateCodePostalRouter = require("./routes/updateCodePostal.routes");

app.use("/api/cities", citiesRouter);
app.use("/api/zip-codes", zipCodesRouter);
app.use("/api/delete-zip-code", deleteCodePostalRouter);
app.use("/api/update-zip-code", updateCodePostalRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution ${port}`);
});
