const Product = require("../models/Product");

/**
 * Creates product
 * @param {Object} req 
 * @param {Object} res 
 */
exports.createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.send({ data: result, message: "Product created successfully!" });
  } catch (err) {
    res.send({ error: err.message });
  }
};

/**
 * Gets products
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getProducts = async (req, res) => {
  try {
    const result = await Product.findAll();
    res.send({ data: result });
    res.end();
  } catch (err) {
    res.send({ error: err.message });
  }
};

/**
 * Gets single product
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findOne({
      where: {
        id,
      },
    });
    res.send({ data: result });
    res.end();
  } catch (err) {
    res.send({ error: err.message });
  }
};

/**
 * Updates product
 * @param {Object} req 
 * @param {Object} res 
 */
exports.updateProduct = async (req, res) => {
  try {
    const {id} = req.body;
    const result = await Product.findOne({
      where: {
        id,
      },
    });
    result.update(req.body);

    res.send({ data: result });
  } catch (err) {
    res.send({ error: err.message });
  }
};

/**
 * Deletes product
 * @param {Object} req 
 * @param {Object} res 
 */
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await Product.destroy({
      where: {
        id,
      },
    });
    res.send({ data: id, message: "Product deleted successfully!" });
  } catch (err) {
    res.send({ error: err.message });
  }
};
