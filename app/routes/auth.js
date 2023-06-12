
const authController = require('../controllers/AuthController');
module.exports = (app) => {
    app.post('/api/auth/login', authController.login);
    app.post('/api/auth/signup', authController.signup);
}

