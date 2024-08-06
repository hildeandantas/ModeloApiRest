const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const homeRoutes = require('./src/routes/homeRoutes')


class App {
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
    }

    middleware() {
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/', homeRoutes)
    }
}

module.exports = new App().app