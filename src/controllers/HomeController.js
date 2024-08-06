const userModel = require('../models/userModel')
const user = require('../models/userModel')
class HomeController {
    async index(req, res) {

        const user = await userModel.user.create({
            id: 1,
            firstName: 'Hildean',
            lastName: 'Dantas da Silva',
            email: 'hildeandantas@gmail.com'
        })
        res.json({
            data: user
        })
    }
}

module.exports = new HomeController()