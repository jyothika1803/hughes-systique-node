const { Product } = require('../../../models');
const { error, success } = require("../../../helpers/response");
const { expressFileUpload } = require('../../../helpers/fileUpload')

const createProductService = async (req) => {

    const { name, description, length, width, height, weight, from, to } = req.body;

    const files = req.files;

    let imageFileName = null;
    let videoFileName = null;
    let payload = {};


    if (files?.imageFile) {
        const data = await expressFileUpload(files.imageFile, 'product', 'product/image');
        imageFileName = data.fileName + data.extension;
        payload = {
            ...payload,
            imageFile: data.fileName + data.extension
        }
    }
    if (files?.videoFile) {
        const data = await expressFileUpload(files.videoFile, 'product', 'product/video');
        videoFileName = data.fileName + data.extension;
        payload = {
            ...payload,
            videoFile: data.fileName + data.extension
        }
    }

    payload = {
        ...payload,
        name,
        description,
        length,
        width,
        height,
        weight,
        validFrom: from,
        validTo: to
    }

    const [product, isCreated] = await Product.findOrCreate({
        where: { name },
        defaults: payload,
    });

    if(!isCreated) return error('Name already used!');
    
    console.log(product)

    return success('Product created successfully!', product);

};

module.exports = createProductService;