const Sequelize = require('sequelize')


class UserModel {
    constructor() {
        this.dbConnect = require('../config/database')
        this.user = this.dbConnect.define("users", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            }
        })

        return this.user
    }
}

module.exports = new UserModel()