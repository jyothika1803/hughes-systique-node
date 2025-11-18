const path = require('path')
const fs = require('fs/promises');


const expressFileUpload = async (file, prefix, dir) => {
    const fileName = `${prefix}-${file.md5 + +new Date + 1}`;
    const extension = path.extname(file.name);
    const fullPath = path.join(process.cwd(), `assets/uploads/${dir}`, fileName + extension);
    await fs.mkdir(path.dirname(fullPath), {recursive: true});
    await file.mv(fullPath);
    return {fileName, extension};
}

const fsWriteFileToDisk = async (buffer, ext, prefix, dir) => {
    const timestamp = Date.now();
    const fileName = `${prefix}-${timestamp}`;
    const fullPath = path.join(process.cwd(), `assets/uploads/${dir}`, fileName + ext);
    await fs.mkdir(path.dirname(fullPath), {recursive: true});
    await fs.writeFile(fullPath, buffer);
    return {fileName: fileName, extension: ext};
};


const fsUnlinkFromDisk = async (file, ...rest) => {
    await fs.unlink(path.join(process.cwd(), 'assets', 'uploads', ...rest, file))
}



module.exports = {
    expressFileUpload,
    fsWriteFileToDisk,
    fsUnlinkFromDisk,
}