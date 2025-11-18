const { Order, Product } = require('../../../models');
const { error, success } = require("../../../helpers/response");

const createOrderService = async (req) => {

    const { productId, description, qty, phone, email, pincode, address } = req.body;


    const product = await Product.findByPk(productId);

    if(!product) return error('Invalid product id.');

    const order = await Order.create({
        productId,
        description,
        qty,
        phone,
        email,
        pincode,
        address
    })


    return success('Order created successfully!', order);

};

module.exports = createOrderService;