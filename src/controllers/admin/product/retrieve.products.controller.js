const {error} = require("../../../helpers/response");
const {retrieveProductsService}  = require('../../../services/admin/product')

const retrieveProductsController = async (req, res) => {
    try {
       const response =  await retrieveProductsService(req);
       res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveProductsController;