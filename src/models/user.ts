import { Sequelize, DataTypes } from "sequelize";

module.exports = (sequelize: Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return User;
};