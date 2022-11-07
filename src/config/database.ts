import "dotenv/config"
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    <string>process.env.DB_NAME,
    <string>process.env.DB_USER,
    <string>process.env.DB_PASS,
    {
        host: <string>process.env.DB_HOST,
        dialect: "postgres"
    }
);