const menuSchema = require('../../models/menu');
class homeController {
    async index(req, res) {
        const pizzas = await menuSchema.find();
        res.render('home', { pizzas: pizzas });
    }
}


module.exports = new homeController;