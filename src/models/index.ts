import { Sequelize, Model } from "sequelize";

import { dbConfig } from "../config/database";

const sequelize = new Sequelize(<string>dbConfig.db, <string>dbConfig.user, <string>dbConfig.pass, {
    host: <string>dbConfig.host,
    dialect: "postgres"
});

const db = {
    "sequelize": Sequelize,
    "users": Model
};

db.users = require("./user")(sequelize);

module.exports = db;