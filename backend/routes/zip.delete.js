const express = require("express");
const router = express.Router();

router.delete("/zip-codes/:codePostal", (req, res) => {
  const codePostalSearch = req.params.codePostal;

  const codePostalFindIndex = postalCodesData.findIndex(
    (codePostal) => codePostal.fields.code_postal === codePostalSearch
  );

  if (codePostalFindIndex !== -1) {
    postalCodesData.splice(codePostalFindIndex, 1);

    res.json({ message: "Code postal supprimé avec succès" });
  } else {
    res.status(404).json({ message: "Code postal non trouvé" });
  }
});

module.exports = router;
