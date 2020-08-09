const Sequelize = require('sequelize');
const db = require('../config/database');

const Person = db.define(
    'person',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            // autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            require: true
        },
        lastName: {
            type: Sequelize.STRING,
            require: true
        },
        age: {
            type: Sequelize.INTEGER,
            AllowNull: false

        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    },
    {
        tableName: 'person'
    }
);

module.exports = Person;