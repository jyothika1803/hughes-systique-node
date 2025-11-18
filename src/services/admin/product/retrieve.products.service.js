const { Product } = require('../../../models');
const { error, success } = require("../../../helpers/response");

const retrieveProductsService = async (req) => {

    const products = await Product.findAll();
    
    return success('Product created successfully!', {products});

};

module.exports = retrieveProductsService;