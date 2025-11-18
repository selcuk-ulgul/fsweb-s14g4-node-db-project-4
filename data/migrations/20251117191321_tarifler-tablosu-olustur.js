exports.up = function (knex) {
  return knex.schema
    .createTable("tarifler", (table) => {
      table.increments("tarif_id");
      table.string("tarif_adi").unique().notNullable();
      table.datetime("kayit_tarihi").defaultTo(knex.fn.now());
    })
    .createTable("adimlar", (table) => {
      table.increments("adim_id");
      table
        .integer("tarif_id")
        .unsigned()
        .references("tarif_id")
        .inTable("tarifler")
        .onDelete("CASCADE");
      table.integer("adim_sirasi").notNullable();
      table.text("adim_talimati").notNullable();
    })
    .createTable("malzemeler", (table) => {
      table.increments("malzeme_id");
      table.string("malzeme_adi").unique().notNullable();
    })
    .createTable("adim_malzeme", (table) => {
      table
        .integer("adim_id")
        .unsigned()
        .references("adim_id")
        .inTable("adimlar")
        .onDelete("CASCADE");
      table
        .integer("malzeme_id")
        .unsigned()
        .references("malzeme_id")
        .inTable("malzemeler")
        .onDelete("CASCADE");
      table.integer("kullanim_sirasi").notNullable();
      table.float("miktar").notNullable();
      table.primary(["adim_id", "malzeme_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("adim_malzeme")
    .dropTableIfExists("malzemeler")
    .dropTableIfExists("adimlar")
    .dropTableIfExists("tarifler");
};
