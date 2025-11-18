exports.seed = async function (knex) {
  await knex("adim_malzeme").del();
  await knex("malzemeler").del();
  await knex("adimlar").del();
  await knex("tarifler").del();

  const [tarif_id] = await knex("tarifler").insert({
    tarif_adi: "Spagetti Bolonez",
    kayit_tarihi: "2021-01-01 08:23:19",
  });

  const [adim1_id] = await knex("adimlar").insert({
    tarif_id,
    adim_sirasi: 1,
    adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
  });

  const [adim2_id] = await knex("adimlar").insert({
    tarif_id,
    adim_sirasi: 2,
    adim_talimati: "1 yemek kaşığı zeytinyağı ekleyin",
  });

  const [malzeme_id] = await knex("malzemeler").insert({
    malzeme_adi: "zeytinyağı",
  });

  await knex("adim_malzeme").insert({
    adim_id: adim2_id,
    malzeme_id,
    kullanim_sirasi: 1,
    miktar: 0.014,
  });
};
