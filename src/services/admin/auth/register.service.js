const {User} = require('../../../models');
const {generateBcrypt} = require("../../../helpers/bcrypt");
const {error, success} = require("../../../helpers/response");
const {generateJWT} = require("../../../helpers/token");

const registerService = async (req) => {

    const {name, email, password} = req.body;

    let [user, isCreated] = await User.findOrCreate({
        where: {email},
        defaults: {
            name,
            email,
            password: generateBcrypt(password)
        }
    });

    if (!isCreated) return error("Email address already in use.");

    const token = generateJWT(user.get({plain: true}));

    return success('', {user, token});

};

module.exports = registerService;