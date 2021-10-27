const ProductModel = require("../models/ProductModel");

module.exports.product_info_controller = async (req, res, next) => {
  try {
    const { ProductID } = req.params;
    const product_info = await ProductModel.findOne({ ProductID: ProductID });

    return res.status(200).json(product_info);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
