const { Sequelize } = require('sequelize')
require('dotenv').config()
class Database {
    constructor() {

        this.dbConnect = new Sequelize(this.localDbConfig)
        this.sync()
    }

    async sync() {
        await this.dbConnect.sync()
        console.log('Database sync sucessfully')
    }
}

module.exports = new Database().dbConnect