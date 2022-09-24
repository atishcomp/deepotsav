const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name:'deepotsav',
    api_key:'367121351339583',
    api_secret:'N95Ur9fwq_LmooptaRG0-n0XyRQ'
})

module.exports = cloudinary;