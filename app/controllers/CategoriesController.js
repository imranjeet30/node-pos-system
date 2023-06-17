const Category = require("../models/Category");

/**
 * Saves category
 * @param {Object} req 
 * @param {Object} res 
 */
exports.saveCategory = async (req, res) => {
  try {
    const result = await Category.create(req.body);
    res.send({ data: result, message: "Category created successfully!" });
  } catch (err) {
    res.send({ error: err.message });
  }
};

/**
 * Gets categories
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getCategories = async(req, res) => {
    try{
        const result = await Category.findAll();
        res.send({ data: result});
    }
    catch(err){
        res.send({ error: err.message });
    }
};

/**
 * Updates category
 * @param {Object} req 
 * @param {Object} res 
 */
exports.updateCategory = async(req, res) => {
    try{
        const {id} = req.body;
        const result = await Category.findOne({
            where:{
                id
            }
        });
        if(result){
            result.update(req.body);
            res.send({ data: result});
            res.end();
        }else{
            res.send({ error: "No record found" });
        }
    }
    catch(err){
        res.send({ error: err.message });
    }
};

/**
 * Gets single category
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getSingleCategory = async(req, res) => {
    try{
        const {id} = req.params;
        const result = await Category.findOne({
            where:{
                id
            }
        });
        res.send({ data: result});
        res.end();
    }
    catch(err){
        res.send({ error: err.message });
    }
}

/**
 * Deletes category
 * @param {Object} req 
 * @param {Object} res 
 */
exports.deleteCategory = async(req, res) => {
    try{
        const {id} = req.body;
        const result = await Category.destroy({
            where: {
                id
            }
        })
        res.send({ data: id, message: "Category deleted successfully!" });
    }
    catch(err){
        res.send({ error: err.message });
    }
}