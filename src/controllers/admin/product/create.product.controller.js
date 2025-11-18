const {error} = require("../../../helpers/response");
const {createProductService}  = require('../../../services/admin/product')

const createProductController = async (req, res) => {
    try {
       const response =  await createProductService(req);
       res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = createProductController;