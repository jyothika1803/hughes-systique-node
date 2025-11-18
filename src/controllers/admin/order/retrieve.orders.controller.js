const { error } = require("../../../helpers/response");
const { retrieveOrdersService } = require('../../../services/admin/order')

const retrieveOrdersController = async (req, res) => {
    try {
        const response = await retrieveOrdersService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveOrdersController;