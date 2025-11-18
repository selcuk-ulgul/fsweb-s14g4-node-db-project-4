const path = require("path");
const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "dev.db3"), // veya "../data/dev.db3" — senin yapına göre
  },
  useNullAsDefault: true,
};

console.log("Bağlanılan veritabanı dosyası:", config.connection.filename);

const db = knex(config);
module.exports = db;
