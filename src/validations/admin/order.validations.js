const { body } = require("express-validator");



const createOrderValidation = [
    body('productId').notEmpty().withMessage('ProductId is required!').isInt({min:1}).withMessage('ProductId must be a positive integer.'),
    body('qty').notEmpty().withMessage('Qty is required!'),
    body('description').notEmpty().withMessage('Description is required!'),
    body('address').notEmpty().withMessage('Address is required!'),
    body('pincode').notEmpty().withMessage('Pincode is required!').isLength({min:6,max:6}).withMessage('Pincode must be exact 6 digit.'),
    body('phone').notEmpty().withMessage('Phone is required!').isLength({min:10,max:10}).withMessage('Phone number must be exact 10 digit.'),
    body('email').notEmpty().withMessage('Email is required!').isEmail().withMessage('Invalid email.')
];



module.exports = {
    createOrderValidation,
};