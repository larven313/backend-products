const Sequelize = require("sequelize");

const db = new Sequelize("yktkntux_auth_db", "yktkntux_sukma", "dYrijQi.2yb@", {
  host: "sukmax.my.id",
  dialect: "mysql",
});

module.exports = db;
