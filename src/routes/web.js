const homeController = require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers');

function route(app) {
    app.get('/login', authController.login)
    app.post('/register', authController.postRegister);
    app.get('/register', authController.register);
    app.get('/cart', cartController.index);
    app.post('/update-cart', cartController.update);
    app.get('/', homeController.index);
}


module.exports = route;