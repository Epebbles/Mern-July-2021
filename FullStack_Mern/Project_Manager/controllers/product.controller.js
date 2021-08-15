const Product = require('../models/product.model');

const index = (req, res) => {
    res.json({
        message: "Hello Goodbye"
    });
};

const createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
};

const getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
};

const findSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.productId })
        .then((product) => res.json(product))
        .catch(err => res.json(err))
};

const updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.productId },
        { price: req.body.price },
        {description: req.body.description },
        { new: true, runValidators: true },
    )
        .then((updatedProduct) => res.json({ product: updatedProduct }))
        .catch((err) => res.json(err))
};

const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.productId})
        .then((deleteConfirm) => res.json(deleteConfirm))
        .catch(err => res.json(err))
}

module.exports = {
    index,
    createProduct,
    getAllProducts,
    findSingleProduct,
    updateProduct,
    deleteProduct,
};
