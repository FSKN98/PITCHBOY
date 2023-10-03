const express = require("express");
const app = express();

const citiesRouter = require("./routes/city.routes");

app.use("/api", citiesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution ${port}`);
});
