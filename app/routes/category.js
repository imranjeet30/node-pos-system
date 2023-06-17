const categoryController = require('../controllers/CategoriesController');

module.exports = (app) => {
    app.post('/api/category/save', categoryController.saveCategory);
    app.get('/api/category/list', categoryController.getCategories);
    app.get('/api/category/single/:id', categoryController.getSingleCategory);
    app.post('/api/category/update', categoryController.updateCategory);
    app.delete('/api/category/delete', categoryController.deleteCategory);
};