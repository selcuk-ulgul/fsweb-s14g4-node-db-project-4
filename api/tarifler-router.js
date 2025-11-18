const express = require("express");
const router = express.Router();
const checkId = require("./tarifler-middleware");
const { idyeGoreTarifGetir } = require("./tarifler-model");

router.get("/:id", checkId, async (req, res) => {
  const detaylar = await idyeGoreTarifGetir(req.id);
  res.status(200).json(detaylar);
});

module.exports = router;
