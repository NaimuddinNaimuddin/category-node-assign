const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')


router.get('/get-categories', categoryController.getCategories)
router.post('/add-categories', categoryController.addCategories)


module.exports = router
    