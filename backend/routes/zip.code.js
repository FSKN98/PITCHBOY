const express = require("express");
const router = express.Router();

const postalCodesData = require("../test-technique/resources/laposte_hexasmal.json");

router.get("/api/zip-codes/code_postal", (req, res) => {
  const postalCodeSearch = req.params.codePostal;

  const postalCodeFound = postalCodesData.find(
    (codePostal) => codePostal.fields.code_postal === postalCodeSearch
  );

  if (postalCodeFound) {
    res.json(postalCodeFound);
  } else {
    res.status(404).json({ message: "Code postal non trouvé" });
  }
});

module.exports = router;
