const db = require("../data/db-config");

const getById = async (tarif_id) => {
  return await db("tarifler").where({ tarif_id }).first();
};

const idyeGoreTarifGetir = async (tarif_id) => {
  return await db("tarifler as t")
    .join("adimlar as a", "t.tarif_id", "a.tarif_id")
    .join("adim_malzeme as adm", "a.adim_id", "adm.adim_id")
    .join("malzemeler as m", "m.malzeme_id", "adm.malzeme_id")
    .select("t.tarif_adi", "a.adim_talimati", "adm.miktar", "m.malzeme_adi")
    .where("t.tarif_id", tarif_id);
};

module.exports = {
  getById,
  idyeGoreTarifGetir,
};
