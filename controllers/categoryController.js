const categoryModel = require('../models/categoryModel')

module.exports.addCategories = async (req, res) => {
    try {
        const _arr = req.body
        const response = await categoryModel.insertMany(_arr)
        if (response) {
            return res.send({ code: 200, message: 'Added Success' })
        }
    } catch (err) {
        return res.send({ code: 500, message: 'Server Error' })
    }
}



module.exports.getCategories = async (req, res) => {
    try {
        const _data = await categoryModel.find({})
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}


