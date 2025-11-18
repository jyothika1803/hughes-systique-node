const { Order } = require('../../../models');
const { error, success } = require("../../../helpers/response");

const retrieveOrdersService = async (req) => {

    const orders = await Order.findAll();
    
    return success('Order created successfully!', {orders});

};

module.exports = retrieveOrdersService;