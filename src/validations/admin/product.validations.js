const { body } = require("express-validator");



const createProductValidation = [
    body('name').notEmpty().withMessage('Name is required!'),
    body('description').notEmpty().withMessage('Description is required!'),
    body('to').notEmpty()
        .withMessage('validTo is required')
        .isISO8601()
        .withMessage('validTo must be a valid date')
        .toDate(),
        
    body('from').notEmpty()
        .withMessage('validFrom is required')
        .isISO8601()
        .withMessage('validFrom must be a valid date')
        .toDate(),


];



module.exports = {
    createProductValidation,
};