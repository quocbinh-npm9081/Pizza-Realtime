class authController {
    login(req, res) {
        res.render('auth/login');
    }
    register(req, res) {
        res.render('auth/register');
    }
    postRegister(req, res) {
        res.json(req.body);
    }
}


module.exports = new authController;