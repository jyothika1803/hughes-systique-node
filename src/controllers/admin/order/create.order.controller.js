const {error} = require("../../../helpers/response");
const { createOrderService } = require("../../../services/admin/order");

const createOrderController = async (req, res) => {
    try {
       const response =  await createOrderService(req);
       res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = createOrderController;