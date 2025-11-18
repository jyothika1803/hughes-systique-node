const {apiRouter, createRouter, retrieveRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {wrapRequestHandler} = require("../../helpers/response");
const { createOrderController, retrieveOrdersController } = require("../../controllers/admin/order");
const { createOrderValidation } = require("../../validations/admin/order.validations");




createRouter.post('/admin/order', validate(createOrderValidation), wrapRequestHandler(createOrderController));
retrieveRouter.get('/admin/orders', wrapRequestHandler(retrieveOrdersController));


