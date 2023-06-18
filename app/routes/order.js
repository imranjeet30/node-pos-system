const orderController = require('../controllers/OrdersController');

module.exports = (app) => {
    app.get('/api/orders/list', orderController.getsOrder);
    app.post('/api/orders/save', orderController.createOrder);
    app.get('/api/orders/single/:id', orderController.getSingleOrder);
    app.get('/api/orders/update', orderController.updateOrder);
};