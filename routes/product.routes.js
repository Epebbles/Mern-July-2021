const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    app.get('/api/product', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
}