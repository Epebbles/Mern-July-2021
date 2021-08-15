const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:productId', ProductController.findSingleProduct);
    app.put('/api/products/:productId', ProductController.updateProduct);
    app.delete('/api/products/:productId', ProductController.deleteProduct);
};