const productsController = require('../controllers/ProductsController');

module.exports = (app) => {
    app.post('/api/product/save', productsController.createProduct);
    app.get('/api/product/list', productsController.getProducts);
    app.get('/api/product/single/:id', productsController.getSingleProduct);
    app.post('/api/product/update', productsController.updateProduct);
    app.delete('/api/product/delete', productsController.deleteProduct);
}