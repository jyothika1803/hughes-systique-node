const {apiRouter, createRouter, retrieveRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {wrapRequestHandler} = require("../../helpers/response");
const { createProductController, retrieveProductsController } = require("../../controllers/admin/product");
const { createProductValidation } = require("../../validations/admin/product.validations");




createRouter.post('/admin/product', validate(createProductValidation), wrapRequestHandler(createProductController));
retrieveRouter.get('/admin/products', wrapRequestHandler(retrieveProductsController));

