const express = require("express");
const router = express.Router();

router.put("/zip-codes/:codePostal", (req, res) => {
  const codePostalSearch = req.params.codePostal;
  const nouvellesDonnees = req.body;

  const codePostalFindIndex = postalCodesData.findIndex(
    (codePostal) => codePostal.fields.code_postal === codePostalSearch
  );

  if (codePostalFindIndex !== -1) {
    postalCodesData[codePostalFindIndex].fields = {
      ...postalCodesData[codePostalFindIndex].fields,
      ...nouvellesDonnees,
    };

    res.json({
      message: "Code postal mis à jour avec succès",
      updatedData: postalCodesData[codePostalFindIndex],
    });
  } else {
    res.status(404).json({ message: "Code postal non trouvé" });
  }
});
