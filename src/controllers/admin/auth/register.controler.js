const {error} = require("../../../helpers/response");
const {registerService} = require("../../../services/admin/auth");


const registerUser = async (req, res) => {
    try {
        const response =  await registerService(req);
        res.status(201).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = registerUser;