const {apiRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {loginValidation, registerValidation} = require("../../validations/admin/auth.validations");
const {wrapRequestHandler} = require("../../helpers/response");
const {loginController, registerController} = require("../../controllers/admin/auth");




apiRouter.post('/admin/login', validate(loginValidation), wrapRequestHandler(loginController));

// apiRouter.post('/admin/register', validate(registerValidation), wrapRequestHandler(registerController));