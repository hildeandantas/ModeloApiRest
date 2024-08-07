class HomeController {
    async index(req, res) { 
        res.send('Hello world')
    }
}

module.exports = new HomeController()