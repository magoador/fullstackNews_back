const Category = require('../models/Category.model')

module.exports.categoryController = {
    addCategory: async (req, res) => {
        try {
            const addedCategory = await Category.create({
                name: req.body.name
            })
            res.json(addedCategory)
        } catch(err) {
            res.json(err)
        }
    },
    getAllCategories: async (req, res) => {
        try {
            const  allCategories = await Category.find()
            res.json(allCategories)
        } catch(err) {
            res.json(err)
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const categoryById = await Category.findById(req.params.id)
            res.json(categoryById)
        } catch(err) {
            res.json(err)
        }
    },
    updateCategoryById: async (req, res) => {
        try {
            const updatedCategory = await Category.findByIdAndUpdate(req.params.id, {
                name: req.body.name
            })
            res.json(updatedCategory)
        } catch(err) {
            res.json(err)
        }
    },
    deleteCategoryById: async (req, res) => {
        try {
            const deletedCategory = await Category.findByIdAndDelete(req.params.id)
            res.json(deletedCategory)
        } catch(err) {
            res.json(err)
        }
    }
}