const { Sequelize } = require('sequelize')
require('dotenv').config()
class Database {
    constructor() {

        // this.dbConfig = {
        //     dialect: 'postgres',
        //     database: process.env.DATABASE,
        //     host: process.env.DB_HOST,
        //     port: process.env.PORT,
        //     username: process.env.DB_USERNAME,
        //     password: process.env.DB_PASSWORD,
        //     loggin: true
        // }
        
        this.localDbConfig = {
            dialect: 'mssql',
            database: "Bot",
            host: 'DESKTOP-0D6EIIP\\SQLEXPRESS',
            port: '51712',
            username: 'Dantas',
            password: 'Senha123#',
            logging: console.log
        }
        this.dbConnect = new Sequelize(this.localDbConfig)
        this.sync()
    }

    async sync() {
        await this.dbConnect.sync()
        console.log('Database sync sucessfully')
    }
}

module.exports = new Database().dbConnect