const ProductManager = require("../managers/product.manager");

const getProductById = async (req, res) => {};

const getAllProducts = async (req, res) => {
  try {
    // console.log("IN getAllProducts")
    const products = await ProductManager.allProducts();
    // console.log("IN getAllProducts", products)
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductById,
  getAllProducts,
};
